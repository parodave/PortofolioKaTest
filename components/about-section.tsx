"use client"

import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Experienced and versatile professional with a strong background in operations, logistics, and maintenance.
        Skilled in project management, customer service, and digital systems integration. I attended{" "}
        <Link href="#education" className="text-foreground font-medium hover:underline">
          Le Wagon bootcamp
        </Link>{" "}
        to become a web developer, and have since worked on various{" "}
        <Link href="#projects" className="text-foreground font-medium hover:underline">
          freelance projects
        </Link>{" "}
        internationally. Currently co-founder and director of{" "}
        <Link
          href="https://krglobal.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium hover:underline"
        >
          KR Global Solutions LTD
        </Link>
        , specializing in SaaS platforms, e-commerce store creation, and AI integration. I build smart web tools,
        automate business processes, and support digital transformation.
      </p>
    </section>
  )
}
