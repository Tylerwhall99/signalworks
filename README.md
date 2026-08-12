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
| Services list | `SERVICES` — to launch a new service later, add an entry here plus one page file in `src/pages/services/` |

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

## Internal docs

- `docs/SERVICES-CATALOG.md` — the full service catalog & feasibility map
  (internal only, never published). Rule: a service goes on the public site
  only when its ledger row there is CLOSED.
