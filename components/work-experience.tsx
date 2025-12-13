"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const experiences = [
  {
    company: "KR Global LTD",
    role: "Co-founder & Director",
    period: "Jun 2025 - Present",
    logo: "/kr-global-tech-company-logo.jpg",
    href: "https://krglobal.co.uk",
  },
  {
    company: "Rino Recycling",
    role: "Recycling Maintenance Technician",
    period: "Oct 2024 - Apr 2025",
    logo: "/rino-recycling-green-logo.jpg",
    href: "#",
  },
  {
    company: "Cœur d'Essonne Agglomération",
    role: "Library Assistant & Delivery Driver",
    period: "Sep 2019 - Apr 2024",
    logo: "/french-government-agglomeration-logo.jpg",
    href: "#",
  },
  {
    company: "TLFH",
    role: "Associate & Operations Manager",
    period: "Apr 2021 - Mar 2024",
    logo: "/tlfh-transport-logistics-logo.jpg",
    href: "#",
  },
  {
    company: "Aximum",
    role: "Maintenance Technician",
    period: "Mar 2018 - Mar 2019",
    logo: "/aximum-infrastructure-company-logo.jpg",
    href: "#",
  },
]

export function WorkExperience() {
  return (
    <section id="work" className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Work Experience</h2>
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <Link
            key={index}
            href={exp.href}
            target={exp.href !== "#" ? "_blank" : undefined}
            rel={exp.href !== "#" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 py-2 group"
          >
            <Avatar className="size-12 border bg-muted">
              <AvatarImage src={exp.logo || "/placeholder.svg"} alt={exp.company} className="object-cover" />
              <AvatarFallback className="text-xs font-medium">{exp.company.slice(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm group-hover:underline">{exp.company}</h3>
                <span className="text-xs text-muted-foreground tabular-nums">{exp.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{exp.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
