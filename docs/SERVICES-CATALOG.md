# Signalworks — Full Service Catalog & Build Feasibility Map

> Internal document — never published to the site. The public site only ever
> shows services whose ledger rows below are CLOSED (see "The rule" at the
> bottom). Provided by Tyler 2026-08-12.

**Purpose:** every service the business could sell, mapped to how it actually gets delivered, with the gaps flagged. When a client asks for something, find it here and you know instantly: can I say yes today, yes with setup, or not yet.

**Delivery tiers used below:**
- **NATIVE** — Claude Code builds it end-to-end today. Sell freely.
- **NATIVE + SERVICE** — Claude Code builds it, but it needs a third-party account/API (payments, email, hosting) that you or the client must set up. Sell freely; budget setup time.
- **AI-ASSISTED** — deliverable is produced with Claude/other AI tools but isn't "code" (content, audits, strategy). Sell freely; the work is review + judgment.
- **TOOL-GAP** — needs a platform CC doesn't natively drive (ad platforms, GBP API approval, native app stores). Sell only after closing the gap noted.
- **NOT YET** — don't sell until the flagged prerequisite exists.

---

## TIER 1 — BUILD SERVICES (launch offer, sell today)

### 1. Marketing websites
**NATIVE.** Astro/Next static or SSR sites, forms, analytics, schema, deployed to Cloudflare/Netlify/Vercel.
Gaps: none. This is the core.

### 2. Landing pages / campaign pages
**NATIVE.** Single-page conversion builds, A/B variants as separate routes.
Gaps: true split-testing needs a service (e.g., Cloudflare Workers or PostHog) — CC wires it, you need the account.

### 3. Web apps (booking flows, calculators, quote builders, client portals, dashboards, internal tools)
**NATIVE + SERVICE.** CC builds React/Next/Astro + a backend (Supabase, Postgres, serverless functions).
Gaps: auth + database = Supabase or similar account per client. Decide now: your account with client sub-projects, or client-owned accounts (client-owned is cleaner at handoff).

### 4. E-commerce
**NATIVE + SERVICE.** Two lanes: (a) Stripe Checkout / Payment Links wired into a custom site — CC does this fully; (b) Shopify — CC builds themes/sections but the store lives in Shopify.
Gaps: Stripe account must be client-owned (never process payments through yours). Shopify theme dev needs a partner account — free, set it up before selling lane (b).

### 5. Native mobile apps
**TOOL-GAP.** CC writes React Native / Expo well, but App Store + Play Store publishing needs Apple Developer ($99/yr) and Google Play ($25) accounts, signing, review cycles.
Gap to close: publish one throwaway Expo app under your own accounts first so the first client isn't your learning curve. Until then, sell "installable web app (PWA)" instead — NATIVE, no stores, covers 80% of "we want an app" requests.

### 6. Website rescues / rebuilds / migrations
**NATIVE.** Scrape/export existing content, rebuild, redirect map, relaunch.
Gaps: WordPress-to-static migrations are native; staying-on-WordPress work is doable but slower — quote higher or decline.

---

## TIER 2 — VISIBILITY SERVICES (add once first sites are live)

### 7. Technical SEO
**NATIVE.** Site speed, schema, sitemaps, redirects, Core Web Vitals — all code, all CC.
Gaps: none technically. Credibility gap: no results to point at yet. Sell as deliverable checklist, never rankings.

### 8. Local SEO / Google Business Profile management
**TOOL-GAP.** The work is GBP dashboard work (categories, posts, photos, review responses) — manual, not CC.
Gap to close: it's just labor + a checklist. Build the checklist, deliver manually, ~1hr/client/month. Fine to sell inside the Care Plan.

### 9. GEO / AI-search optimization (getting recommended by ChatGPT, Claude, Perplexity, AI Overviews)
**AI-ASSISTED.** Structured data, llms.txt, entity-clarity content, citations/mentions strategy. Emerging field = advantage for you, but measurement is immature.
Gaps: no reliable rank-tracking for AI answers yet. Sell as "AI-readiness audit + implementation," deliverable-based, never "we'll get you into ChatGPT."

### 10. Content / blog production
**AI-ASSISTED.** Drafted with Claude, edited by you, published via the site's content collection.
Gaps: none. Rule: you edit every piece; raw AI content under a client's name unreviewed violates your quality bar.

### 11. Review generation systems
**NATIVE + SERVICE.** Post-job SMS/email flows asking for reviews (Twilio/SendGrid + a small app CC builds).
Gaps: Twilio A2P 10DLC registration for business SMS takes days-to-weeks per client — start it at kickoff, not launch.

---

## TIER 3 — AUTOMATION & AI SERVICES (the GoHighLevel-suite territory)

### 12. AI chat agents on client sites (answer questions, capture leads, book)
**NATIVE + SERVICE.** CC builds the widget + backend calling the Anthropic API.
Gaps: per-client API billing — decide markup model (client's API key vs. bundled into retainer at a margin). Guardrail every bot: it must never invent prices, availability, or claims — same Section 7 rules apply to client bots.

### 13. AI phone agents / missed-call text-back
**TOOL-GAP.** Voice needs Twilio Voice + a voice-AI layer (Vapi, Retell, Bland). CC integrates them, doesn't replace them.
Gap to close: build one demo agent for a fake business, learn the latency/cost profile, THEN sell. Missed-call text-back alone is simpler (Twilio only) — sell that first.

### 14. Email marketing / newsletters
**NATIVE + SERVICE.** CC builds templates and automation logic on Resend/SendGrid/Mailchimp APIs; content is AI-assisted.
Gaps: deliverability setup (SPF/DKIM/DMARC per client domain) — CC generates the records, someone must paste them into DNS. Budget it.

### 15. CRM setup & pipelines
**TOOL-GAP.** Configuring HubSpot/GHL/Pipedrive is dashboard work; CC assists via APIs and MCP but doesn't click through onboarding.
Gap to close: pick ONE CRM to standardize on (HubSpot free tier is the safe default) and build your own pipeline in it first — your own CRM is the training ground and the demo.

### 16. Marketing automation (lead → nurture → booking flows)
**NATIVE + SERVICE.** Custom-built flows (webhooks + serverless + email/SMS) are fully CC-native and are your differentiator vs. GHL subscriptions.
Gaps: the client must be OK with custom infra instead of a familiar SaaS dashboard. Offer a simple admin page so they can see it working.

### 17. AI consulting / workflow audits for client businesses
**AI-ASSISTED.** Audit their ops, identify AI leverage points, implement with CC or off-the-shelf tools.
Gaps: none technical — it's your judgment. Don't sell until you have 2–3 delivered builds; consulting credibility rides on shipped work.

### 18. Reporting dashboards (calls, forms, traffic, revenue in one page)
**NATIVE + SERVICE.** CC builds dashboards pulling GA4, CallRail, Stripe APIs.
Gaps: each data source = an API connection + client OAuth. Start with the monthly plain-English PDF report (fully native), upgrade to live dashboards on retainer.

---

## TIER 4 — PAID TRAFFIC (largest gap, last to add)

### 19. Google Ads / Meta Ads management
**TOOL-GAP → NOT YET.** CC writes ad copy, builds landing pages, and structures campaigns on paper, but campaign management lives in ad platforms and spends real client money badly if run by a beginner.
Gap to close: either (a) get certified and manage a small budget on your own business first, or (b) partner/white-label with a media buyer and keep the landing-page + tracking side (NATIVE). Option (b) is faster and lower risk.

### 20. Ad landing page + tracking infrastructure
**NATIVE.** Pixels, conversion APIs, call tracking, UTM discipline. Sell this TO businesses already running ads — no gap, and it's a wedge into #19 later.

---

## THE ASSUMPTIONS LEDGER — resolve these before the matching service goes on the site

| # | Assumption / prerequisite | Blocks | Status |
|---|---|---|---|
| A1 | Supabase (or equal) account strategy decided: client-owned vs. yours | Web apps, portals | CLOSED — client-owned accounts (Supabase, Stripe, domain, email). Signalworks retains admin access for delivery and Care Plan work. This matches the public "your data, your accounts, your code" promise. |
| A2 | Stripe flows tested end-to-end on a demo | E-commerce | OPEN |
| A3 | Shopify Partner account created | Shopify builds | OPEN |
| A4 | One Expo app published under own dev accounts | Native mobile apps | OPEN |
| A5 | GBP management checklist written; time-per-client measured | Local SEO | OPEN |
| A6 | Twilio account + A2P registration process understood | Review systems, SMS, text-back | OPEN |
| A7 | Anthropic API billing/markup model for client bots decided | AI chat agents | OPEN |
| A8 | Demo voice agent built; cost-per-call known | AI phone agents | OPEN |
| A9 | Standard CRM picked; own pipeline running in it | CRM setup | OPEN |
| A10 | Ads path decided: certify vs. white-label partner | Paid traffic | OPEN |
| A11 | Per-client DNS access process documented (email + domains) | Email marketing, launches | OPEN |
| A12 | 2–3 shipped client builds exist | AI consulting credibility | OPEN |

**Rule:** a service does not appear on the public site until its ledger rows are CLOSED. The site's expansion architecture (sibling /services/ pages) is already built for this — adding a service is a content edit, not a rebuild.

## Sequencing recommendation

- **Now (site launch):** #1, 2, 3, 6, plus PWA version of #5. Care Plan includes #8 manually.
- **After first 2 clients:** #7, 10, 11, 18 (PDF reports), 20.
- **After 5 clients:** #12, 14, 16, 9.
- **Stage 3:** #13, 15, 17, 19, native #5.
