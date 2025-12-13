"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"
import type { Country } from "@/app/travels/page"

interface GlobeSceneProps {
  countries: Country[]
  onCountryClick: (country: Country) => void
  onCountryHover: (country: Country | null) => void
  hoveredCountry: Country | null
}

function latLngToPosition(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return [x, y, z]
}

function Particles() {
  const count = 2000
  const particlesRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 15 + Math.random() * 25
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function CountryMarker({
  country,
  isHovered,
  onHover,
  onClick,
}: {
  country: Country
  isHovered: boolean
  onHover: (country: Country | null) => void
  onClick: (country: Country) => void
}) {
  const position = useMemo(() => latLngToPosition(country.lat, country.lng, 2.05), [country.lat, country.lng])

  return (
    <group position={position}>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[isHovered ? 0.08 : 0.05, 16, 16]} />
        <meshBasicMaterial color={isHovered ? "#60a5fa" : "#3b82f6"} transparent opacity={0.3} />
      </mesh>

      {/* Core point */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          onHover(country)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          onHover(null)
          document.body.style.cursor = "auto"
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick(country)
        }}
      >
        <sphereGeometry args={[isHovered ? 0.045 : 0.03, 16, 16]} />
        <meshBasicMaterial color={isHovered ? "#ffffff" : "#60a5fa"} />
      </mesh>

      {/* Pulse ring for hovered */}
      {isHovered && <PulseRing />}
    </group>
  )
}

function Continents() {
  const texture = useLoader(THREE.TextureLoader, "/assets/3d/texture_earth.jpg")

  const material = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.35,
      emissive: new THREE.Color("#4a7ab5"),
      emissiveIntensity: 0.5,
    })
  }, [texture])

  return (
    <Sphere args={[2.005, 64, 64]}>
      <primitive object={material} attach="material" />
    </Sphere>
  )
}

function PulseRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.3
      ringRef.current.scale.setScalar(scale)
      const material = ringRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.5 - Math.sin(state.clock.elapsedTime * 4) * 0.3
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.06, 0.08, 32]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.5} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Globe({ countries, onCountryClick, onCountryHover, hoveredCountry }: GlobeSceneProps) {
  const globeRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const [isHoveringMarker, setIsHoveringMarker] = useState(false)

  useFrame((state) => {
    if (globeRef.current) {
      if (!isHoveringMarker) {
        globeRef.current.rotation.y += 0.001
      }
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const handleMarkerHover = (country: Country | null) => {
    setIsHoveringMarker(country !== null)
    onCountryHover(country)
  }

  return (
    <group ref={globeRef}>
      {/* Earth sphere - base */}
      <Sphere args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0d1117"
          emissive="#0a0a15"
          emissiveIntensity={0.2}
          shininess={5}
          transparent
          opacity={0.98}
        />
      </Sphere>

      <Continents />

      {/* Grid lines */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.06} />
      </Sphere>

      <Sphere args={[2.008, 48, 48]}>
        <meshBasicMaterial color="#1e40af" wireframe transparent opacity={0.03} />
      </Sphere>

      {/* Atmospheric glow */}
      <Sphere ref={glowRef} args={[2.15, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>

      {/* Country markers - use handleMarkerHover instead of onCountryHover */}
      {countries.map((country) => (
        <CountryMarker
          key={country.name}
          country={country}
          isHovered={hoveredCountry?.name === country.name}
          onHover={handleMarkerHover}
          onClick={onCountryClick}
        />
      ))}
    </group>
  )
}

function Scene(props: GlobeSceneProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />

      <Particles />
      <Globe {...props} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3.5}
        maxDistance={8}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
        rotateSpeed={0.5}
        zoomSpeed={0.5}
        autoRotate={false}
      />
    </>
  )
}

export function GlobeScene(props: GlobeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene {...props} />
    </Canvas>
  )
}
