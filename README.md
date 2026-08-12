# Signalworks — marketing site

The public website for Signalworks. Built with [Astro](https://astro.build)
as a fully static site: no database, no CMS, nothing to patch on a schedule.

## The one file you'll edit most

**`src/config.ts`** holds everything that changes:

| What | Where in the file |
| --- | --- |
| Phone, email, address | `CONTACT` — currently placeholders, replace before launch |
| Contact form endpoint | `CONTACT.formEndpoint` — paste a Formspree/Basin URL and the form appears on /contact/ automatically |
| Real domain | `SITE_URL` — replace `https://signalworks.example` before launch |
| Prices & packages | `PRICING` and `CARE_PLAN` — edit numbers/bullets here, the pricing page and structured data update themselves |
| Navigation | `NAV` and `NAV_CTA` |
| Services list | `SERVICES` — see "Adding a new service" below |

Page copy lives in `src/pages/*.astro` — the text is plain HTML, edit it
like a document.

## Running it locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. `npm run build` produces the deployable
site in `dist/`.

## Deploying

The `dist/` folder works on any static host — Cloudflare Pages, Netlify,
Vercel. Point the host at the repo with build command `npm run build` and
output directory `dist`. All three hosts serve `404.html` automatically.

## Before launch checklist

1. Replace the four placeholders in `src/config.ts` (phone, email, address,
   SITE_URL).
2. Optionally set `CONTACT.formEndpoint` to enable the contact form.
3. Review prices in `PRICING` — the shipped numbers are placeholders
   (see ASSUMPTIONS.md).
4. Re-run `npm run build`.

## Files worth knowing

- `ASSUMPTIONS.md` — every judgment call made during the build, and which
  ones to review before launch.
- `src/styles/global.css` — the design system (colors, type, spacing).
- `public/og.png` — the image shown when the site is shared; regenerate if
  the tagline changes.

## The scroll-film homepage

The homepage is a 5-chapter scroll film (SIGNAL/NOISE) built with GSAP +
Lenis, vendored in `public/vendor/`. Everything lives in
`src/pages/index.astro`. Reduced-motion and no-JS visitors automatically get
a static hero instead. To retire the film, `git log` has the previous
homepage (`Phase 2` commit) — or ask for it to be restored as a variant.

## Adding a new service

Every service on the roadmap already exists as an entry in `SERVICES` in
`src/config.ts` with `status: "planned"`. The site renders **only**
`status: "live"` entries — nav, services hub, home cards, footer, routes,
and sitemap all derive from that one flag. To launch a service:

1. **Check the ledger first.** A service ships publicly only when its
   assumption rows in `docs/SERVICES-CATALOG.md` are closed. If a row is
   OPEN, the service stays `planned` — no exceptions.
2. In `src/config.ts`, flip the entry's `status` to `"live"` and fill in
   `summary`, `headline`, and `metaDescription` (plus `navLabel` if the
   name is long).
3. Create `src/components/services/<slug>.astro` with the page body
   (sections below the hero — see the four existing files for the shape).
4. `npm run build` — the template at `src/pages/services/[slug].astro`
   fails the build loudly if a live service has no body file.

That's the whole procedure: one config edit, one content file.

## Internal docs

- `docs/SERVICES-CATALOG.md` — the full service catalog & feasibility map
  (internal only, never published). Rule: a service goes on the public site
  only when its ledger row there is CLOSED.
