# Assumptions log

Every judgment call made while building this site, in build order. Flagged
items are the ones worth reviewing before launch.

## Brief truncation (important)

- **The build brief arrived cut off mid-sentence in Phase 1** ("…so pricing
  edits are data edits, not"). Everything after that point — the rest of
  Phase 1 and all later phases — never reached me. I built Phase 1 from what
  arrived and inferred the remaining phases from the architecture notes:
  Phase 2 pages & copy, Phase 3 SEO & metadata, Phase 4 polish & responsive
  verification, Phase 5 QA audit. If your original brief had different
  phases, resend them and I'll rework to match.

## Phase 1 — Foundation & design system

- **Pricing numbers are invented placeholders.** The brief said pricing lives
  in `src/config.ts` as typed data but no numbers arrived (likely in the
  truncated portion). I set: One-Page Site $1,900 / Business Site $4,800 /
  Web App from $9,500 / Site Care $95/mo. Edit `PRICING` and `CARE_PLAN` in
  `src/config.ts` — nothing else references the numbers.
- **SITE_URL is `https://signalworks.example`** — a deliberately invalid
  placeholder domain. Replace it in `src/config.ts` before launch; canonical
  URLs, sitemap, and Open Graph tags all derive from it.
- Contact form: static hosting has no backend, so the contact form posts to
  `CONTACT.formEndpoint` in `src/config.ts` (works with Formspree, Basin,
  etc.). While that value is empty, the contact page shows direct
  email/phone only and hides the form.
- Created the project as a fresh git repository at `~/signalworks` with one
  commit per completed phase, so each phase is a restorable checkpoint. No
  remote is configured; nothing is pushed anywhere.
- Design calls: single light theme (service-business customers skew mobile/
  daylight use; dark mode adds surface area with no revenue upside), system
  font stack (zero font downloads — fastest option and immune to font
  licensing), paper-white background with near-black ink and one
  signal-orange accent, monospace uppercase eyebrow labels as the recurring
  brand motif. No stock imagery anywhere — type and structure carry the
  design, which also sidesteps fake-looking stock photos of "teams."
- Astro 5, static output, `trailingSlash: 'always'` for consistent URLs on
  any static host. Only non-Astro dependency is `@astrojs/sitemap`.
- Site pages planned: Home, /services/ (hub), /services/web-design/,
  /pricing/, /process/, /about/, /contact/, 404. Future services slot in as
  entries in `SERVICES` in `src/config.ts` plus one page file under
  `src/pages/services/`.
