# One-Shot Prompt — Signalworks Site Redraft (Free-Site Wedge)

> **How to use:** Fill the DECISIONS block below (7 lines, defaults provided). Then paste this entire file into Claude Code inside the Signalworks site repo. Everything after the DECISIONS block is the prompt itself.

---

## DECISIONS — fill or accept defaults

1. **FREE_SCOPE:** Websites only, up to 5 pages. Web apps and custom builds are quoted, never free. *(default)*
2. **OWNERSHIP:** RESOLVED — client owns the domain (registered in their own account day one), the site, and all files. At launch we transfer the repo and hosting into their accounts, or host on the optional Care Plan ($150/mo) with a cancel-anytime, full-handoff-in-5-days clause. See client-handoff-runbook.md.
3. **REVISIONS:** One revision round included on the free build. *(default)*
4. **DRAFT_TIMELINE:** First working draft within 5 business days of intake. *(default — change only to a number you can hit)*
5. **CAPACITY:** ___ free builds per month, shown on the site as a real number. *(fill — this is honest scarcity, so only state what you'll actually enforce)*
6. **CLEARED_SERVICES:** List the paid services that pass the two-week test — you could begin delivering within two weeks of a client saying yes: ___. *(fill — these get named on the site; everything else stays category-level: "ongoing growth services." The old ledger's pricing gate is dead, but this rule survives it: the retainers are now all the revenue, so never advertise one you can't deliver.)*
7. **NOTIFY_EMAIL:** Form submissions email to: ___. *(fill)*

---

## THE PROMPT

You are redrafting the existing Signalworks marketing site in this repo. Read the current codebase first. Identify the scroll-narrative component — keep its animation architecture intact, but replace its content per the spec below. This is a content and structure redraft, not a rebuild.

### Positioning shift

The old draft leads with how other agencies fall short. Kill all of that framing — every sentence about competitors, overcharging, or industry failures goes. The new site leads with one offer:

**We build your website free. You own it. No catch.**

The business model is stated plainly on the page, because transparency is the conversion mechanism: AI-assisted development made builds cheap for us, so we give the site away; some clients later hire us for ongoing paid work; enough do that the math works; if a client never spends a dollar, they keep the site anyway.

Primary audience: home services businesses (HVAC, plumbing, electrical, roofing, landscaping). The hero and examples speak to them. Secondary line elsewhere: "We also work with law firms and other service businesses that live on inbound calls." Do not put law firms in the hero.

### Page and section spec

**Nav:** Home · How it works · Services · FAQ · Start my free site (button)

**1. Hero**
- H1: "A free, professional website for your home services business."
- Sub: "Built in days. You own it outright — domain, files, everything. No catch, and we'll tell you exactly why it's free."
- Primary CTA: "Start my free site" → intake section. Secondary CTA: "How is this free?" → anchor to the Why Free block.
- No stock-photo hero of handshakes. Use the existing visual system.

**2. How it works (repurpose the scroll narrative here)**
Replace the old scroll content with this five-step journey. Use this copy verbatim or improve the wording without changing any claim:

1. "Tell us about your business. Three minutes if you're in a hurry, fifteen if you want the first draft to land close."
2. "We build draft 1. A real working site, not a wireframe. Within {DRAFT_TIMELINE}."
3. "We revise together. One round included. Tell us what's off, we fix it."
4. "It goes live. Your domain, your property. Calls and form fills go straight to you."
5. "If you want more — the ongoing work that keeps the phone ringing — we'll quote it plainly. If not, you keep the site. Either way it's yours."

**3. Why free (the trust block — this section does the selling)**
Use this copy verbatim or improve without changing claims:

> "Why would anyone build websites for free?
>
> Because the economics changed. AI-assisted development means a site that used to take an agency six weeks takes us days. Our real business is the ongoing work — {CLEARED_SERVICES, or 'the growth services that take sustained effort month after month'}. Some of the businesses we build free sites for hire us for that. Enough that the math works.
>
> The free site is our audition, not a trap. You keep it either way. We'll put the terms in writing — one page, plain English — before we start."

**4. What's included (scope table — kills scope ambiguity and freebie fear at once)**
Two columns.

*Free build includes:* up to 5 pages (Home, Services, About, Contact, plus one); copy written from your intake answers; mobile-first layout; click-to-call; a contact form that reaches a real inbox; basic on-page SEO hygiene (titles, descriptions, speed); Google Business Profile connection; one revision round.

*Not included free (quoted plainly if you want it):* web apps and custom functionality; ongoing edits and content; hosting and maintenance (optional Care Plan, $150/mo); photography and logo design; additional pages beyond five; {non-cleared services stay as "ongoing growth services — ask us"}.

**5. Services page restructure**
Three groups: **Free Website** (the offer above) · **Ongoing services** (only CLEARED_SERVICES named; everything else is category-level) · **Custom builds & web apps** (quoted per project). Remove the old $1,500 / $3,000 tier presentation entirely. Care Plan keeps its named price.

**6. FAQ (ask the skeptic's questions for them)**
Use these verbatim or improve without changing claims:

- **What's the catch?** "There isn't one you'll find later. The site is yours — domain, files, content. We build free because some clients hire us afterward for ongoing work. That's the entire model, and we'd rather tell you than have you wonder."
- **Do I have to host with you?** "No. At launch, everything moves into accounts in your name — code, hosting, domain. Running any website costs hosting: roughly $0–20 a month if you handle it yourself, or $150 a month on our Care Plan and we handle hosting, updates, and support. The build is free either way, and if you ever leave the Care Plan we hand everything over within 5 business days at no charge."
- **Is this a template with my logo on it?** "No. Each site is built from your intake — your services, your area, your photos. Modern code, not a page-builder account you're locked into."
- **What if the draft misses?** "One revision round is included. If it's still not right, walk away. You've lost nothing."
- **How do you make money if I never buy anything?** "On you, we don't. Across everyone we build for, enough hire us for ongoing work that it works out."
- **Do I have to get on a sales call?** "No. Submit the form, get the draft. We'll talk when there's something to look at."
- **How fast?** "{DRAFT_TIMELINE}."
- **How many of these do you do?** "{CAPACITY} free builds a month. When the month is full, you go on next month's list."

**7. Intake — two paths, side by side, both end in the same pipeline**

*Card A — Quickstart (3 minutes):* "Enough for us to build draft 1. Best if you want to see something fast."
Fields: business name · what you do (dropdown: HVAC, plumbing, electrical, roofing, landscaping, law firm, other + free text) · service area · phone · email · current website URL (optional) · your top 3 services · one thing customers say they like about you · anything the site must include (optional).

*Card B — Detailed (10–15 minutes):* "The more you give us, the closer draft 1 lands."
Everything in Quickstart, plus: logo upload or brand colors · photos you have the right to use · pages you want · licenses/certifications you actually hold · testimonials you have written permission to use · booking or scheduling tool · hours · locations · 1–2 sites you like the look of · do you own a domain already · do you have a Google Business Profile.

Form requirements: submissions insert to Supabase and email {NOTIFY_EMAIL} within a minute; honeypot field for spam; server-side validation; clear error states; labeled inputs; confirmation state on success: "Got it. You'll hear from us within 1 business day with your draft timeline." No CAPTCHAs that block mobile users.

**8. Footer**
Real business address (Los Angeles), contact email, one-line privacy note on what happens to form data. Link to the plain-English free-build terms page (create it as a stub with the ownership, scope, revision, and image-rights terms from the DECISIONS block).

### Hard rules — the executor must not violate these

- No invented proof. No testimonials, client names, logos, "trusted by," review counts, star ratings, years in business, team-size implications, or certifications. Leave a commented-out proof section in the code for when real proof exists.
- No outcome guarantees. Never promise rankings, lead volume, call volume, or revenue. The only guarantee on this site is the price: free means free.
- No fake urgency or fake scarcity. The only scarcity claim allowed is the real CAPACITY number.
- Honest about AI. If copy references how we build fast, it says AI-assisted development plainly.
- Voice: plain, direct, short sentences. Ban: "in today's digital landscape," "leverage," "elevate," "unlock," "seamless," "cutting-edge," "game-changing." If a sentence could appear on any agency site, rewrite it.
- Singular first person plural ("we") is fine; never imply a team headcount.

### Acceptance checklist — verify before finishing

- [ ] Works at 375px; fast on a mid-tier phone
- [ ] Both forms tested end-to-end: submission lands in Supabase and the notify inbox; confirmation state renders
- [ ] Click-to-call works on mobile
- [ ] Zero placeholder text anywhere ("lorem," "[TODO]," "[Company]")
- [ ] Grep the built copy for: "guarantee" (allowed only about price), "trusted," "clients like," "#1," "rank" — remove violations
- [ ] Scroll component still animates; content replaced; all competitor-negative framing gone
- [ ] Only CLEARED_SERVICES are named; everything else is category-level
- [ ] Readable contrast, labeled inputs, analytics installed
- [ ] Terms stub page exists and is linked
