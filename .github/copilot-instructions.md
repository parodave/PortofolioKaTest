# Copilot Instructions for v0-portofolio

## Project Overview
- This is a Next.js (App Router) portfolio project, auto-synced with [v0.app](https://v0.app) and deployed on Vercel.
- All changes made in the v0.app interface are pushed here and trigger redeploys.
- The project is TypeScript-first, using strict mode and modern React patterns.

## Key Directories & Files
- `app/` — Next.js app directory (App Router). Pages and routes are defined here.
- `components/` — All UI and logic components, organized by feature (e.g., `blog/`, `travels/`, `magicui/`, `ui/`).
- `lib/` — Utility functions (e.g., `utils.ts`).
- `public/` — Static assets (images, CVs, etc.).
- `styles/` — Global and modular CSS.

## Build & Development
- Use `pnpm` for all package management. (Scripts: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`)
- Local dev: `pnpm dev` (runs Next.js locally)
- Lint: `pnpm lint` (uses ESLint)
- Build: `pnpm build` (Next.js build)
- Start: `pnpm start` (production server)

## Patterns & Conventions
- Use absolute imports with `@/` alias (see `tsconfig.json`).
- Components are function components, often grouped by feature.
- Data for blog/projects is often hardcoded in arrays/objects within components.
- Use `"use client"` directive for client-side components.
- Styling is via Tailwind CSS (see class usage in components).
- Prefer composable, small components. Example: `components/ui/` for atomic UI elements.
- Blog and travel content is not fetched from an API but stored locally in code.

## Integration & External Dependencies
- Heavy use of Radix UI primitives and shadcn/ui for UI consistency.
- Some components use `next/image` and `next/link` for optimized images and routing.
- Deployed via Vercel; no custom server logic.
- No backend or database—static content only.

## Special Workflows
- Do not edit generated files or those managed by v0.app unless necessary.
- To add new sections/pages, create a new folder in `app/` and corresponding components in `components/`.
- For assets, place files in `public/assets/` and reference with `/assets/...` paths.

## Examples
- See `app/page.tsx` for the main page composition.
- See `components/projects.tsx` for project data and rendering pattern.
- See `components/blog/blog-grid.tsx` for blog listing pattern.

---

For more, see [README.md](../README.md) and [v0.app documentation](https://v0.dev/docs).
