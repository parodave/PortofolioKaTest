## 2025-02-19 - Unoptimized Images Configuration
**Learning:** The project was configured with `images.unoptimized: true` in `next.config.mjs` without `output: 'export'`. This forces all users to download full-resolution original images (1400px+), bypassing Next.js's built-in image optimization (resizing, format conversion).
**Action:** When seeing `unoptimized: true`, verify if `output: 'export'` is present. If not, and the project uses `next start` or Vercel, removing this flag offers massive bandwidth savings (~80% for mobile users).
