"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MoonIcon,
  SunIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  FolderIcon,
  PenLineIcon,
  Globe2Icon,
} from "lucide-react"

const navItems = [
  { href: "#hero", icon: HomeIcon, label: "Home" },
  { href: "#about", icon: UserIcon, label: "About" },
  { href: "#work", icon: BriefcaseIcon, label: "Work" },
  { href: "#education", icon: GraduationCapIcon, label: "Education" },
  { href: "#projects", icon: FolderIcon, label: "Projects" },
]

export function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full border bg-background/80 backdrop-blur-md px-2 py-1.5 shadow-lg">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
            <a href={item.href}>
              <item.icon className="h-4 w-4" />
              <span className="sr-only">{item.label}</span>
            </a>
          </Button>
        ))}
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
          <Link href="/blog">
            <PenLineIcon className="h-4 w-4" />
            <span className="sr-only">Blog</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
          <Link href="/travels">
            <Globe2Icon className="h-4 w-4" />
            <span className="sr-only">Travels</span>
          </Link>
        </Button>
        <div className="w-px h-6 bg-border mx-1" />
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" onClick={toggleTheme}>
          {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  )
}
