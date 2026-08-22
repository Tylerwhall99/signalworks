# Care & Support Suite — Pricing Proposal

> Status: PROPOSED (2026-08-18). Nothing on the public site changes until
> Tyler approves or edits the numbers. On approval this replaces the
> single $150/mo Care Plan everywhere (config, /services/, /terms/, FAQ,
> both agreement drafts).

Design principles: quantities, never "unlimited support" vagueness;
deliverables and response times, never outcomes; cancel anytime with the
5-day full handoff on every tier; priced from Signalworks' real cost
basis (static sites need no plugin babysitting) rather than agency
convention.

## The ladder

### 1. Lights On — $29/month
For the smallest businesses. "Your site runs itself; we keep the lights on."
- Hosting, SSL, daily backups, uptime monitoring
- Software updates
- Bug coverage extended for as long as you subscribe (past the free 60 days)
- Email support, replies within 2 business days
- No edits included (add-ons below, or one-off written quotes)

### 2. Care Plan — $99/month  ← the default recommendation
Everything in Lights On, plus:
- 2 content edits per month, done within 2 business days (hours, prices,
  photos, wording — email what changed). Unused edits don't stack.
- Support replies within 1 business day
- A monthly one-paragraph site note: uptime, form submission count,
  anything needing attention

### 3. Front Office — $249/month
Everything in Care Plan, plus:
- 6 content edits per month
- Urgent edits same business day
- Up to 2 hours/month of small feature work (new section, form change,
  calculator tweak)
- Priority queue on everything
- Quarterly tune-up: speed check, content review call, GBP refresh

### 4. Custom Retainer — quoted, from $500/month
Multi-location companies, web-app maintenance, varying monthly scope.
Scoped in writing per company size and services. Monthly plain-English
statement of exactly what was done. Reviewed together quarterly.

## Add-ons (any plan, or à la carte)

| Add-on | Price | Notes |
| --- | --- | --- |
| Extra edit | $25 / 5-pack $100 | Same 2-business-day turnaround |
| New page on an existing site | $150 flat | Written scope first |
| Campaign / landing page | $250 flat | One offer, one page |
| Email deliverability setup | $99 one-time | SPF/DKIM/DMARC records |
| GBP management | +$75/mo | Posts, photos, drafted review replies — per docs/gbp-connection-checklist.md; operationalizes catalog #8 |
| Analytics report | +$29/mo | Monthly plain-English PDF; operationalizes catalog #18 |

Annual prepay: 2 months free on any plan (10× monthly).

## Market position (for confidence, not for the site)

- Agency maintenance plans: typically $99–299/mo. WordPress care
  services (WP Buffs et al.): $79–299/mo — pricing justified by
  patch-and-pray labor static builds don't require.
- All-in-one marketing suites (GoHighLevel resellers etc.): $97–297/mo.
- $29 undercuts the whole market honestly; $99 matches the entry cluster
  while quantifying what others leave vague; $249 stays under $300.

## Rules that carry over to every tier

- Cancel anytime; full handoff within 5 business days at no charge
- Client owns domain, code, accounts throughout
- Quantities and response times in writing; no outcome promises
- CLEARED_SERVICES discipline still applies to add-ons: GBP management
  and analytics reports go public only when Tyler can deliver within two
  weeks of a yes (GBP checklist exists; time-per-client still unmeasured)

## On approval, one pass updates:
`src/config.ts` (CARE_PLAN → plan array + add-ons as typed data),
/services/ page, /terms/, the hosting FAQ, scope-table note,
docs/care-plan-agreement.md, docs/free-build-agreement.md ¶4, and the
owner's-guide template.

## Payments — "Get Paid Online" via Stripe Connect (added 2026-08-18)

**Model:** Stripe Connect **Standard** accounts — the client owns a full
Stripe account (dashboard, payouts, KYC) connected to Signalworks as the
platform. Honors the runbook rule (never process payments through our
account) and the ownership promise (they can disconnect anytime and keep
the account). Signalworks collects a disclosed per-transaction
application fee; funds never touch us.

**Deliverables (every tier, setup free):**
- "Pay your invoice" page on the client's site (invoice # + amount, or
  emailed payment links)
- Deposit collection on estimates/bookings
- Payouts to the client's own Stripe account, next business day
- Store clients: same account powers checkout
- Stripe's 2.9% + 30¢ passes through unchanged; our fee disclosed on the
  page and in the agreement

**Fee ladder — the fee falls as the plan rises:**

| Tier | Signalworks platform fee | Client total per transaction |
| --- | --- | --- |
| Free build, no plan | 0.75% | 3.65% + 30¢ |
| Lights On ($29) | 0.50% | 3.40% + 30¢ |
| Care Plan ($99) | 0.25% | 3.15% + 30¢ |
| Front Office ($249) | 0% (Stripe cost only) | 2.90% + 30¢ |
| Custom retainer | negotiated | — |

**Market:** Jobber / Housecall Pro ≈ 3.1% + 30¢ all-in; Square in-person
2.6% + 10¢. Site copy should say plainly: "Already on Jobber or
Housecall Pro? Keep it — this is for businesses without a field app who
still want to skip 'mail a check.'"

**Requires before selling:**
- Stripe platform account with Connect enabled (Tyler) → catalog ledger
  A2 becomes a must and widens to: Connect onboarding flow + pay page
  creating Checkout Sessions with `application_fee_amount` via a
  Cloudflare Pages Function + one end-to-end demo transaction.
- Disclosure in: pay page footer, Care/Front Office agreements,
  free-build agreement "not free" list ("payment processing: Stripe's
  fees plus a disclosed Signalworks platform fee"), and /terms/.
- Attorney review line: Stripe is merchant of record; clients complete
  their own verification in Stripe's flow; 1099-K reporting is theirs.
