"use client"

import { Badge } from "@/components/ui/badge"

const skills = [
  // Technical & Field
  "Technical Maintenance",
  "Electrical Maintenance",
  "Preventive & Corrective Maintenance",
  "Troubleshooting",
  "Industrial Safety",
  "Field Operations",

  // Operations & Management
  "Operations Coordination",
  "Team Management",
  "Workflow Organization",
  "Task Prioritization",
  "Decision Making Under Pressure",

  // Digital & Tech
  "Supabase",
  "API Integration",
  "GitHub",

  // Tools & Platforms
  "Shopify",
  "AI Tools",
  "Automation Tools",

  // Business & Entrepreneurship
  "Project Management",
  "Process Optimization",
  "Digital Systems Integration",
  "E-commerce",
  "Digital Marketing",
  "SEO",
  "Prompt Engineering",
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
