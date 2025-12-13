"use client"

import { Badge } from "@/components/ui/badge"

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Figma",
  "Webflow",
  "Shopify",
  "API Integration",
  "AI Tools",
  "Prompt Engineering",
  "Project Management",
  "E-commerce",
  "Digital Marketing",
  "SEO",
]

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
