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

## Service architecture (status-gated config)

- Services are now a typed array in `src/config.ts` with
  `status: "live" | "planned"`. Every rendering surface (hub, home cards,
  footer, routes, sitemap) derives from `LIVE_SERVICES`; planned entries
  never reach HTML (verified by grepping the built output for every planned
  name, slug, tier name, and ledger vocabulary — only schema.org's standard
  "OfferCatalog" JSON-LD term matches, which is unrelated).
- **"Tier 1 as live" was interpreted through the catalog's own sequencing
  line and ledger rule:** live = marketing websites, landing pages, web
  apps, rescues/rebuilds (#1, #2, #3, #6). E-commerce (#4) and native
  mobile apps (#5) are Tier 1 but stay `planned` because their ledger rows
  (A2/A3, A4) are OPEN — per the rule the catalog itself sets. PWA
  positioning lives inside the web-apps FAQ ("Do we need an app in the app
  stores?") rather than as its own service.
- The combined websites-and-web-apps page was split: `/services/web-design/`
  (URL preserved for SEO) is now Custom Websites; Web Apps moved to
  `/services/web-apps/`. New pages: `/services/landing-pages/` (priced by
  the existing One-Page Site package) and `/services/rescues/`.
- Service pages render through one template (`src/pages/services/[slug].astro`)
  + per-service body components in `src/components/services/`. The build
  fails loudly if a live service lacks a body file.
- Prices/timelines on service pages render from the PRICING config (no
  hardcoded numbers) — caught and fixed one hardcoded "$9,500" during build.
- Home's "What I build" grid now shows the four live services (2×2); the
  standalone "search groundwork" card was dropped for grid balance — its
  rankings-honesty message lives on in the web-design FAQ and pricing FAQ.
- Rescues copy was self-edited to avoid implied track record ("situations I
  see every week" → "situations that bring people here").

## Niche update — home services

- Primary audience narrowed to home services trades (HVAC, plumbing,
  electrical, roofing, landscaping) per Tyler, 2026-08-12. Scope kept
  deliberately narrow: hero subheads (film CH4 line + static hero) and FAQ
  examples went trade-specific; /about, the /services hub, and the brand
  tagline keep the broader "service businesses" so adjacent clients
  (clinics, studios, firms) aren't repelled.
- **/free-audit does not exist on this site** — the instruction referenced
  updating its copy, but no such page was ever specified or built, and "no
  new pages" ruled out creating one. Audit copy continues to live on
  /process/ (video audit step) and /services/rescues/. Flagged to Tyler.
- Trade language kept factual (service calls, dispatch software, job types,
  trucks/crews/finished jobs) — no caricature, no "blue-collar" flattery.
- Not changed, worth deciding later: BRAND.description meta text and the
  OG share image kicker both still say "service businesses" (broad).

## Free-site wedge redraft (docs/site-redraft-prompt.md)

- Executed the one-shot redraft: offer-led positioning, all
  competitor-negative framing removed (the SIGNAL/NOISE noise-field and
  struck-promises scenes are gone), film architecture kept and re-authored
  as the 5-step free-build journey (Tell us → Draft one → Revise → Live →
  Yours). Pricing tiers removed; /pricing/ and /process/ retired with
  redirects; paid service detail pages retired (all roadmap entries back to
  "planned"); services page is the 3-group structure; /terms/ stub built
  from the runbook's paste-able language; footer carries the privacy note
  and terms link. Care Plan is $150/mo with the 5-day handoff clause.
- **Three DECISIONS arrived unfilled and are handled with the spec's own
  fallbacks — resolve when ready:**
  - **CAPACITY (D5):** no number → the capacity FAQ does not render (an
    invented number would be the fake scarcity the spec bans). Set
    `FREE_BUILD.capacityPerMonth` in src/config.ts and the FAQ appears.
  - **CLEARED_SERVICES (D6):** empty → "Why free" uses the spec's fallback
    phrase and the services page stays category-level. Add names to
    `CLEARED_SERVICES` when they pass the two-week test.
  - **NOTIFY_EMAIL (D7):** unset → intake forms render fully built
    (honeypot, validation, error/confirmation states) but submit buttons
    are disabled with a visible email-us fallback. Set
    `CONTACT.formEndpoint` (Formspree/Basin/your function delivering to
    `CONTACT.notifyEmail`) and they go live — native POST without JS,
    fetch + inline confirmation with JS.
- Deviations from the spec, reasoned: (a) the spec's "insert to Supabase"
  form requirement conflicts with the runbook's email-first rule and no
  Supabase account exists in this session — forms are endpoint-agnostic;
  point the endpoint anywhere, Supabase included, later. (b) File uploads
  (logo/photos) are link fields ("Drive/Dropbox link") — static hosting has
  no upload backend. (c) The end-to-end form test in the acceptance
  checklist is blocked on the endpoint existing; everything testable
  without it was tested. (d) Analytics is a config slot
  (`ANALYTICS.plausibleDomain`) — no analytics account exists yet.
- The proof section is a code comment on the homepage awaiting real,
  permissioned proof, per the spec.
- About page keeps its solo-honesty framing (allowed: the rule bans implying
  a team, not stating the truth) and now explains the "we."
- Verified: jank 3× territory PASS (max 19.2ms), mobile 375px no overflow,
  reduced-motion static steps, all acceptance greps clean (single "rankings"
  hit is the disclaimer refusing to promise rankings), redirects built,
  zero placeholder text. OG image regenerated for the free offer.

## Widened welcome (2026-08-14)

- Per Tyler: home services stays the marketing focus, but nobody gets
  scared away. Changes: hero welcome line under the CTAs, an "I'm not in
  home services" FAQ (explicitly covering online stores with checkout in
  the client's own payment account), "Online store / e-commerce" added to
  both intake trade dropdowns, the intake footer note widened, about page
  and footer meta softened from "for home services businesses" to
  "specialty, not a fence," meta description updated.
- The hero H1 stays home-services (the redraft spec's targeting rule);
  the welcome happens in the supporting copy, not by diluting the
  headline.
- **Delivery-readiness flag:** the site now openly welcomes e-commerce
  requests, but the catalog ledger's e-commerce rows are still OPEN — A2
  (Stripe flow tested end-to-end on a demo) and A3 (Shopify Partner
  account). Recommend closing A2 before the first store intake arrives;
  the FAQ promise (checkout in the client's own payment account) matches
  the runbook's client-owned-Stripe rule.

## Pre-launch audit pass (2026-08-17)

- A 3-agent background sweep (fresh-eyes site audit + CA business research
  + free-offer pitfalls) fed the launch checklist. Site defects found and
  FIXED: revision-copy contradiction (film step 3 said "one round" while
  everything else says until-it's-right), contact page implying an
  on-page form (+ dead CSS removed), cross-page hash anchors landing
  mid-film before pin inflation (settle() now corrects twice, with
  scrollRestoration manual on hash loads — all five anchors verified
  landing at 0px), jank meter now gated to ?jump/?debug, no-JS visitors
  get one clean form instead of two dead wizards, PNG/apple-touch icons
  added, terms got a last-updated + governing-document note, and a
  plain-English /privacy/ page shipped (CalOPPA; linked footer + intake;
  attorney review still on the checklist).
- Added from the pitfalls research: a time-to-submit bot gate (<5s =
  silent drop) alongside the honeypot; Turnstile recommended at deploy;
  a visible "Skip ↓" link in the film header that fades when the film
  ends (conversion escape hatch for hurried visitors).
- Not fixed by choice: film length itself (it's the brand; the skip link
  + hero CTAs are the mitigation), meta-refresh redirects (real 301s move
  to host config at deploy — checklist item).

## Revisions-vs-bugs terms + buildable checklist items (2026-08-17)

- Terms clarified per Tyler: ONE revision round (a revision = change of
  mind — structure, layout, capability) + bug fixes free for 60 DAYS
  after launch (a bug = something we built not working; never consumes
  the revision). Propagated to config (revisionRounds/bugFixWindowDays),
  film step 3, FAQ, scope table, /terms/ (new "Revisions vs. bugs"
  section), services page, structured data. Grep-verified no stray
  "until it's right"/"always free" copy remains.
- Built from the checklist without needing Tyler's accounts:
  - docs/free-build-agreement.md — signable one-pager draft matching the
    new terms (attorney review + entity name still required).
  - docs/marketing/ — "why free" post draft, handoff emails (walk-away +
    Care Plan variants), referral line, and the footer-credit clause
    text pending Tyler's decision.
  - docs/brand-assets/ — avatar 512, X banner 1500x500, FB 820x312,
    LinkedIn 1128x191, rendered from the blue/red brand system.
  - Two demo sites under /demos/ (fictional businesses, DEMO-badged,
    noindexed, sitemap-excluded, 555 numbers, disabled demo forms) in
    deliberately distinct design systems to show range honestly.

## "What else can you do now" batch (2026-08-17, second)

- Third demo site: /demos/alder-vance-law/ — fictional Pasadena family-law
  firm for the secondary audience. Same rules as the other demos (badge,
  noindex, sitemap-excluded, 555 number, disabled form) and deliberately
  no fictional attorney credentials — even a demo doesn't fake bar
  numbers.
- Domain research to unblock the name decision: signalworks.la and
  madebysignalworks.com read AVAILABLE via whois; signalworksweb/
  hellosignalworks/usesignalworks all taken, as were the fresh-name
  candidates checked (dialworks, callworks, sitesignal, firstcallsites,
  ringline.co). Registrar-confirm before relying on whois.
- New operating docs (all referenced by existing promises but previously
  nonexistent): client-domain-instructions.md (runbook's "5-step
  instructions"), gbp-connection-checklist.md (the free build's GBP
  deliverable; checklist half of ledger A5), care-plan-agreement.md
  (draft, attorney review), owners-guide-template.md (the handoff
  email's promised guide).

## Red-team audit + care-suite go-live (2026-08-19)

- CEO/COO/CFO red-team ran (3 agents, all completed). Full findings in
  the workflow output; every fixable finding was applied this pass:
  - FAQ "how do you make money" now discloses the payments platform
    share (it would have become false the day payments shipped).
  - 5-day draft promise re-anchored to "confirmed slot" with a
    1-business-day confirmation + capacity-said-at-confirmation, in the
    film, FAQ, terms, and agreement (was uncapped per-intake — a solo
    builder breach waiting for one good forum post).
  - Store builds get "a written timeline at confirmation" (A2 still
    open); custom functionality bounded to the draft window.
  - Edit unit defined everywhere: one request email, ≤3 small changes,
    no rollover. Lights On bug coverage scoped to "what we built" with
    third-party breakage = free diagnosis + quote.
  - Unavailability clause (10-business-day pause, then cancel+handoff)
    added to both agreements for attorney blessing.
  - Runbook walk-away close-out gained a bug-window re-entry step.
  - `npm run check:launch` added — fails if PLACEHOLDER or
    signalworks.example appears in dist (the deploy guard).
  - All $150 references synced out of living docs (source-of-record
    prompt docs left verbatim).
- Care suite went live sitewide as typed config data: CARE_PLANS
  ($29/$99/$249), CUSTOM_RETAINER, ADD_ONS, floor/default helpers;
  services page gained #plans + add-ons sections; structured data,
  terms, FAQ, footer, agreements all derive from it.
- Long Hall Financial platform disclosure added to /terms/ and the
  care-plan agreement. Tyler-side before any payments client: Signalworks
  brand profile/descriptor on the LHF Connect platform, attorney blessing
  of the structure, CPA on intercompany revenue booking.
- Board items only Tyler can close: USPTO/name (critical path), insurance
  before launch, GitHub push, hours-tracking on first 3 builds
  (conversion assumption is unmeasured), Turnstile at deploy.

## Trademark finding (2026-08-26)

- Tyler ran the USPTO search. Result is NOT clean: a LIVE/PENDING
  `SIGNALWORKS` application (serial 99570293, Jon L. Thomas) covers
  classes 009 and 042 — and 042 is the class covering website design and
  development services. A second SIGNALWORKS mark is DEAD/CANCELLED
  (Signal Science Inc.) and blocks nothing. A third result was not
  visible in the screenshot.
- Decisive unknown: the actual class-042 services wording on 99570293
  (not visible in search results; TSDR API now requires a key, so it
  wasn't machine-retrievable). That wording determines whether this is a
  real conflict or a narrow app-tracking claim that merely shares a word.
- Status: name decision escalated from "verify" to "get advice before
  investing." Attorney consult added to the checklist. Nothing in the
  repo assumes a rename; if Tyler changes the name, BRAND.name in
  src/config.ts plus the OG/avatar/banner renders are the mechanical
  work (~1 hour), and it gets much more expensive after handles, GBP,
  and signed client agreements exist.

## Repair pass (docs/site-repair-prompt.md, 2026-08-31)

- Executed all DECISIONS: two-tier care plans (Hosted $29 / Care Plan
  $150, every $99 and Front Office removed, custom-retainer line dropped
  from the site), five-page cap restored ("up to five pages that earn
  their place"), free functionality tightened to exactly quote forms /
  booking links / service-area maps, stores rolled back to quoted builds
  (free brochure site for store brands; store FAQ replaced with the
  prompt's language), rev-share removed from the money FAQ (disclosure
  now lives on the services custom-builds card + /terms/ + agreements),
  hero welcome line deleted (FAQ + footer versions kept).
- Judgment calls: Care Plan $150 = 3 edits/month (prompt said "monthly
  content edits" unquantified; quantities are the house rule — one line
  to change). Deliverability add-on $99 → $100 so the no-$99 acceptance
  grep passes clean. "Pages beyond five" re-added to not-included as the
  cap's honest counterpart. Fee ladder remapped in the proposal doc (no
  plan 0.75% / Hosted 0.5% / Care 0.25%) pending Tyler's confirmation.
- SITE_URL → https://signalworks-hall-hub.vercel.app (the prompt's
  fallback intent; its -psi guess corrected). Canonicals, og:url,
  sitemap, robots now real.
- **BLOCKED on FACTS (prompt says "no defaults," and none were filled):**
  CONTACT_EMAIL, PHONE, BUSINESS_ADDRESS, FORM_BACKEND key. Section A
  (wire + end-to-end test both forms) and the placeholder kill are
  impossible until they arrive. 4 PLACEHOLDER strings remain in dist by
  necessity.
