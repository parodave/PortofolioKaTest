"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "KR Global LTD",
    dates: "Jun 2025 - Present",
    description:
      "Co-founder of a company specializing in SaaS platforms, e-commerce store creation, and AI integration. Building smart web tools and automating business processes worldwide.",
    tags: ["Next.js", "TypeScript", "Stripe", "AI SDK", "TailwindCSS", "Supabase"],
    image: "/modern-saas-dashboard-dark-theme.jpg",
    links: [{ type: "Website", href: "https://krglobal.co.uk" }],
  },
  {
    title: "The Hand DAO",
    dates: "2025",
    description:
      "Co-founder of a decentralized organization uniting 5 companies and 495 members. Built a tokenized governance model backed by Bitcoin.",
    tags: ["Web3", "Solidity", "React", "Blockchain", "TypeScript"],
    image: "/blockchain-dao-governance-platform-dark.jpg",
    links: [],
  },
  {
    title: "FelizBella",
    dates: "2025",
    description:
      "Co-founder of a cosmetics brand selling skincare and beauty products through online stores. E-commerce development and digital marketing.",
    tags: ["Shopify", "E-commerce", "Digital Marketing", "Branding"],
    image: "/luxury-cosmetics-ecommerce-website.jpg",
    links: [{ type: "Website", href: "#" }],
  },
  {
    title: "KHH Global Projects",
    dates: "2023 - Present",
    description:
      "Real estate investor managing Airbnb properties remotely in Morocco using automated tools to maximize profitability.",
    tags: ["Automation", "Property Management", "Analytics"],
    image: "/modern-airbnb-property-management-dashboard.jpg",
    links: [],
  },
  {
    title: "0'240 Fast-Food",
    dates: "2020 - 2022",
    description:
      "Founded and managed a fast-food establishment. Led operations, strategic planning, and team recruitment.",
    tags: ["Entrepreneurship", "Operations", "Management"],
    image: "/modern-fast-food-interior.png",
    links: [],
  },
  {
    title: "Turfu Driving",
    dates: "2020 - 2023",
    description:
      "Founded a digital vehicle rental company. Pioneered innovative solutions with digital marketing strategies.",
    tags: ["Digital Marketing", "CRM", "Automation"],
    image: "/luxury-car-rental-website-dark.jpg",
    links: [],
  },
]

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="space-y-2 text-center">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of
          my favorites.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={cn(
              "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
            )}
          >
            {project.image && (
              <Link href={project.links[0]?.href || "#"} className={cn("block cursor-pointer")}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-40 w-full overflow-hidden object-cover object-top"
                />
              </Link>
            )}
            <CardHeader className="px-2">
              <div className="space-y-1">
                <CardTitle className="mt-1 text-base">{project.title}</CardTitle>
                <time className="font-sans text-xs">{project.dates}</time>
                <CardDescription className="text-xs">{project.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
              {project.tags && project.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-1 py-0 text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
              {project.links && project.links.length > 0 && (
                <div className="flex flex-row flex-wrap items-start gap-1">
                  {project.links.map((link, idx) => (
                    <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                      <Badge variant="outline" className="flex gap-2 px-2 py-1 text-[10px]">
                        {link.type}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
