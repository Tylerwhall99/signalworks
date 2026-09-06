# Dry run: one fake client build, end to end

> Ran 2026-09-06. A fictional HVAC client ("Ridgeline") was taken from intake answers all the way to a deployed site and a filled handoff packet, then audited twice — once against the runbook, once as a skeptical client and a homeowner on a phone. The point was to find the potholes before a real client is in the car.

**Result:** the site got built and deployed in **11 minutes of build time**. The delivery *process* around it has real gaps, and those are the finding. Working demo: https://ridgelinehvac-demo.vercel.app · repo: `~/client-sites/ridgelinehvac-demo`

## How long it actually took

| Minutes | Step |
| --- | --- |
| 1 | 0. Read runbook, template, demo page, config |
| 1 | 1. Day-one setup simulation (CLIENT-SETUP.md) |
| 1 | 2. Scaffold Astro (create-astro, npm install, pin Astro 5) |
| 3 | 3. Build config, layout, CSS, form, 5 pages, favicon, OG image |
| 2 | 4. npm run build + output checks + mobile/desktop visual check |
| 1 | 5. Vercel link + prod deploy + curl verification |
| 1 | 6. Handoff docs (owner's guide, domain, checklist, README) |
| 1 | 7. Starter recommendation + potholes + final commits |
| **11** | **total** |

Read that number carefully before setting a capacity figure. Eleven minutes is a machine building from complete, unambiguous intake answers, with no client emails, no waiting on photos, no revision round, and no real domain or accounts to coordinate. The runbook's five-business-day promise is not about build time at all — it is about the human loop around it. What this does tell you: the build itself will never be the bottleneck, so capacity should be set by how many client conversations you can hold at once.

## What the audit found

Two independent auditors produced **39 findings**: 1 blocker, 15 major, 23 minor. 29 checks passed.

### Blockers and majors

| Severity | Area | Finding | Fix |
| --- | --- | --- | --- |
| **blocker** | FREE_BUILD: 'A contact form that reaches a real inbox' / run | The site's one conversion path was never exercised. CONTACT_FORM.endpoint is empty, so the live site ships a disabled form with a 'not connected yet' notice, and no submission was ever delivered anywhere during the dry run. The runbook requires delivery to the client inbox PLUS a | Finish the dry run: create a Web3Forms key against a throwaway/monitoring inbox, set endpoint+accessKey in src/config.ts, deploy, submit from the live site on a phone, and record 'landed in inbox in N seconds, spam folde |
| **major** | Launch flip: DEMO → real (HANDOFF-CHECKLIST.md 'Before launc | Going live requires editing 3 files in 4 places (src/config.ts DEMO + SITE_URL, astro.config.mjs site, public/robots.txt block + sitemap URL). Confirmed by a scratch build: with DEMO=false and SITE_URL changed but the other two forgotten, the site builds clean, drops the badge an | Make src/config.ts the single source: astro.config.mjs imports SITE_URL from it (or both read one site.json); replace public/robots.txt with src/pages/robots.txt.ts that emits Disallow when DEMO is true and Allow + sitem |
| **major** | src/config.ts placeholder guards (LICENSE_READY / EMAIL_READ | Guards only check startsWith('['). Confirmed by a scratch build with email='' and license='': the site renders mailto:"", 'Licensed & insured · ' with no number, '<p>License </p>' in the footer, and "email":"" in JSON-LD. Separately, the hero trust line prints 'Licensed & insured | const filled = (v: string) => v.trim().length > 0 && !v.trim().startsWith('['); use it for every *_READY. Render 'Licensed' and 'insured' independently: LICENSE_READY && BUSINESS.insured → 'Licensed & insured · #', LICEN |
| **major** | OWNERS-GUIDE.md 'Words, hours, prices, photos need updating' | The guide tells the owner: 'Every fact is in one file, src/config.ts. Change the text between the quotes, save, and the host rebuilds the site. The walkthrough video shows how.' Three problems: (1) an HVAC owner cannot open a TypeScript file, commit, and push; (2) 'the host rebui | Rewrite that bullet for walk-away clients as: 'Email us what changed. Small edits get a written price the same day (usually $25–$150 per the care-plan add-on list).' Add an optional appendix 'Edit it yourself (only if yo |
| **major** | Runbook 'Launch-day — care-plan client' (variant missing) | Only the walk-away path was dry-run. There is no care-plan variant of OWNERS-GUIDE.md or HANDOFF-CHECKLIST.md: nothing about the site staying on our (Pro) team, the 'cancel anytime → full handoff within 5 business days' clause, how a client submits an edit request, or what 'daily | Add OWNERS-GUIDE-care-plan.md: table row 'Hosting: The Free Website Co. (Vercel Pro team) — cancel anytime, everything moved to your name within 5 business days'; edit bullet split by plan (Hosted: quoted one-off, $25/ed |
| **major** | Task deliverable: 'produce the reusable starter' + STARTER-R | No starter was produced (~/client-sites/_starter does not exist); only a recommendation. The recommendation's 'files that copy over unchanged' table lists scripts/og.mjs and scripts/check.sh, but neither exists in the repo (git ls-files shows no scripts/ directory) — the OG gener | Commit scripts/og.mjs (the sharp SVG→PNG generator, reading name/tagline/phone/colors from config, wired as npm prebuild) and scripts/check.sh (#!/bin/bash: placeholder grep, external-URL grep, banned-word grep, internal |
| **major** | Runbook rule zero / day-one #2 ('everything ships to GitHub; | The repo exists only on this laptop. The builder's pothole says 'no GitHub org name is documented anywhere' — half wrong: a GitHub account is documented (github.com/Tylerwhall99, LAUNCH-CHECKLIST.md §1) and LAUNCH-CHECKLIST §3 has an open item 'GitHub org structure for client rep | Push now as a private repo (github.com/Tylerwhall99/ridgelinehvac-demo) so the dry run satisfies rule zero; add to the runbook one line: 'Client repos live under org <freewebsiteco-clients> (create it, free), named <doma |
| **major** | Privacy policy (site collects name/phone/message from Califo | The site has a contact form and no privacy page, no link to one, and nothing about where submissions go. The company's own LAUNCH-CHECKLIST.md §1 states 'CalOPPA requires one for any site collecting personal info from Californians' and shipped /privacy/ on freewebsiteco.com for t | Add src/pages/privacy.astro to the starter, generated from config (business name, contact email, form vendor name, 'no analytics' / analytics vendor, no cookies), linked in the footer and in a one-line note under the for |
| **major** | FREE_BUILD 'One revision round' + free-build-agreement claus | HANDOFF-CHECKLIST.md goes from build straight to launch. There is no step where the client sees the draft, sends consolidated feedback, and approves in writing — so nothing defines when the one included revision starts or ends, and copy the builder invented beyond intake (service | Insert a 'Draft review' section before 'Before launch day': send preview URL + a CLIENT-TO-CONFIRM.md listing every sentence not taken verbatim from intake; client replies with one consolidated list (that is the revision |
| **major** | Runbook day-one #6 'Signed one-page terms before the first c | CLIENT-SETUP.md marks this 'simulated as signed', but ~/signalworks/docs/free-build-agreement.md is headed 'DRAFT for attorney review — do not sign clients until reviewed' and has unfilled entity blanks. As written today the day-one step cannot be completed for a real client; the | Add to DRY-RUN-LOG.md potholes: 'Agreement is unsignable until attorney review + entity decision (LAUNCH-CHECKLIST §0/§2).' In the runbook, name where the signed copy lives (client's 1Password vault entry or Drive folder |
| **major** | FREE_BUILD 'Quote forms, booking links, and service-area map | The marketing site and the agreement promise service-area maps and booking links where they help. The starter has no map component (the service area is a text list) and no booking-link slot. A Google Maps embed would break the site's zero-external-requests stance and require the  | Add BOOKING.url to config (renders a 'Book online' button in hero/contact when set) and a SERVICE_AREA_MAP option: default 'list' (current), optional static SVG outline supplied per client, or 'embed' with the privacy pa |
| **major** | Contact form (FREE_BUILD: "A contact form that reaches a rea | The one promised item most likely to fail at handoff was never exercised. CONTACT_FORM.endpoint and accessKey are empty in /Users/tylerhall/client-sites/ridgelinehvac-demo/src/config.ts, so both the home-page and /contact/ forms render disabled. No submission was ever sent or rec | For the demo: create a free Web3Forms key against Tyler's own monitoring alias (not a client inbox), set endpoint to https://api.web3forms.com/submit and the key in src/config.ts, redeploy, submit once from a phone on th |
| **major** | Go-live safety (src/config.ts, astro.config.mjs) | Nothing stops a real launch from shipping with a dead form, a hidden license line, or a stale URL. With DEMO=false, the build still succeeds when CONTACT_FORM.endpoint is empty, BUSINESS.license/email still read "[client to supply...]", or SITE_URL in src/config.ts disagrees with | At the bottom of src/config.ts add: `if (!DEMO) { const missing = [!FORM_READY && 'CONTACT_FORM.endpoint', !LICENSE_READY && 'BUSINESS.license', !EMAIL_READY && 'BUSINESS.email', SITE_URL.includes('vercel.app') && 'SITE_ |
| **major** | Accessibility: color contrast (src/styles/global.css) | Every primary call button, including the sticky mobile call bar and all six per-service "Call about..." buttons, is white text on #e2711d = 3.18:1 (WCAG AA needs 4.5:1 for 16px bold). The current-page nav link is orange on #f6f8fa = 2.98:1. The yellow band body text #7c5a1a on #f | Either use ink text on the orange buttons (`.btn { color: var(--ink) }` gives 5.05:1) or darken the button surface to #a84a0c (white text 5.75:1) and keep #e2711d for the wordmark accent only (19px 800-weight passes as l |
| **major** | FREE_BUILD scope: "Quote forms, booking links, and service-a | The public offer at ~/signalworks/src/config.ts promises a service-area map; the site shows the service area only as a text list on Home, About, Contact and the footer. A skeptical owner comparing the offer page to the deliverable will ask where the map is. (Quote form = the esti | Add a locally hosted static SVG of Kern County with the eight towns marked (hand-drawn or traced; no Google Maps embed, which would add an external call and tracking) as public/service-area.svg with alt text, and a `SERV |
| **major** | Handoff docs: our own contact details | OWNERS-GUIDE.md still reads "email [Free Website Co. email]", "[email] · [phone]", and HANDOFF-CHECKLIST.md's 60-day re-invite step says "add [our handle]" / "add [our email]". As delivered, the client has no way to claim the free bug fix or re-invite us. The dry-run log records  | Add `BUILDER.email`, `BUILDER.phone` and `BUILDER.githubHandle` next to BUILDER.name/url in the starter's src/config.ts once, and fill every {{token}} in OWNERS-GUIDE.md, HANDOFF-CHECKLIST.md and the close-out email from |

### Minor findings

- **Runbook day-one #5 Analytics** — The client starter has no analytics slot at all (the signalworks config has ANALYTICS.plausibleDomain; this config has nothing, and Base.astro injects nothing). If a client wants GA4/Plausible, someone hand-edits Base.astro, which contradicts the 'never edit .
- **FREE_BUILD 'Mobile-first layout, tested on real phones'** — Testing was emulated-viewport screenshots only. No checklist line requires a real device, and the sticky call bar (tel: link + backdrop-filter + safe-area inset) is exactly the kind of thing that behaves differently on a real iPhone.
- **DOMAIN-INSTRUCTIONS.md DNS table and collaborator advice** — The doc says 'exact values come from your host at launch' and then prints a hard-coded Vercel A record (76.76.21.21) — Vercel has changed its recommended records before, so a client may paste a stale value. 'Cloudflare Pages: one click' is only true when the d
- **Handoff process docs the runbook requires but nothing produces** — Still missing after the dry run: close-out email template ('site is live, everything is in your name'), bug-window re-invite steps with our real GitHub handle and email (the guide's [email]/[phone] for The Free Website Co. are blank because the business email/
- **Hosting portability details (package.json engines, Node pinning, heade** — engines.node '>=22.12.0' is stricter than Astro 5 needs and there is no .node-version/.nvmrc, so Cloudflare Pages (the runbook's $0 lane) may build with a different Node than tested. No security headers are set (Vercel adds HSTS only); a vercel.json would not 
- **Web3Forms access key in the repo / OWNERS-GUIDE.md 'Contact form' row** — The guide says 'Web3Forms, key in src/config.ts — your account'. The key is committed in source by design (Web3Forms keys are public, meant for client-side forms), but the docs never say so; an owner reading 'key' after a repo transfer may think a secret leake
- **Vercel leftovers at launch (HANDOFF-CHECKLIST.md 'Vercel' and 'Domain'** — Two identical production deployments exist and the ridgelinehvac-demo.vercel.app alias stays live after a custom domain is added, so the same site answers on two hostnames (canonical tags mitigate, but the sitemap/robots would be right on only one). Nothing in
- **GBP checklist for service-area businesses (HANDOFF-CHECKLIST.md GBP se** — The build correctly treats Ridgeline as a service-area business (no street address on site or in JSON-LD), but the GBP launch list has no line for the matching profile setting — a service-area business must hide its address and set service areas in the profile
- **Copy portability and hardcoded facts (index.astro, about.astro, PAGES ** — 'Bakersfield' and 'Kern County' are hardcoded in about.astro line 16, index.astro line 14, and the PAGES title/description strings, and all headlines/subheads live in .astro files. The builder logged this for the starter but did not do it; client two will edit
- **Contact form disabled state on a phone (src/components/ContactForm.ast** — At 375x812 the form top is at 890px and the "The message form is not connected yet" note is at 1319px, i.e. a homeowner scrolls past three grey fields and a faded Send button before reading why nothing works. The disabled inputs keep opacity 1, white backgroun
- **Copy accuracy: call-back promises vs hours** — Three places promise same-day contact: Home "we'll call you back today", Contact "Messages get a call back the same day during business hours", and the thank-you note "will call you back today during business hours". Hours are Mon-Sat 7am-7pm; a message sent S
- **Process claims need written client confirmation** — "Same-week scheduling", "Scheduled this week", "A person picks up", "Most repairs ... fixed from the truck" and the six service detail paragraphs (written by the builder, per DRY-RUN-LOG.md item 23) are commitments the client controls, but nothing records the 
- **Structured data (src/layouts/Base.astro)** — JSON-LD is HVACBusiness with no `address` because ADDRESS_READY requires a street. Google lists `address` as a required property for LocalBusiness rich results, so the Rich Results Test will report an error and skip the rich result for every service-area clien
- **Copyright year (src/layouts/Base.astro line 67)** — `new Date().getFullYear()` runs at build time, so the footer year is frozen at 2026. A walk-away client who never rebuilds shows a stale year next January, the classic abandoned-site signal.
- **Dead config field (src/config.ts line 57, src/pages/index.astro line 2** — `BUSINESS.insured: true` is never read. The hero prints "Licensed & insured · <number>" whenever LICENSE_READY is true, regardless of `insured`. The gating works today only because the demo has no license number.
- **404 page semantics (src/pages/404.astro, src/layouts/Base.astro)** — On the 404 page the heading order skips h1 -> h3 (footer column headings are h3 with no h2 above them); every other page happens to have an h2 first. The 404 page also emits `<link rel="canonical" href=".../404/">` for a URL that returns 404.
- **URL and header hygiene (no vercel.json)** — /services and /services/ both return 200 with identical HTML (canonical points at the slash version, so harmless but sloppy). No security headers beyond Vercel's HSTS.
- **Favicon set (public/, src/layouts/Base.astro)** — Only an SVG favicon is linked. iOS home-screen icons and older browsers get a blank icon; no apple-touch-icon.png or 32px PNG fallback.
- **Hosting (process note, not a blocker)** — The project ridgelinehvac-demo lives on the Hobby team hall-hub (Vercel Hobby is non-commercial). Fine for a fictional demo; the runbook forbids it for real clients, and no Pro team or Cloudflare Pages workflow exists yet.
- **FREE_BUILD: "Mobile-first layout, tested on real phones"** — Only a 375px emulated viewport was tested (no overflow, layout correct). No real-device step exists in HANDOFF-CHECKLIST.md; the iOS-specific bits (backdrop-filter on the call bar, env(safe-area-inset-bottom), tel: links) were not touched on hardware.
- **FREE_BUILD: "Google Business Profile connection"** — Cannot be executed for a fictional client (no profile), and the HANDOFF-CHECKLIST.md GBP block is correct. Site-side, there is nothing to connect: no config slot for the GBP or review URL, no `sameAs` in JSON-LD, no footer link, so at launch someone edits .ast
- **Starter completeness (STARTER-RECOMMENDATION.md vs repo)** — The pieces the recommendation depends on for the promised time savings do not exist in the repo: no scripts/check.sh (placeholder, banned-word, invented-proof, link and contrast checks), no scripts/og.mjs (the OG image was generated ad hoc and the command is n
- **On-page SEO nit (src/config.ts PAGES.home.title)** — Home title is 72 characters ("Ridgeline Heating & Air — Bakersfield HVAC repair, replacement, tune-ups"); search results truncate around 60.

## Process gaps that belong to the business, not the demo

These are the ones that matter. Fixing the demo site is throwaway work; these change how every future build goes.

- No intake question list exists in docs/; runbook and GBP checklist both refer to 'intake answers' but nothing defines them. Every config field was reverse-engineered from the demo page.
- Form-service account ownership is unstated: runbook says client inbox + our monitoring alias, launch list says hand over the 'form-service login', but never says whose email the account is created under. Assumed client-owned from day one.
- No default form service named (Resend/Formspree/Web3Forms all listed). Picked Web3Forms-style POST because it needs no serverless function on a static site.
- Analytics is not in FREE_BUILD.includes and the runbook names no default tool. Shipped none.
- Service-area businesses with no street address (common for HVAC) are not covered anywhere; used JSON-LD areaServed with no address.
- License number: California contractors must show a CSLB number on ads; the demo page says 'Licensed & insured' with no number, which is the invented-proof pattern the content rules forbid. Site hides the line until a number exists; intake must require it.
- Repo naming rule ('named after their domain') has no answer when the domain is not registered yet.
- GitHub org name, our support email, phone, and GitHub handle are not documented anywhere; the owner's guide template has [email]/[phone] for us and the 60-day re-invite step needs our handle. Nothing fills them.
- No close-out email template, no image-license note template, no 'how to get edits made' note template (README covers the last for now).
- 'Signed terms before the first commit' has no e-sign flow or storage location noted.
- Vercel Pro team does not exist; CLI is on Hobby team hall-hub. Real client builds cannot follow the runbook's hosting rule today. Decide: Pro team (~$20/mo) or Cloudflare Pages as build-time host, before client one. (Process note, not a blocker for this fictional demo.)
- Launch checklist has no pre-launch 'flip the switches' list (DEMO=false, SITE_URL, astro.config site, robots.txt, placeholder grep). Added one to HANDOFF-CHECKLIST.md; starter should generate robots.txt from config.
- Owner's guide template says hosting is 'Cloudflare Pages / other' while the runbook's build-time default is Vercel; pick one wording.
- Deployment Protection was NOT on for this new project (public URL worked directly). Do not assume it will be off next time.
- Repo was never pushed to GitHub (no org documented, task did not ask), so runbook rule zero ('everything ships to GitHub') is not yet true for this build.

## Tooling friction worth remembering

- npm create astro@latest now scaffolds Astro 7.3, not 5. Pinned manually to 5.18.2. Starter must pin versions.
- the scaffold drops AGENTS.md and a CLAUDE.md symlink into the project. Deleted; client repos should not ship AI-tool files.
- npm 11 allow-scripts blocked sharp's install script; needed npm approve-scripts sharp + npm rebuild sharp before OG image generation worked.
- zsh globbing ate an unquoted --include=*.html in grep and the first check pass silently ran nothing. Check script must be bash or quote every glob.
- Browser pane preview_start reads .claude/launch.json from the session cwd (~/signalworks), which must not be modified; ran astro preview in the background instead. Start client-build sessions with cwd in the client repo.
- vercel --yes --prod on an unlinked dir needed vercel link --yes --project <name> first to control the project name; it also wrote .env.local (OIDC token) and appended .vercel/.env* to .gitignore unprompted.
- re-running the deploy to capture its log created a second identical production deployment. Harmless; capture logs the first time.

## Judgment calls made on the client's behalf

Every one of these is a decision a real client should make instead. They are listed so the intake list can absorb them.

- wrote an About page with process-only copy (no years, team, reviews) since the demo had no About content.
- wrote one 'detail' paragraph per service beyond the demo's one-liners; a real client would approve or replace those.
- HVACBusiness JSON-LD with OfferCatalog of six services, no aggregateRating, no address.
- kept 'Upfront, in-writing pricing' and 'Same-week scheduling' as trust points (process claims the client controls); dropped 'Licensed & insured' until a number exists.
- trailing-slash URLs and directory output so the site works on any static host without rewrite rules.
- sticky call bar on phones only, header phone on desktop only.
- SVG favicon only (no .ico, no apple-touch-icon); starter should generate the PNG set.

## What happens next

1. **`docs/intake-questions.md` now exists** — it was the single biggest gap, and it closes the "where do intake answers come from" hole in the runbook, the agreement, and the GBP checklist.
2. **Build the reusable starter.** The dry run produced a recommendation, not a starter. Full spec in `~/client-sites/ridgelinehvac-demo/STARTER-RECOMMENDATION.md`. Second client should take half the time.
3. **Hosting has to be settled first** — Vercel Hobby forbids commercial use, and that applies to client sites too. See `docs/hosting-lane-decision.md`.
4. **The agreements have to come back from the attorney** before any client signs. See `docs/attorney-review-packet.md`.

