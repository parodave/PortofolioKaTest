"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const education = [
  {
    school: "Le Wagon",
    degree: "Web Application Developer Bootcamp",
    period: "2023",
    logo: "L",
    href: "https://www.lewagon.com",
  },
  {
    school: "Lycée Parc de Vilgénis",
    degree: "BTS Business and Sales Technician",
    period: "2014 - 2016",
    logo: "P",
    href: "#",
  },
  {
    school: "Lycée Léonard de Vinci",
    degree: "High School Diploma - Electrical/Electronic",
    period: "2011 - 2014",
    logo: "L",
    href: "#",
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
            target={edu.href !== "#" ? "_blank" : undefined}
            rel={edu.href !== "#" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 py-2 group"
          >
            <Avatar className="size-12 border bg-muted">
              <AvatarFallback className="text-xs font-semibold">{edu.logo}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm group-hover:underline">{edu.school}</h3>
                <span className="text-xs text-muted-foreground tabular-nums">{edu.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{edu.degree}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
