"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity"
import { SparklesText } from "@/components/magicui/sparkles-text"

// Greetings in 5 languages
const HI_TRANSLATIONS = ["Hi", "Salut", "Marhaba", "こんにちは", "你好"]
const IM_TRANSLATIONS = ["I'm", "Je suis", "Ana", "私は", "我是"]

export function HeroSection() {
  return (
    <section id="hero" className="flex flex-col gap-8">
      {/* Scroll Velocity Text - Greetings */}
      <div className="relative overflow-hidden py-4">
        <ScrollVelocityContainer className="mb-2">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            {HI_TRANSLATIONS.map((text, i) => (
              <span key={i} className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground/90 tracking-tight">
                {text}
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={2} direction={-1}>
            {IM_TRANSLATIONS.map((text, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground tracking-tight"
              >
                {text}
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-col gap-4">
        {/* Name with Sparkles */}
        <div className="flex flex-col">
          <SparklesText
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight"
            sparklesCount={12}
            colors={{ first: "#9E7AFF", second: "#38BDF8" }}
          >
            Karim Hammouche
          </SparklesText>
        </div>

        <p className="text-muted-foreground max-w-md text-base sm:text-lg">
          Entrepreneur & Web Developer. I build SaaS platforms, e-commerce stores, and integrate AI solutions.
          Passionate about digital transformation.
        </p>

        <div className="flex flex-col gap-1.5 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Worldwide • French, Moroccan, Algerian</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:karim@karimhammouche.com" className="hover:text-foreground transition-colors">
              karim@karimhammouche.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+33 7 43 56 13 04</span>
          </div>
        </div>
      </div>
    </section>
  )
}
