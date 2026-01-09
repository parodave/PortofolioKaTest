## 2026-01-09 - Missing Security Headers
**Vulnerability:** The application lacked standard HTTP security headers (X-XSS-Protection, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP).
**Learning:** Default Next.js configuration does not include these headers automatically.
**Prevention:** Always verify `next.config.mjs` or middleware for `headers()` configuration. Added them manually to `next.config.mjs`.

## 2026-01-09 - Deprecated Image Config
**Vulnerability:** The configuration used `images.domains` which is deprecated and less secure than `remotePatterns`.
**Learning:** `remotePatterns` allows enforcing protocol (https) and specific paths, reducing the attack surface for image optimization abuse.
**Prevention:** Use `remotePatterns` by default for all external image sources.
