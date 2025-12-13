"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const education = [
  {
    school: "Duke Language School",
    degree: "Full-time English Studies",
    period: "May 2025 – Sep 2025",
    logo: "D",
    href: "https://dukelanguageschool.com",
  },
  {
    school: "Patong Language School",
    degree: "Student of English",
    period: "Jun 2024 – Sep 2024",
    logo: "P",
    href: "https://patonglanguageschool.com",
  },
  {
    school: "Le Wagon",
    degree: "Web Application Developer Bootcamp",
    period: "Fev 2023 - Jul 2023",
    logo: "L",
    href: "https://www.lewagon.com",
  },
  {
    school: "Lycée Parc de Vilgénis",
    degree: "BTS Business and Sales Technician",
    period: "2014 – 2016",
    logo: "P",
    href: "https://www.lyceevilgenis.fr/",
  },
  {
    school: "Lycée Léonard de Vinci",
    degree: "High School Diploma – Electrical/Electronic",
    period: "2011 – 2014",
    logo: "L",
    href: "https://lyc-vinci-st-michel.ac-versailles.fr/",
  },
]

export function Education() {
  return (
    <section id="education" className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Education</h2>

      <div className="flex flex-col">
        {education.map((edu, index) => (
          <Link
            key={index}
            href={edu.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-2 group"
          >
            <Avatar className="size-12 border bg-muted">
              <AvatarFallback className="text-xs font-semibold">
                {edu.logo}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm group-hover:underline">
                  {edu.school}
                </h3>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {edu.period}
                </span>
              </div>

              <p className="text-xs text-muted-foreground">
                {edu.degree}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
