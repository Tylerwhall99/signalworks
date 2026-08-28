# Signalworks — Launch Checklist

Everything standing between here and a live business, in run-down order.
Check things off as you go. **⚡ = I can do it the moment you say so.
👤 = only you can do it** (accounts, money, signatures, decisions).

---

## 0 · Decisions that unblock everything else (do these first)

- [ ] 👤 **Name & domain decision.** The Signalworks namespace is crowded:
  signalworks.com / .co / .io / .us are taken, and variants
  (getsignalworks.com, trysignalworks.com, signalworkshq.com,
  signalworks.site) were all registered within the last year — other
  people are actively branding on this name. Options: (a) find an angle
  that's free (signalworks.build / .dev / .studio looked possibly open —
  verify at a registrar), (b) ~~run a USPTO search~~ **done — a LIVE PENDING
  `SIGNALWORKS` application exists in class 042 (web design services),
  serial 99570293; see §2**, (c) consider a name adjustment now, while it
  costs nothing. Everything below (email, socials, GBP) waits on
  this.
- [ ] 👤 Buy the domain in **your own registrar account** (the same rule
  the runbook gives clients).
- [ ] 👤 **Business email** on that domain (Google Workspace ~$7/mo or
  Zoho free tier). No @gmail on the site.
- [ ] 👤 **Business phone number** (Google Voice is free; OpenPhone if you
  want texting/voicemail polish). This becomes the click-to-call number.
- [ ] 👤 **Pick the intake form service** — Formspree, Basin, or
  Web3Forms (all have free tiers; any of them emails you each
  submission). Create the account. ⚡ I wire it in and test both forms
  end-to-end the moment the endpoint exists.
- [ ] 👤 **Set your real monthly capacity** — the number of free builds
  you'll actually enforce. One line in config; the "how many do you do?"
  FAQ appears automatically. Don't inflate it: it's the only scarcity
  claim the site allows itself.
- [ ] 👤 **Name your cleared services** — paid services you could start
  delivering within two weeks of a yes. While empty, the site stays
  category-level ("ongoing growth services"), which is fine for launch.

## 1 · Website — before launch

- [ ] ⚡ Replace the four placeholders in `src/config.ts` (phone, email,
  address, SITE_URL) once section 0 lands.
- [ ] ⚡👤 Wire the form endpoint, then **test both intake paths on a real
  phone**: submission arrives in your inbox, confirmation shows, honeypot
  quiet.
- [x] ⚡ **Privacy policy page.** ~~Drafted~~ — live at /privacy/, linked
  in the footer and next to the intake forms. (CalOPPA requires one for
  any site collecting personal info from Californians; CCPA itself almost
  certainly doesn't apply to you — its 2026 thresholds start at ~$26.6M
  revenue or 100k+ residents' data.)
- [ ] 👤 Have an attorney glance at **/terms/** and **/privacy/** — one
  short review, cheap insurance for a "no catch" brand. The audit also
  flagged: terms need your legal entity name (waits on the section-0
  decision) and the signed one-pager must exist and match before launch.
- [ ] 👤 At deploy: add **Cloudflare Turnstile** (invisible captcha) to
  the intake forms — the site already ships a honeypot and a
  time-to-submit bot gate, but a free offer attracts serious junk volume;
  layered is the way. ⚡ I wire it once the Cloudflare account exists.
- [ ] 👤 Create an analytics account (Plausible ~$9/mo, privacy-friendly,
  no cookie banner needed — or GA4 free). ⚡ I wire it (config slot
  already exists).
- [x] ⚡ **Offsite backup (stopgap, done 2026-08-26)** — full repo
  history bundled to Google Drive at
  `Google Drive/…/signalworks-backup/signalworks-repo.bundle` (442K,
  verified complete). If this laptop died today, everything is
  recoverable. Re-run `git bundle create` after big changes, or let
  GitHub take over below.
- [ ] 👤 Create a free GitHub account, then tell me the username. ⚡ I
  create the repo and push all 21 commits — that makes the backup
  automatic instead of manual, gives you version history you can browse
  from any device, and is the same setup the runbook uses for client
  repos ("the repo is the product").
- [ ] 👤 Pick a host — **recommendation: Cloudflare Pages** (free tier
  allows commercial use; the runbook already prefers it for client
  handoffs, so your own site is the dry run). ⚡ I connect and deploy.
- [ ] 👤 On your phone, once live: scroll the whole film, tap the call
  link, submit a form, open every page.
- [ ] ⚡ Submit the sitemap to Google Search Console + Bing Webmaster
  Tools (needs the domain verified in your accounts).
- [ ] 👤 Create a **Google Business Profile for Signalworks** — you're a
  service business in LA; practice what the site preaches.

## 2 · Legal & money

- [ ] 👤 **Entity decision with a CPA**: California LLC ($70 filing + $20
  Statement of Information within 90 days) vs. starting as a sole
  proprietor with a DBA. Know going in: the $800/yr franchise tax
  first-year waiver **expired end of 2023** — an LLC formed in 2026 owes
  the full $800 in year one, due the 15th day of the 4th month after
  formation (FTB Form 3522). Some blogs still claim otherwise; they're
  stale. (Verified: sos.ca.gov / ftb.ca.gov guidance via llcuniversity.)
- [ ] 👤 **EIN** — free, instant, irs.gov directly (never the paid
  middlemen sites). Sequence matters: form the LLC first so the EIN
  matches state records.
- [ ] 👤 **Business bank account** — separate money from day one, even as
  a sole prop. Needs the EIN.
- [ ] 👤 **City of LA Business Tax Registration Certificate (BTRC)** —
  required even home-based, register online at finance.lacity.gov. Under
  $100k gross receipts you owe no city tax — but **only if you register
  AND file the annual renewal on time** (the 2026 renewal deadline was
  March 2; missing it forfeits the exemption). Also ask about the
  **Creative Artist Exemption** (up to $300k for creative work) — a
  design business may qualify.
- [ ] 👤 **Insurance quotes**: general liability (~$29/mo average) +
  professional E&O (~$61–68/mo for $1M limits); bundles with cyber run
  ~$30–80/mo. Realistic budget: **$400–$1,200/year**. Hiscox, Next,
  Thimble, Insureon all quote online.
- [ ] ⚡👤 Turn the free-build terms into a **signable one-pager**
  (DocuSign template — your connector just needs authorizing). Signed
  before every first commit, per the runbook.
- [ ] 👤 **Bookkeeping** from dollar zero: QuickBooks or Wave (free), plus
  the business card for every expense.
- [x] 👤 **USPTO trademark search — DONE 2026-08-26. Result: not clean.**
  Tyler's search returned 3 results; two visible:
  - `SIGNALWORKS` — **DEAD/CANCELLED**, Signal Science Inc. (CA),
    class 009. Irrelevant — cancelled marks don't block anyone.
  - `SIGNALWORKS` — **LIVE / PENDING**, Jon L. Thomas (individual),
    serial **99570293**, classes **009 and 042**. Visible recital:
    "Downloadable mobile applications for tracking the user's…"
  **Why 042 matters:** class 042 is the class that covers website design
  and development services — the exact class Signalworks would operate
  and register in. An identical wordmark, pending, in your class is the
  one scenario the earlier note flagged as worth real advice.
  **Nuance that cuts both ways:** it is *pending*, not registered
  (applications get refused, abandoned, and opposed all the time), and
  the visible text is the 009 recital — the actual **042 services
  wording is the deciding fact and isn't visible in the search results.**
  Pull the full record at tsdr.uspto.gov (search serial 99570293) or have
  an attorney do it.
- [ ] 👤 **Trademark attorney consult (~$200–500, 30 minutes) — now
  justified, was optional.** Ask exactly: (1) what does serial 99570293
  actually claim in class 042, (2) can I *use* Signalworks for web design
  services under common law, (3) could I ever *register* it, (4) does
  their pending application create real cease-and-desist exposure. Use vs.
  register are different questions with different answers. Not legal
  advice from me — I can read the record fields, not give an opinion.

## 3 · Delivery readiness — be ready before the first intake arrives

- [ ] ⚡👤 **Dry-run the whole runbook on a fake business**: intake →
  build → client-owned domain instructions → deploy → handoff checklist.
  Finds the potholes before a real client is in the car.
- [ ] ⚡ GitHub org structure for client repos (repo per client domain,
  per the runbook).
- [ ] 👤 **Stripe platform readiness** — Tyler's plan (2026-08-26):
  create a **separate Signalworks tenant/account inside the LHF Stripe
  organization**, which cleanly solves the red team's top blocker — the
  client-facing brand is Signalworks, books stay separable, and LHF stays
  the parent. Then: (a) confirm the public business name + statement
  descriptor on that tenant reads "Signalworks," (b)
  update the platform's business description for the web-design use case
  (Stripe ToS: accurate representation), (c) attorney blesses the
  LHF-platform/Signalworks-brand structure, (d) CPA confirms how
  platform-fee revenue books across entities. ⚡ Then I build Connect
  onboarding + pay page + one demo transaction, closing catalog A2.
- [ ] 👤 **Track hours on the first three free builds** — the whole model
  rests on an unmeasured conversion assumption (CFO flag). Real numbers
  for build-hours and plan conversion decide capacity and whether the
  fee ladder needs tuning.
- [ ] 👤 Decide client hosting lane: Vercel Pro team (~$20/mo, smooth
  transfer flow) vs. all-Cloudflare (free). The runbook supports either.
- [ ] 👤 Where intake submissions get tracked (a simple sheet is fine;
  Todoist if you authorize the connector). The one-business-day reply
  promise needs a system, not memory.
- [ ] 👤 1Password vault structure for client credentials (one vault per
  client — you already run 1Password).
- [ ] ⚡ Google Drive folder template for client intake assets (photos,
  logos, licenses).

## 4 · Social & marketing

- [ ] 👤 **Claim handles** the same day the name is final: Instagram,
  Facebook Page, LinkedIn company page, X, YouTube, Nextdoor business,
  TikTok. Same wordmark square everywhere (I'll export avatar/banner
  images sized per platform — ⚡).
- [x] ⚡ **Demo sites built** — two live at /demos/ridgeline-hvac/ (bold
  HVAC, navy/orange) and /demos/evergreen-landscaping/ (editorial serif,
  green/cream). Clearly badged as fictional sample builds, noindexed,
  excluded from the sitemap, 555 phone numbers. Want a third trade or a
  law-firm demo? One message.
- [ ] 👤 **First-five plan.** Your first 5 free builds are the marketing:
  people you know first. To reach owners (not homeowners), go where
  contractors network: trade Facebook groups, Contractor Talk, Plumbing
  Zone, HVAC forums, BNI/chamber meetings — and give value first;
  most groups ban naked promotion. Nextdoor/local FB groups reach the
  consumer side. Each finished build = real portfolio proof (with
  written permission), which unlocks the site's empty proof section and
  the catalog's A12 row.
- [ ] 👤 **GBP live before outreach, not after** — skeptical owners
  Google you first; a verified profile with real photos is the cheapest
  legitimacy signal there is.
- [ ] ⚡ Decide on a small **"Site by Signalworks" footer credit** on
  client builds (with an opt-out in the terms). It's the strongest free
  referral channel this model has.
- [ ] ⚡ Content seeds I can draft: the "why free" explainer post, a
  build-in-five-days diary format, before/after posts (permissioned only
  — the no-invented-proof rule follows the brand onto social).
- [ ] 👤 A referral ask that goes out with every handoff email (⚡ I
  draft it).

## 5 · Launch day

- [ ] ⚡ Final build, deploy to the real domain, DNS confirmed, redirects
  live (upgrade the meta-refresh stubs to real server 301s in the host's
  redirect config), OG image renders in a link preview.
- [ ] ⚡ Sitemap submitted (Search Console + Bing).
- [ ] 👤 Announce: GBP post, LinkedIn, the first-five outreach messages.
- [ ] 👤 Capacity month officially open — start the tracker.
- [ ] 👤 Check the intake inbox daily for the first week; spam-filter
  test (send yourself one from a different account).

## 6 · First month

- [ ] 👤 Honor the one-business-day reply promise — it's on the site in
  writing.
- [ ] 👤 Collect written portfolio/testimonial permission as each build
  finishes.
- [ ] 👤 Revisit cleared services after the first Care Plan conversations.
- [ ] ⚡ Close catalog ledger rows as reality catches up (A2 after the
  Stripe demo, A12 after builds 2–3), and flip the proof section live
  when real proof exists.

---

*Generated 2026-08-15. The ⚡ items are one message away — say which ones
and I'll run them down while you handle the 👤 column.*
