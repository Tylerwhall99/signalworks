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


---

## The fix pass — what got done

After the audit, a fix pass applied **33 changes** and deliberately left **9** alone. The demo redeployed clean: six pages returning 200, five security headers, noindex and the demo badge intact.

### Applied

- Launch flip reduced to two edits in one file: astro.config.mjs now imports SITE_URL from src/config.ts, and public/robots.txt was replaced by src/pages/robots.txt.ts which emits Disallow when DEMO is true and Allow + the real sitemap URL otherwise. Verified by a scratch build with DEMO=false.
- Go-live guard added at the bottom of src/config.ts: throws when DEMO is false and the form endpoint/key, licence, email, BUILDER contact details, or SITE_URL (still vercel.app/pages.dev) are unset, plus any leftover {{TOKEN}} in the content blocks. It fires from astro.config.mjs, so the build dies before generating anything — verified: 'Not ready to go live (DEMO is false): CONTACT_FORM.endpoint / accessKey, BUSINESS.license, BUSINESS.email, SITE_URL (still a vercel.app address), BUILDER.email, BUILDER.phone'.
- filled() replaces startsWith('[') everywhere: rejects empty strings, [bracketed placeholders] and unreplaced {{TOKENS}}. Kills the mailto:"", '<p>License </p>' and "email":"" cases the audit reproduced.
- 'Licensed' and 'insured' now render independently; BUSINESS.insured is actually read, defaults to false, and intake asks for it in writing (question 1.10). A licensed-but-uninsured client can no longer get an invented claim.
- WCAG AA contrast fixed: ink text on orange buttons (5.05:1), current nav link is navy with a 3px orange underline (10:1), band body #6b4405 (5.93:1), hover goes lighter to yellow rather than darker. scripts/contrast.mjs checks 21 pairs and fails the build.
- src/pages/privacy.astro added, generated from config (business name, form vendor, analytics vendor, cookies, contact route), linked in the footer and in a one-line note under the form. Live at /privacy/ (200).
- JSON-LD always emits address (addressLocality/addressRegion/addressCountry, street+postal only when real), plus image, sameAs from a new LINKS config, and optional priceRange. Fixes the Rich Results error for every service-area client.
- Contact-form fallback rewritten: the notice renders first followed by one Call button, dead fields removed entirely, wrapper is a <section aria-labelledby> instead of a div with aria-label.
- Call-back promise unified into BUSINESS.callback ('We call back within one business day.'), used in all three places. No more 'we'll call you back today' against Mon-Sat hours.
- All headlines, subheads and paragraphs moved out of the five .astro files into a COPY block in config; added BUSINESS.region, BUSINESS.trade and BUSINESS.schemaType. Client two edits config only.
- scripts/og.mjs committed and wired as prebuild (og.png + apple-touch-icon.png + favicon-32.png, and seeds a default favicon.svg in the brand palette when none exists). scripts/check.sh + links.mjs + contrast.mjs committed and wired as postbuild — a failing check fails the build.
- check.sh gained a title (<=60 chars) and meta-description (<=160 chars) check, which immediately caught an over-long home description I had just introduced. Also fixes the SEO nit generically rather than per-client.
- Portability: .node-version ('22'), vercel.json (trailingSlash + X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, CSP frame-ancestors), public/_headers with the identical list for Cloudflare, and .gitignore changed to keep .env.example. All five headers verified on the live response.
- Config slots added for the features the offer promises but the code lacked: BOOKING.url, SERVICE_AREA_MAP (list/svg/embed), ANALYTICS (plausible + GA4, loads only when set and DEMO is false), LINKS (google/yelp/facebook, rendered in the footer and as sameAs).
- Hand-traced public/service-area.svg with the eight towns shipped for this build — local file, no external request, no privacy-page consequence. Starter defaults to 'list' mode.
- Favicon set extended (apple-touch-icon 180px + favicon-32.png, both <link>ed); footer copyright year corrected client-side by a two-line inline script; footer column headings changed from h3 to h2 so the 404 heading order is valid; canonical tag skipped when noSchema is set.
- Draft-review stage inserted into HANDOFF-CHECKLIST.md between build and launch: preview URL + CLIENT-TO-CONFIRM.md, client replies with one consolidated list (that IS the revision round), apply, written approval saved. docs/draft-review-email.md written.
- CLIENT-TO-CONFIRM.md written for this build, listing every sentence not taken verbatim from intake — the trust claims, the six service detail paragraphs, the whole About page — plus the facts still needed and the things deliberately left off.
- OWNERS-GUIDE.md rewritten: the 'edit src/config.ts' bullet became 'email us what changed, written price the same day, usually $25-$150'; self-editing moved to an optional appendix with five numbered GitHub-web-editor steps; the access-key-is-public explanation added; our details are {{tokens}} the build enforces.
- OWNERS-GUIDE-care-plan.md and HANDOFF-CHECKLIST-care-plan.md written: site stays on our Pro team, per-plan edit terms (Hosted includes no edits, Care Plan 3/month), what 'daily backups' and 'uptime monitoring' actually consist of, a 'To cancel' section, and 'the walk-away checklist is the cancellation procedure'.
- Form wiring moved out of README.md into HANDOFF-CHECKLIST.md as our step, done on a screen-share under the client's business email, with the Web3Forms one-address-per-key limitation and the inbox-forwarding-rule workaround written down.
- DOMAIN-INSTRUCTIONS.md: hard-coded Vercel A record 76.76.21.21 and the CNAME table deleted in favour of 'we send the exact two records at launch'; added the Porkbun-plus-Cloudflare-Pages CNAME sentence; DNS-collaborator advice limited to Cloudflare.
- docs/intake-questions.md written from scratch (the file the runbook referenced but which never existed) — every question maps to a config field, with required yes/no per trust claim and per hero promise, and the licence/insurance questions marked required.
- docs/close-out-email.md, docs/re-invite-steps.md and docs/image-license-note.md written, all tokenised from BUILDER. HANDOFF-CHECKLIST.md 'Hand over' now names the client's 1Password vault and says to share it then remove ourselves.
- check.sh fails the build when DEMO is false if any client-facing document still has an unfilled [placeholder] or {{TOKEN}} (markdown links, checkboxes and code spans stripped first so they don't false-positive); docs/ templates are listed for the record but never fail. Verified on a simulated real launch: it correctly caught {{OUR_EMAIL}}, {{OUR_PHONE}} and {{WALKTHROUGH_URL}}.
- GBP section gained the two service-area-business lines: business type -> service-area business with the address cleared, and service areas -> the same eight cities as config. Also added: save the profile URL into LINKS.google.
- HANDOFF-CHECKLIST.md 'Before launch day' gained a real-device step (one real iPhone and one real Android over cellular: every page, every tel: link, form submit, sticky call bar clearing the home indicator, anchor jumps) and 'record the 5-minute Loom walkthrough and link it in the guide'.
- Domain step gained 'set the custom domain as primary and redirect the *.vercel.app hostname to it (Cloudflare Pages: leave pages.dev), then delete stale duplicate deployments'.
- The signed-terms step was rewritten from 'simulated as signed' to a stated pre-client blocker naming the DRAFT-for-attorney-review agreement, the DocuSign template, and where the signed copy lives (1Password vault entry + Drive folder).
- ~/client-sites/_starter created as its own git repo — the task's second deliverable. Every client-specific value is a {{TOKEN}}; STARTER.md documents every token, the optional features, what runs on each build, which document goes to whom and when, and the seven process gaps that still block a real client.
- Starter verified by a second fake build (Evergreen Landscaping, deliberately a different trade), about four minutes, built clean. It earned its keep: it caught PAGES hard-coding the word 'HVAC' (title came out 'Evergreen Landscaping — Fresno HVAC') and the JSON-LD @type fixed at HVACBusiness. Both are now BUSINESS.trade and BUSINESS.schemaType.
- STARTER-RECOMMENDATION.md marked superseded, pointing at the built starter, with a note that where the two disagree the starter is right.
- Deployed with vercel --yes --prod and verified live: all six pages 200, all five security headers present, robots.txt still Disallow, noindex and demo badge intact, privacy page live, JSON-LD carrying addressLocality. Both repos committed clean.

### Deliberately not done, and why

This list matters as much as the one above. Each of these was left open rather than faked.

- BLOCKER LEFT OPEN — the contact form still has no Web3Forms key and has never delivered a message. Creating the account requires an account signup and a password, which I will not do on Tyler's behalf, and there is no throwaway monitoring inbox to point it at. So the POST path (access_key/subject/from_name/redirect hidden fields, botcheck honeypot, /contact/?sent=1) is still untested code. Everything around it is done — the config slots, the fallback, the privacy page naming the vendor, the checklist step with the one-address-per-key workaround — but the 10-minute manual close-out (create key, paste, deploy, submit from a phone, record delivery time and spam check in DRY-RUN-LOG.md) must happen before client one. Logged as pothole 4.
- Not pushed to GitHub. No gh CLI is installed and no credentials are available. More to the point, the real gap is a decision rather than a command: personal account vs a freewebsiteco-clients org is an open item in LAUNCH-CHECKLIST §3, and creating the org under Tyler's account would pre-empt his call. The naming convention (org, named after the domain, business-slug before the domain exists, renamed at launch) is now written into HANDOFF-CHECKLIST.md. Rule zero is still false for this build — logged as pothole 6.
- No edits to anything under ~/signalworks — explicitly out of bounds for this task. Three changes are queued there for Tyler and recorded in the log: the FREE_BUILD.includes service-area-map wording, the two service-area-business lines for gbp-connection-checklist.md, and the wrong care-plan bracket in owners-guide-template.md (it promises edits within 2 business days, which is the $150 Care Plan; the $29 Hosted plan includes none).
- No real-device testing — no phone available to me. Rather than claim it, it is now a required line in the pre-launch list naming the specific iOS risks (backdrop-filter on the call bar, env(safe-area-inset-bottom), tel: links, anchor jumps under the sticky header).
- Hosting decision (Vercel Pro ~$20/mo vs Cloudflare Pages) not made — it costs money and is Tyler's call. Logged as a blocker with the Hobby-is-non-commercial reason, not worked around.
- Attorney review of the free-build agreement and the new privacy-page template not obtained; entity decision not made. Both are LAUNCH-CHECKLIST §0/§2 and both block client one. The dry run now surfaces the agreement as unsignable rather than simulating past it, which is what the audit asked for.
- Care-plan operational choices (which uptime monitor, where backup bundles live, what generates the monthly report) documented as named open decisions in HANDOFF-CHECKLIST-care-plan.md rather than invented. These are things the $29 and $150 plans are sold on, so guessing them would have been worse than flagging them.
- No walkthrough video recorded. Instead the build now fails while {{WALKTHROUGH_URL}} is unfilled, and recording it is a checklist line — so the gap is enforced rather than silently shipped.
- Old duplicate production deployments on the Vercel project not pruned, and no custom domain exists to make primary. The checklist covers both for a real launch; I also avoided a redundant extra deploy at the end, since the last two commits were markdown only and the live site already matches HEAD's dist.

## The starter now exists

`~/client-sites/_starter` is its own git repo and the second deliverable of this exercise. Every client-specific value is a `{{TOKEN}}`; `STARTER.md` documents all of them. It ships:

- One `src/config.ts` holding every fact **and every line of copy**, so a client build never means editing a page file.
- A go-live guard that throws during the build if the form key, licence, contact details, or site URL are still unset when `DEMO = false`.
- `scripts/check.sh`: placeholders, dead links, banned words, invented-proof patterns, colour contrast, and title/description lengths. It also fails the build if a client-facing *document* still has an unfilled token.
- A privacy page generated from config, a contact form with a plain disabled state, and WCAG AA contrast on every button.
- The handoff templates the runbook was missing: draft-review email, close-out email, image-license note, bug-window re-invite steps, and care-plan variants of the owner's guide and checklist.

**It was tested by building a second fake client** (Evergreen Landscaping, a different trade on purpose) in about four minutes. That build caught a hardcoded page title the starter had inherited, which is the starter earning its keep on its first use.

## Corrections it queued for this repo, now applied

- The owner's guide told **every** care-plan client that edits are done within two business days. That is the $150 Care Plan. The $29 Hosted plan includes no edits at all, so a Hosted client would have been promised something they had not bought. Now split by plan.
- The Google Business Profile checklist had no service-area-business path, even though most home-services clients work from home. It now says to clear the street address and cap service areas at 20 entries.
- The public offer now names the privacy page and says it does not count toward the five.

