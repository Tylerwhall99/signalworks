# Capacity model — how many free builds a month

> **Everything in this document is arithmetic from assumptions I made up, not measurement.**
> The only measured numbers anywhere in the repo are two machine build times (11 minutes,
> `docs/dry-run-findings.md`; about four minutes for the second, starter-based build), and
> there are zero real clients. No industry benchmark, conversion rate, or outside statistic
> appears anywhere below. Every hour estimate is a guess with a name on it so it can be
> replaced by a measured number after three real builds — **and so is every figure in the
> "Elapsed" column.** No source in the repo or outside it gives a number of days for chasing
> blanks, for a client reading a draft, or for Google Business Profile verification.

**What this decides:** `FREE_BUILD.capacityPerMonth` in `src/config.ts` (line 115), currently
`null`. While it is null the site makes no capacity claim at all — the "How many of these do
you do?" FAQ does not render (`src/pages/index.astro` lines 686–701; the `<details>` element
itself is 691–699). That was deliberate: an invented number is fake scarcity. The moment a
number goes in, it is a public promise Tyler has to enforce by hand.

---

## 1. Why 11 minutes is not the answer

The dry run built and deployed a full client site in **11 minutes of build time**
(`docs/dry-run-findings.md`) — and 2 of those 11 minutes were writing the handoff
documents, so the build itself was under 10. The second
build, on the starter, took about **4 minutes**. Both numbers are real and both are
irrelevant to capacity, because both were a machine working from complete, unambiguous
intake, with no client emails, no waiting on photos, no revision round, and no real accounts
to coordinate.

The build is not the constraint and never will be. Every hour below is a human-loop hour.
The only way to make the number bigger is to shorten client round-trips, not to make the
build faster.

---

## 2. Per-build time model

Fourteen line items. "Tyler hours" is work he actually does. "Elapsed" is calendar time that
passes whether or not he is at his desk — waiting on a client is not work, but it is what
eats the five-business-day draft promise. **Both columns are guesses.** The elapsed figures
are not sourced from anything: `docs/gbp-connection-checklist.md` says only that verification
"can take days" and gives no number, and nothing in the repo estimates how long a client
takes to answer an email.

| # | Line item | Tyler hours (low / likely / high) | Elapsed (guess) | Inside the 5-day draft clock? |
| --- | --- | --- | --- | --- |
| 1 | Read the intake, fill `docs/intake-questions.md`, write the kickoff reply | 0.5 / 0.75 / 1.5 | 1 business day (promised) | Before the clock |
| 2 | Chase the blanks — photos, CSLB number, insurance answer, GBP access, registrar login | 0.25 / 0.75 / 2.0 | 1 / 3 / 15 business days | Before the clock **only if §3's fix is made** |
| 3 | Domain: send `client-domain-instructions.md`, confirm it is registered in their account | 0.25 / 0.5 / 1.0 | 0 / 1 / 3 business days | Before the clock |
| 4 | Supervised build session (starter + config + copy from intake) | 0.5 / 1.0 / 2.0 | same day | **Inside** |
| 5 | Real-device pass — one iPhone, one Android, over cellular (checklist requires it) | 0.25 / 0.5 / 1.0 | same day | **Inside** |
| 6 | Draft package: preview URL, `CLIENT-TO-CONFIRM.md`, draft-review email | 0.25 / 0.5 / 1.0 | same day | **Inside** |
| 7 | Client reads the draft and sends one consolidated reply | 0 / 0 / 0 | 1 / 3 / 10 business days | After |
| 8 | Apply the revision round, resend, confirm in writing that the round is used | 0.5 / 1.0 / 2.0 | 1 / 2 / 4 business days | After |
| 9 | Launch prep: written go-ahead, form key, DEMO flip, DNS, deploy, verify | 0.5 / 1.0 / 2.0 | 1 / 3 / 10 business days | After |
| 10 | Launch-day handoff per `client-handoff-runbook.md` (repo transfer, hosting claim, forms, analytics, close-out email, remove access) | 0.75 / 1.5 / 3.0 | 1 day | After |
| 11 | GBP connection per `gbp-connection-checklist.md` (30-min call with their login, plus the service-area-business settings) | 0.5 / 1.0 / 2.0 | 0 / 5 / 21 **calendar** days if verification is needed | After, and can outlast launch |
| 12 | Record the 5-minute Loom walkthrough (the build fails while `{{WALKTHROUGH_URL}}` is empty) | 0.25 / 0.5 / 1.0 | same day | After |
| 13 | 60-day bug window tail — expect 1 to 3 touches | 0.25 / 1.0 / 3.0 | spread over 60 days | After |
| 14 | Per-client admin: agreement signature, 1Password vault, Drive folder, tracker, build record | 0.5 / 1.0 / 1.5 | throughout | Split |
| | **Total per free build** | **5.25 / 11.0 / 23.0 hours** | **~3 weeks likely, ~9 weeks high, intake to live** | Elapsed column summed on the critical path (rows 1, 2, 3, 7, 8, 9, 10): 14 business days likely, 44 high. |

**Assumptions behind those numbers, stated as assumptions:**

- **The unit being modelled is the free build as it is actually scoped** in `src/config.ts`
  and `docs/free-build-agreement.md`: up to five pages that earn their place, plus a privacy
  policy page that does not count toward the five; one revision round; a 60-day bug window.
  The *build* is free; hosting is not — that is roughly $0–20/month if the client runs it
  themselves, or a care plan from $29/month. Anything outside that scope is a different unit
  and these hours do not describe it.
- Tyler is not a developer. Item 4 is him running and reviewing a supervised build session,
  not typing code — so the 11-minute machine time sits inside a 1-hour human hour.
- The starter and the templates exist and work. They did on their one test (Evergreen
  Landscaping, ~4 minutes). Builds 1 and 2 will land near the **high** column anyway,
  because everything gets done for the first time once.
- One revision round means one consolidated reply. If clients trickle feedback instead,
  item 8 doubles and the model is wrong.
- The bug tail assumes bugs, not scope creep dressed as bugs. Holding that line is a
  conversation, and conversations are hours.
- Nothing here covers a client who says yes to a paid plan. Care Plan delivery is §7.

**Two things this model does not contain, and they are real hours:**

- **Intake triage — 0.1 / 0.25 / 0.5 hours per intake, whether or not it becomes a build.**
  The site promises a reply within one business day to *every* intake
  (`src/pages/contact.astro` lines 10–11, 63). That cost scales with marketing, not with
  capacity. Twenty intakes in a month would be roughly 5 hours before a single build starts.
- **Getting the intakes at all.** Outreach, calls, follow-up. With zero clients today, this
  is the larger half of the week and it competes for the same hours.

---

## 3. The five-day promise is a queue commitment, not a throughput number

The public promise and the signable one are not worded the same, and only one of them
mentions capacity. Both, verbatim:

> **The site** (`src/pages/index.astro` lines 678–683):
> "First working draft within five business days of your confirmed slot. We confirm within
> one business day of your intake, and that reply is where you get your date — so you know
> before you wait, not after."

> **`/terms/`** (`src/pages/terms.astro` lines 28–31), shorter, same substance:
> "First working draft within five business days of your confirmed slot — we confirm within
> one business day of intake, and that reply is where you get your date."

> **The agreement** (`docs/free-build-agreement.md`, clause 1), the only source anywhere
> that contains a capacity clause:
> "First working draft within five business days of your confirmed slot (we confirm within
> one business day of intake; if capacity is full you'll know at confirmation)."

Note that the agreement is headed **DRAFT for attorney review** and is unsignable today, so
the capacity clause is not yet a commitment to anyone.

Three things follow, and they are the reason a modest capacity number works:

1. **Confirmation and slot start are different dates.** He must *reply* within one business
   day. He does not have to *start* within one business day. The reply names the slot week.
2. **The clock should start when the required-to-start intake is complete**, not when the
   intake form is submitted. The runbook already says the build does not begin with blanks
   (day-one #7). Write that into the confirmation email in one sentence: "Your slot is the
   week of ___, which starts once the answers below are in."

   **This does not work as `docs/intake-questions.md` is written today, and that is a
   prerequisite, not a detail.** Section 1, "Required to start," is rows 1–8 only: business
   name, trade, service area, phone, delivery email, top 3 services, one thing customers
   like, biggest headache. Every item line 2 chases sits *outside* it — CSLB number (row 9)
   and insurance (row 11) in Section 2, photos (row 14) in Section 2, registrar account and
   login (rows 25–26) and GBP access (row 27) in Section 4. Gating the slot on "Section 1
   complete" therefore leaves the up-to-15-business-day tail **inside** the five-day promise,
   which is the exact failure this point is trying to prevent. To get the effect described,
   either name the specific rows the confirmation email gates on, or move rows 9, 11, 14, 25,
   26 and 27 into Section 1 of `intake-questions.md` first. Everything below assumes that
   edit is made.

   If it is not made, one client sitting on a licence number breaks the only hard deadline
   the business has.
3. **Launch day is not promised anywhere.** Draft date is promised. Confirmation reply is
   promised. Cancellation handoff (5 business days) is promised. Paid-plan reply times are
   promised. Launch date is not. So when a week overloads, the launch slides a few days and
   nothing is broken. That is the pressure valve, and it is the reason the number below can
   run near full utilisation without lying to anyone.

### How many slot weeks fit

Pre-draft work (items 1–6 plus half of 14) is what must fit inside the promised week:
**2.25 / 4.5 / 9.25 hours.** That is 41% of the likely per-build total; the other 59% happens
after the draft goes out and can be moved around.

**Assumption:** half of Tyler's working hours on this business are available for client
delivery. The other half goes to outreach, intake triage, admin, and the site itself. This
is a guess.

| Scenario | Hours/week on the business | Delivery hours/week | Delivery hours/month (×4.33) | Slot starts that fit in **one** week |
| --- | --- | --- | --- | --- |
| Part-time | 10 | 5 | 21.6 | 1 (4.5 ≤ 5) |
| Half-time | 20 | 10 | 43.3 | 2 (9.0 ≤ 10) |
| Full-time | 40 | 20 | 86.6 | 4 (18.0 ≤ 20) |

**Burst rule, whatever the monthly number is:** never more than 1 (part-time) / 2 (half-time)
/ 4 (full-time) slot *starts* in the same calendar week. Two clients who both pick the first
week of the month is how a monthly number that looks fine on paper breaks the draft promise.
The confirmation email assigns the week; he controls it.

---

## 4. Three scenarios

Monthly delivery hours ÷ per-build hours:

| Scenario | Delivery hrs/month | At low (5.25 hr) | At likely (11 hr) | At high (23 hr) |
| --- | --- | --- | --- | --- |
| Part-time (~10 hrs/wk) | 21.6 | 4.1 | **2.0** | 0.9 |
| Half-time (~20 hrs/wk) | 43.3 | 8.2 | **3.9** | 1.9 |
| Full-time (~40 hrs/wk) | 86.6 | 16.5 | **7.9** | 3.8 |

Read the likely column as the sustainable number once the process is warm, and the high
column as what the first two or three builds will actually cost. A public number should
survive the high column in month one or be scheduled so it does — which is what the burst
rule does.

Sanity check on part-time at 2/month, using the likely column and slot starts in weeks 1
and 3:

- Week 1 — build A pre-draft (items 1–6 + half of 14), 4.5 hrs against a 5-hour budget.
  Fits, barely.
- Week 2 — build A revision round (item 8), 1 hr. Slack.
- Week 3 — build B pre-draft 4.5 + build A launch prep and handoff (items 9–10) 2.5 + build A
  Loom (item 12) 0.5 + admin (half of item 14) 0.5 = **8 hrs against 5. Over by 3.**
- Week 4 — build B revision 1 + build A GBP call (item 11) 1 + the first bug-window touch
  ~0.5 = 2.5 hrs. Slack.

Those four weeks sum to about **16 hours**, not 22, and the gap is not slack — it is work
that lands later. Build B's launch, handoff, GBP, Loom and admin (about 4.5 hrs) and both
builds' 60-day bug tails (about 1.5 hrs remaining) fall in the following month. In a steady
state, last month's tail arrives while this month's is created, so the honest monthly figure
is the full lifecycle cost of two builds: **2 × 11 = 22 hours against a 21.6-hour budget,
which is about 102% — over budget, not exactly at it.** The week-3 spike sits on top of that
and is absorbed by sliding build A's launch a few days, which breaks no promise (§3, point
3). Two a month at part-time is the edge of what the arithmetic supports, arguably just past
it, and not a comfortable fit.

---

## 5. Recommendation: 2 — as the internal cap now, in `config.ts` only when the blockers clear

**Two free builds a month — provisional, and not yet published.** The number is arithmetic
on assumptions with no measurement behind them, by this document's own first line. Hold it
as the planning figure and the internal cap. Publish it — that is, set `capacityPerMonth` —
only after §6's measurement gate (the median of builds 1–3) or once Tyler has committed it
to a real slot calendar he will enforce by hand, **and** in the same commit that clears the
last blocker in "Before any slot can open at all" below. Until then `capacityPerMonth` stays
`null` and the site keeps making no capacity claim.

Why 2 and not 4:

- The likely column at part-time says 1.96 (21.6 ÷ 11), which §4 rounds to 2.0. Tyler is
  part-time on this by any honest reading — LI launches this month, and Enchanted Bath,
  Family Dashboard and MagMaker Hub are live commitments.
- The asymmetry is one-sided. Publishing a number too low would cost, at most, a lead who
  joins next month's list. Publishing a number too high would cost a broken five-day promise
  on a site whose entire pitch is that it does not overpromise. Round down.
- Two is the smallest number the arithmetic supports at part-time. Pick it because it is
  deliverable, not because of how it reads. (If he ever wants 1, the FAQ string in
  `index.astro` line 695 prints "1 free builds a month" — fix the plural first.)
- Every paid client added later shrinks this number (§7). Starting at 2 leaves room to
  discover that.

**Define the unit precisely, or the number means nothing:** a build counts against the month
in which its **slot week starts**, not the month the intake arrived and not the month it
launches. Write that into the tracker on day one.

**Do not change the number mid-month.** Review it after build 3 and then quarterly.

### What happens when he hits the cap

There is no code that enforces this. The intake form stays open; nothing in the repo counts
builds. Enforcement is entirely the confirmation email, which the draft agreement already
commits to ("we confirm within one business day of intake; if capacity is full you'll know at
confirmation"). So:

- **Intake 1 and 2 of the month** → confirmation names a slot week this month.
- **Intake 3 onward** → same one-business-day reply, and it names a slot week in the next
  month. Not a "no", not silence, and never a vague "I'll get back to you". The FAQ string is
  written and will say "you go on next month's list" the moment the number is set, so the
  email has to match it. (It does not say it today: the string lives at
  `src/pages/index.astro` lines 691–699, inside the block gated on
  `FREE_BUILD.capacityPerMonth !== null`, and nothing capacity-related renders on the live
  site.)
- **The site will say**, once the number is set, exactly this and nothing more:
  "2 free builds a month. When the month is full, you go on next month's list."
  That string is already written and gated on the config value; setting the number turns it
  on and no other copy changes.
- **What must not happen:** quietly taking a third. It would break the only scarcity claim
  the site makes, and it would break the five-day draft promise for the two clients already
  in the month. If a third is genuinely worth taking, the honest move is to raise the
  published number the following month and live with it.

### Before any slot can open at all

Capacity is not the current blocker. These are, and they sit above this decision:

- **Attorney review of the free-build agreement.** It is headed DRAFT and unsignable.
- **The entity decision.**
- **A build-time host.** Not "there is nowhere compliant to put a client site" — there are
  two compliant lanes documented right now (`docs/hosting-lane-decision.md`,
  LAUNCH-CHECKLIST): Vercel Pro at ~$20/mo and Cloudflare Workers Free, and the runbook
  "supports either." What is actually missing is that neither is set up or paid for. Two
  specific gaps: the draft week has to be staged somewhere, and today that would be Tyler's
  Vercel Hobby team, which forbids commercial use (`docs/dry-run-findings.md` line 68); and
  the $29 Hosted plan cannot ride on a free Cloudflare account at all, because self-serve
  terms 2.2.1(a) bar reselling access — the sanctioned paths are a per-client account or
  Workers for Platforms at $25/month (`docs/hosting-lane-decision.md`). That second one is a
  cost sitting under a price that is already published, and §7 models Hosted at 0.1 / 0.25 /
  0.75 hours without it.
- **The business email and phone.** Neither exists yet.
- **The untested contact-form POST path** — the dry run's one open blocker
  (`docs/dry-run-findings.md` line 170); the form has never delivered a message.

`capacityPerMonth` is not an internal note. The moment it is non-null the public FAQ renders
"2 free builds a month," and a visitor reads that as two slots available this month. With the
agreement unsignable, no business email or phone, and a contact form that has never delivered
a message, true availability today is zero. Set the number in the same commit that clears the
last item on this list — not before.

---

## 6. This model is unmeasured and should be dead within three builds

Nothing above was timed. The only measured figures in the whole document are two machine
build times, and they are the ones that do not matter. Builds 1–3 exist to replace the likely
column with medians.

**Hour tracking does not exist yet.** It is an unchecked item in LAUNCH-CHECKLIST — "Track
hours on the first three free builds" — sitting alongside another unchecked item for where
intake submissions get tracked at all. Both need to exist before build 1; without the second
one, nothing counts builds against the cap either. What the tracking needs to capture, per
build:

**Dates (these test the promise):**
- Intake received → confirmation sent (must be ≤ 1 business day, every time)
- Confirmation sent → required-to-start answers complete (this is line item 2, the biggest unknown)
- Slot week start → draft sent (must be ≤ 5 business days — the only number the public sees)
- Draft sent → consolidated feedback received
- Approval → live
- GBP: which of the three paths (exists+access / exists+no access / new profile), and days to verified

**Hours, logged per line item, not as one lump.** A single "8 hours on the Ridgeline build"
number cannot fix this model. Fourteen small numbers can. The three that will move the most:
item 2 (chasing), item 8 (revision round), item 10 (launch-day handoff).

**Counts:**
- Number of intakes that did not become builds, and minutes spent replying to each
- Revision round size: how many changes, and how many arrived after the "one consolidated
  reply" line
- Bug-window touches per build and hours each

**Recompute after build 3:** replace the likely column with the median of three, keep the
high column as the max observed, and rerun §4. If the median lands above 15 hours, the
number goes to 1 until the process gets cheaper. If it lands at or below 7.2, 3 is defensible.

---

## 7. What paid work would do to the number

Free builds are the loss leader; paid work would get the hours first. The published capacity
number does not flex month to month, so it has to be low enough to survive a busy paid month.

Rough monthly load per paid client, same guess-with-a-name-on-it basis. There are no paid
clients today, so none of this is observed:

| Plan | Tyler hours/month (low / likely / high) | Note |
| --- | --- | --- |
| Hosted $29 | 0.1 / 0.25 / 0.75 | No edits included. Uptime, backups, updates, 2-business-day email support. **These hours assume a delivery mechanism that is not settled** — see §5: a free Cloudflare account cannot host it, so it carries either a per-client account or $25/month for Workers for Platforms. |
| Care Plan $150 | 0.75 / 2.25 / 5.0 | 3 edits at ~0.5 hr each, done within 2 business days; a monthly report; support replies within 1 business day. |
| Lead Capture $297 | not modelled | delivery mechanism not decided. Setup is a separate one-time cost that is not estimated anywhere yet. |
| Reputation Engine $197 | not modelled | Same. Response drafting is recurring and unmeasured. |

At part-time, one Care Plan client at 2.25 hrs/month would be about 10% of the delivery
month. **Roughly every five Care Plan clients would remove one free build from the monthly
number.** That is arithmetic from the table above, not a forecast — no attach rate is assumed
here, because there is no data to assume one from.

The compounding one is the tail. At 2 builds a month, and only if every slot fills, by the
end of month four up to 8 slots would have started and roughly 6–7 sites would be live — the
gap is because §5 counts a build in the month its slot week *starts*, while §2 puts intake to
live at ~3 weeks likely and ~9 weeks high, so month four's second build is usually not live
yet. Of those, roughly 3–4 would still be inside their 60-day bug window, plus whatever
attached to a plan. That is an assumption stacked on an assumption. There are none today.
The build hours are flat; the support hours are not.

---

## 8. The one-line change, when it is time

```ts
// src/config.ts
capacityPerMonth: 2 as number | null,
```

Setting it turns on the FAQ, and nothing else in the site changes. That is exactly why it
should not be set today: the FAQ is a public availability claim, and availability is
currently zero. Make this edit in the same commit that clears the last blocker in §5.

Everything that makes the number true is off-site anyway: the confirmation email (including
the sentence that starts the slot week, and the `intake-questions.md` edit §3 depends on),
the slot calendar, the tracker that does not exist yet, the burst rule, and the willingness
to tell the third person in a month that they are on next month's list.