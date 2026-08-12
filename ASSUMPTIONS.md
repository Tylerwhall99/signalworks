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

## Phase 2 — Pages & copy

- **Payment terms invented: 50% to start, 50% at launch, monthly milestones
  for longer web apps.** Stated on /pricing/ and /process/. Edit those two
  pages if your terms differ.
- **"Replies within one business day" is a conduct commitment** used on
  Home, Contact, and Process. It replaces testimonials as trust-building —
  only keep it if you'll honor it.
- Other conduct commitments used in place of social proof: fixed written
  quotes, delivery date treated as part of the deal, client owns all
  accounts/code, "if I'm the wrong fit I'll say so," 30 days of post-launch
  fixes on web apps, staff training recorded. All are promises of behavior
  and deliverables, never outcomes.
- Named example customer types (contractors, trades, clinics, studios,
  firms) as the target audience — descriptive, not claimed clients.
- The one SERVICES entry covers both websites and web apps on a single page
  (/services/web-design/) since they share process and audience; the slug
  matches the brief's planned URL structure. If web apps later deserve their
  own marketing page, add a second SERVICES entry.
- FAQ answer states domains cost "usually $10–20/year" and that most builds
  host free — true of static hosting (Cloudflare Pages/Netlify free tiers)
  as of 2026.
- 404 page included (works automatically on Netlify/Vercel/Cloudflare
  static hosting).

## Phase 3 — SEO & metadata

- JSON-LD uses `ProfessionalService` schema on the home page only, with an
  offer catalog generated from the `PRICING` config — prices in structured
  data stay in sync with the pricing page automatically.
- Structured data lists Los Angeles as locality (credibility anchor) with
  `areaServed: United States` — mirrors the "based in LA, serving
  nationwide" positioning.
- robots.txt is generated at build time from `SITE_URL` so nothing is
  hardcoded; sitemap comes from @astrojs/sitemap.
- Favicon is an SVG (orange square, three rising signal bars). Modern
  browsers all support SVG favicons; no .ico fallback shipped. Add one
  pre-launch only if ancient-browser support matters.
- OG share image (public/og.png) was rendered from the brand system at
  1200x630. Regenerate if the tagline changes.
- Skipped FAQPage structured data on purpose: Google restricted FAQ rich
  results to government/health sites in 2023, so it's dead weight.

## Phase 4 — Polish & responsive verification

- Verified in-browser at 375px (mobile) and 1280px (desktop): hamburger nav
  toggle with aria-expanded, no horizontal overflow on any page, FAQ
  accordions (native <details>, zero JS), 404 route, footer grid collapse.
- Fixed during this pass: the mobile menu close-icon X (a CSS
  :last-of-type selector matched the button's hidden label span instead of
  the second icon bar; also increased the bar travel so the X actually
  crosses).
- The only JavaScript on the site is the ~8-line mobile nav toggle.
  Accordions are native HTML. This is deliberate: nothing to break, nothing
  to bundle.
- Reduced-motion users get transitions disabled globally via media query.

## Scroll-film homepage (SIGNAL / NOISE)

- **You invoked the scroll-film studio with one directive** ("stand out above
  the new AI consultant companies") and no other answers, so I ran the
  interview's "you decide" path everywhere: Lane A pure-code film (zero cost,
  no video engine configured), five chapters, published locally only.
- **Concepts pitched (self-arbitrated since the session is autonomous):**
  SIGNAL/NOISE (chosen), The Drafting Table, Dial Tone. SIGNAL/NOISE won
  because it enacts the brand argument directly against AI-consultant hype.
- **The homepage was replaced** with the film (old homepage preserved in git;
  its content sections — services cards, honest-AI block, CTA — live below
  the film). All subpages and their standard header/nav are untouched.
- **The banned-words rule is deliberately inverted in CH 01/02**: the banned
  list appears as the film's antagonist — drifting noise-field words and
  struck-out fake promises ("#1 on Google. Guaranteed."), explicitly framed
  as what other agencies say. Signalworks' own voice never uses them. If you
  want zero occurrences even as quoted villainy, say so and I'll re-art the
  noise field with invented jargon instead.
- The film homepage drops the full nav bar for a minimal film chrome
  (wordmark + Get a quote + Skip the film). Full nav remains on every other
  page and in the footer. "Skip the film" fades once the film ends.
- Space Grotesk (self-hosted woff2, ~26KB total) was added as the film's
  display face — the original system-font-only rule still holds everywhere
  else; body text remains the system stack.
- GSAP 3.13 + ScrollTrigger + Lenis vendored locally in public/vendor/ (no
  CDN dependency at runtime). The original "minimal vanilla JS" brief rule
  was superseded by the scroll-film request for this one page.
- Reduced-motion visitors and no-JS visitors get a static paper hero with
  the tagline and CTAs — no film, full content.
- Verified with the skill's harness (system Chrome, not the throttled
  preview pane): dev contract (?jump + __ready), 15 beat screenshots
  (desktop + 390px mobile), scroll-through jank test 3× PASS (max frame
  28ms after replacing a CSS-blur glow with layered strokes; before: 248ms
  spikes).
- The earlier multi-agent QA audit (Phase 5) stalled server-side and never
  produced findings; replaced with targeted greps (banned words, hardcoded
  contact data) + the film verification above. A fuller copy audit can
  re-run anytime.
