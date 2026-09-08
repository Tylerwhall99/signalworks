# Money and Admin Guide

**Four jobs, four sittings.** EIN, business bank account, City of LA business
tax registration, bookkeeping. Each one below is a single session with a start
URL, a "have this in hand" list, and the mistakes that actually cost people
time. Read the order-of-operations section at the end first if you have not
done any of these yet — several of them block each other.

**Every fee, threshold and deadline here was read on the source page in
September 2026.** Government fees, bank terms and software prices change, and
bank and software terms move fastest. Each section lists its sources. Re-check
anything before you pay it. Where a number is an estimate rather than something
a source publishes, it says so.

**This is not legal or tax advice.** It is a set of directions to the right
pages. Two decisions in here belong to the attorney (entity type, the Long Hall
Financial relationship) and one belongs to a CPA (how the platform fees get
reported). Those are flagged where they come up.

---

## Before you start: the one decision that gates everything

You have not formed an entity yet. The choice is **California single-member LLC**
vs. **sole proprietor with a DBA**. `docs/pricing-proposal-care-suite.md` raises a
third possibility — running The Free Website Co. as a brand/DBA under Long Hall
Financial — which would remove the two-entity problem in section 4 entirely.
Attorney question 1 records the opposite goal (a business not tied to your
personal name or to Long Hall Financial), so it likely loses, but name it when
you ask rather than leaving it unasked. That choice determines:

- what legal name goes on the EIN application,
- which documents the bank asks for,
- what "Legal Name" and "DBA" you type into the City of LA registration,
- whether you owe California's $800 annual LLC tax.

You cannot do steps 1–4 cleanly until this is settled, because the name has to
match across all four. Question 1 in `docs/attorney-review-packet.md` already
asks the attorney which entity should be the signing party. Get that answer
first.

**Cost difference, for context (all current as of September 2026):**

| | Sole proprietor + DBA | Single-member LLC |
| --- | --- | --- |
| Formation filing | $0 | $70 (Articles of Organization, Form LLC-1) |
| Name registration | $26 LA County FBN + newspaper publication | included only if the LLC is itself registered as "The Free Website Co., LLC"; any other LLC name means you file the $26 FBN too — both agreements sign as "[LEGAL ENTITY / YOUR NAME], doing business as The Free Website Co." |
| First report | none | Statement of Information, $20, due within 90 days, then every 2 years |
| Annual state tax | none | **$800 to the Franchise Tax Board**, due the 15th day of the 4th month after you register with the Secretary of State, then every year until you cancel — owed even with zero revenue |

The $800 is the number that surprises people. The California first-year waiver
(AB 85) expired for LLCs formed on or after January 1, 2024, so a new LLC owes
it in year one.

Sources: [CA SOS business entity fee schedule](https://bpd.cdn.sos.ca.gov/pdf/be-fee-schedule-062018.pdf) ·
[FTB — Limited liability company](https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html) ·
[LA County FBN fees](https://www.lavote.gov/home/county-clerk/fictitious-business-names/fees)

---

## 1. Get your EIN from the IRS

An EIN is a nine-digit federal tax ID for the business — the business
equivalent of a Social Security number. The bank will ask for it. The City of
LA will ask for it. It is free, and the number appears on screen at the end of
the application.

**Start here:** <https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online>

**Time:** one sitting. The application cannot be saved, and the session expires
after 15 minutes of inactivity — that timeout is the only duration the IRS
publishes, not an estimate of how long the form takes.
**Cost:** $0. Always $0.

### Before you sit down

- The entity decision is made, and if it's an LLC, **the LLC is already approved
  by the California Secretary of State**. See the sequencing warning below.
- The exact legal name, spelled the way the state has it.
- Business start date, business address (no PO box for the physical address),
  and mailing address.
- Your own SSN or ITIN. The IRS calls you the "responsible party."
- A short plain description of what the business does.

### Do you even need one?

Strictly, the IRS requires an EIN if you have employees, owe employment or
excise taxes, or withhold on payments to a non-resident alien — none of which
apply to you. But the same IRS page adds that you need an EIN to operate a
partnership, LLC, or corporation. **On the LLC path it is not optional.** And
the IRS also says: *"If you don't need an EIN for federal tax purposes, you can
still request one for banking or state tax purposes."*

So: required if you go LLC, and worth getting anyway if you go sole proprietor.
Without it, a sole proprietor hands out their SSN to every bank form and vendor.
Not worth it for a free application.

### The steps

1. Open the start URL above **during the hours the tool is open**. Eastern time:
   Mon–Fri 6:00 a.m. – 1:00 a.m. the next day; Sat 6:00 a.m. – 9:00 p.m.;
   Sun 6:00 p.m. – 12:00 a.m. In Los Angeles that means it is closed roughly
   10:00 p.m. – 3:00 a.m. on weeknights, and most of Sunday daytime.
2. Confirm you meet all four conditions the page lists: domestic entity, U.S.
   principal place of business, you are the responsible party, and you have the
   responsible party's SSN or ITIN.
3. Click through to the application and pick your entity type — **Limited
   Liability Company** or **Sole Proprietor**. This is the screen where the
   entity decision has to already be made.
4. Enter the responsible party (you) and the legal name and address.
5. Answer the questions about employees. You have none; say so.
6. Describe the business activity. Plain words: web design, website hosting, and
   marketing software services for small businesses. Do not shorten it to "web
   design and hosting" — `src/config.ts` also sells the Lead Capture System
   ($297/mo) and the Reputation Engine ($197/mo), which are neither, and the
   City's Multimedia-vs-Professions classification argument in section 3 rests
   on the description you write here.
7. Choose to receive the confirmation letter **online**. Download the PDF (Form
   CP 575) immediately and save it somewhere you will find it in two years. The
   bank will ask for it.

### The three mistakes people actually make

**Paying a middleman.** Search "apply for EIN" and the top results are often
paid services that charge to fill in a free form. The IRS says it flatly:
*"Beware of websites that charge for an EIN. You never have to pay a fee for an
EIN."* Only apply from an address that starts with `irs.gov`. If a page asks for
a credit card, you are on the wrong site.

**Applying before the entity exists.** The IRS is explicit: *"If you are creating
a corporation or LLC, form your entity through the secretary of state before you
apply for an EIN,"* and *"If you don't form your entity with the state first,
your EIN application may be delayed."* If you get an EIN under a name the state
has not approved, the name on your IRS record will not match your Articles of
Organization, and the bank — which cross-checks them — will bounce you. (The IRS
will not cancel an EIN, only deactivate it: *"If you no longer need your EIN, we
can't cancel it, but we can deactivate it."* So an EIN issued under the wrong
name is a mess you keep.)

**Getting timed out and locking yourself out for the day.** The session *"expires
after 15 minutes of inactivity, and you'll need to start over."* And you may
apply for *"only 1 EIN per day, whether online or by phone, mail or fax."* So:
gather everything first, close your email, do it in one pass.

One thing that is *not* a problem: renaming the business later. *"You don't need
a new EIN to change your business name, address or responsible party."*

Sources: [IRS — Apply for an EIN online](https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online) ·
[IRS — Get an EIN](https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number) ·
[IRS — Employer identification number](https://www.irs.gov/businesses/employer-identification-number)

---

## 2. Open a business bank account

One account, used for every dollar in and every dollar out of the business.
This is the most valuable hour in this document, because everything in
section 4 runs off this account's transaction feed.

**Time:** budget an hour. None of these banks publish an application time or a
funds-availability window, so treat both as unknown until you ask the bank you
pick.
**Cost:** $0 if you pick a no-fee account. Add $26 for the FBN — plus $10.75 if
you file online and the newspaper's own publication fee — if you need a DBA
first.

### What the bank will ask for

The SBA's short list is: *"Employer Identification Number (EIN) (or a Social
Security number, if you're a sole proprietorship),"* formation documents,
ownership agreements, and a business license — noting *"Some banks may ask for
more."* In practice:

**Sole proprietor with a DBA:**
- Your driver's license or passport. The SBA's list does not say how many forms
  of ID; check your chosen bank's own requirement before you go in.
- Your SSN, and your EIN if you got one.
- **The stamped, filed copy of the Fictitious Business Name Statement.** This is
  the piece people forget. Without it the bank will only open the account in
  your personal legal name, and no one could write a check to "The Free
  Website Co."

**Single-member LLC:**
- Government-issued photo ID — again, ask the bank how many forms it wants.
- EIN confirmation letter (CP 575).
- Filed Articles of Organization stamped by the California Secretary of State.
- Operating agreement, if the bank asks — some do even for a single member.
- A DBA filing on top of that **only if** the LLC's registered name is different
  from the name you trade under.

### The DBA detour (sole proprietor path only)

If you go sole proprietor, "The Free Website Co." is a fictitious business name
because it does not contain your surname, so LA County requires a filing.

- File with the LA County Registrar-Recorder/County Clerk:
  <https://www.lavote.gov/home/county-clerk/fictitious-business-names>
- **$26** first-time filing for one business name and one registrant; **$5** for
  each additional name or registrant; **$5 per name** for a search; **$10.75**
  online identity and card processing fee if you file online.
- Since January 1, 2015 a **notarized Affidavit of Identity** must accompany the
  statement.
- Then publish it in an adjudicated LA County newspaper, once a week for four
  consecutive weeks. The County posts each paper's fee on its list. On the
  current list the 136 fees run from $29 to $575, median $75, with about
  two-thirds between $50 and $100 — so pick off the list rather than budgeting a
  guess.
- **Watch the clock, and note the county's own pages disagree:** the General Info
  page says *"Publication must begin within 30 days of filing,"* while the
  Publication page says *"within 45 days of filing."* Use 30. Better: line up
  the newspaper the same week you file.
- The statement **expires five years from the date it is filed.** Put the renewal
  in a calendar now, five years out.

### What to look for in an account

You are a one-person service business with a handful of monthly software
subscriptions, and the plans you sell are built to bill monthly once there are
clients to bill. You do not need branches, cash deposits, or a relationship
manager. You need four things:

1. **No monthly fee and no minimum balance.** A $15/month fee is $180 a year for
   nothing.
2. **Free ACH transfers in and out.** Vendor bills move by ACH now; client
   subscriptions will move the same way once clients exist.
3. **A direct, native connection to your bookkeeping software** — not a CSV
   export you have to babysit.
4. **Sub-accounts or a second account**, so you can park the tax set-aside
   somewhere you will not spend it.

Three that fit, all current as of September 2026:

| | Monthly fee | Minimum balance | Bookkeeping sync | Note |
| --- | --- | --- | --- | --- |
| **Relay** (Starter) | $0 | none | native QuickBooks Online and Xero | up to 20 checking accounts under one login — good for the tax set-aside |
| **Bluevine** (Standard) | $0 | none, no minimum opening deposit | yes | pays interest if you hit a monthly activity minimum |
| **Chase** Business Complete Banking | $15 | waived at a $2,000 minimum daily ending balance | yes | branches; one day below $2,000 and the fee lands |

Relay is the cleanest fit for how you will actually work: free, multiple
accounts, and a native QuickBooks connection. Confirm the current terms on
Relay's own page before you open — fintech pricing and account limits move.

### The two mistakes people actually make

**Mixing personal and business money.** This is the one. It is not a tidiness
preference — it is what makes the LLC worth having. The SBA's stated reason for
a business account is *"limited personal liability protection by keeping your
business funds separate from your personal funds."* An LLC's protection rests on
the LLC being a genuinely separate thing. When the owner pays personal bills out
of the business account and business bills out of the personal one, a creditor
or a plaintiff argues the separation was fiction and asks a court to hold the
owner personally liable anyway. (The legal term is "piercing the corporate
veil." Ask the attorney what California specifically looks at — it belongs on
the same list as the other entity questions.) A sole proprietor has no veil to
pierce, but still gets the bookkeeping benefit: a clean feed means section 4
takes ten minutes a month instead of a weekend in April.

The practical rule, from day one: **never pay a personal expense from the
business account, and never pay a business expense from the personal one.** If
you need money out, transfer it to yourself as an owner's draw and label it. If
you need money in, transfer it as an owner's contribution and label it. Two
transfers a month is fine. Fifty mixed transactions is the problem.

**Opening the account before the name is final.** The account name has to match
the EIN, which has to match the state record, which has to match what you put on
the City registration and the client agreements. If any of it is provisional,
wait. Renaming an account later means re-doing signature cards and re-pointing
every subscription and payout.

Sources: [SBA — Open a business bank account](https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account) ·
[LA County FBN fees](https://www.lavote.gov/home/county-clerk/fictitious-business-names/fees) ·
[LA County FBN general info](https://www.lavote.gov/home/county-clerk/fictitious-business-names/general-info) ·
[LA County FBN publication](https://www.lavote.gov/home/county-clerk/fictitious-business-names/publication) ·
[LA County FBN renewals](https://www.lavote.gov/home/county-clerk/fictitious-business-names/renewals) ·
[Relay review, NerdWallet](https://www.nerdwallet.com/business/banking/reviews/relay-business-banking) ·
[Bluevine plans and pricing](https://www.bluevine.com/business-checking/plans-and-pricing) ·
[Chase Business Complete Banking](https://www.chase.com/business/banking/checking/business-complete-banking)

---

## 3. Register with the City of Los Angeles (BTRC)

The Business Tax Registration Certificate is the City of LA's business
registration. Working from home does not exempt you. The Office of
Finance's wording: *"All individuals or entities conducting business activities
within the City of Los Angeles are required to apply for and obtain a Business
Tax Registration Certificate."* Web design is not on the City's list of business
types exempt from registration.

**Start here:** <https://finance.lacity.gov/tax-education/new-business-registration/how-register-btrc>
**Register online at:** <https://latax.lacity.org/businessregapp/eappreg_criteria>

**Time:** budget half an hour; the City does not publish a figure, so that is an
estimate. You get a temporary certificate or registration number on the spot;
*"A permanent Business Tax Registration Certificate will be mailed within 4 to 6
weeks."*
**Cost:** Registering costs nothing. Note that *"Certain business classifications
require a minimum payment upon registration"* — the online form will tell you if
yours is one. Your first year's tax is billed the following February (see "back
tax" below).

### Before you sit down

The City's own checklist:
- **SSN** if you are a sole proprietorship, **EIN** if you are an LLC,
  partnership, corporation, or trust. So the EIN comes first.
- A description of the business activity.
- Legal business name **and** the DBA, if you have one. The City's own example:
  the legal name is McDonald's Corporation, the DBA is McDonald's.
- Business start date (month/day/year) — the date you started doing business in
  the City.
- Business address and mailing address.
- Contact name, phone, email.

### The steps

1. Go to the online registration link above and work through the eligibility
   screens.
2. Enter the legal name exactly as it appears on the state record or your FBN
   filing, then the DBA separately.
3. Describe the activity. Read the classification note below before you write
   this.
4. Answer the police/fire/tobacco permit questions — the application screens
   these for you and you will not need any of them.
5. Submit. Save the temporary certificate number.
6. Watch for the permanent certificate in 4–6 weeks. It has your account number,
   which you will need every February.

### Your likely classification

The City's rate page describes **Multimedia Businesses** at **$1.01 per $1,000 of
gross receipts** and includes businesses that *"Develop online and Internet
services, including the design of WEB sites, for clients."* That is a literal
description of this business. The alternative bucket, **Professions and
Occupations**, is **$4.25 per $1,000** — four times as much.

Do not guess the fund/class code yourself. Describe the activity accurately on
the application and let Finance assign it; if the assigned class comes back as
Professions and Occupations, call and point at the Multimedia language on the
rate page. At your revenue this is academic — the exemption below zeroes the tax
either way — but it starts mattering the year you cross $100,000.

### The small business exemption, and the trap in it

*"The City of Los Angeles provides a small business exemption to businesses that
have worldwide gross receipts that did not exceed $100,000"* for the prior
calendar year. No tax is due if you qualify.

Three things about it that catch people:

1. **It is only for registered businesses.** *"the small business exemption is
   provided only for registered businesses."* Not registering does not save you
   money; it forfeits the exemption and exposes you to back taxes, assessed back
   over a multi-year lookback period. Ask Finance to confirm the current
   lookback in writing rather than relying on a number from this page.
2. **You have to file the renewal to get it, every year, even at zero revenue.**
   *"Taxpayers who do not file a renewal timely under LAMC Section 21.29 are
   considered delinquent and will not qualify for the small business
   exemption."* The exemption is not automatic and it is not permanent — it is
   granted one year at a time, in exchange for filing on time.
3. **"Worldwide" means worldwide.** It is *"taxable and nontaxable gross receipts
   from within and out of the City of Los Angeles (worldwide)"* — not just LA
   revenue. The City's own example: a business with $107,000 worldwide but only
   $45,000 taxable in LA does **not** qualify.

### The renewal deadline

*"Business Taxes are due January 1st of each year and are delinquent if not paid
on or before the last day of February of each year."* The City's renewal page
states the date as **February 28 (February 29 in a leap year)**. For the 2026
filing season the City set **March 2, 2026**, because February 28, 2026 was a
Saturday — so a weekend appears to roll the deadline to the next business day,
but the City does not publish that as a standing rule. Do not plan around a
rollover; check the posted date each year.

**Your first renewal is the one to calendar now.** If you register during 2026,
you file your first renewal by the end of February 2027, reporting 2026
worldwide gross receipts. This is also when the "back tax" lands: *"The first
year of new business activity in the City of Los Angeles is not exempt from
taxation. The first year of taxes is paid in the second year when you renew your
BTRC."* Under $100,000 worldwide and filed on time, the exemption still zeroes it
— but only if you file.

Set a calendar reminder for **February 1** every year, not February 25. The
City's own renewal page warns that *"appointments and walk-ins at the public
counters may be unavailable, and calls and emails may experience extended
response delays"* in late February.

### The Creative Artist Exemption — and why it almost certainly does not apply

There is a second exemption, capped at **$300,000** of gross receipts from
*"creative activities."* It sounds like it might fit a design business. Read
carefully and it does not.

The City's renewal instructions list who is eligible: *"actor/announcers; art
directors, costume designers, production designers, scenery/set designers;
choreographers; cinematographers; musical conductors; directors; motion picture
editors; sound dubbing, special effects, or titling artists; creative writing;
music/lyrics arrangers, composers, or writers, authors; cartoon artists;
lithographers/painters/sculptors of visual fine arts; drawing, graphic,
illustration or sketch artists; and photographers (if primarily artistic and not
journalistic or commercial)."*

"Drawing, graphic, illustration or sketch artists" is the only hook. But the
exemption applies *"only to individual 'creative artists' ... when performing
'creative activities' for 'entertainment or aesthetic purposes.'"* The
surrounding list is entertainment-industry work, and even the photographer entry
is written to exclude *commercial* photography. A marketing website of up to
five pages, built for an HVAC contractor, is commercial and functional work, not
entertainment or aesthetic work. Assume the answer is no.

Two more reasons not to spend time on it:

- **You cannot stack the two exemptions.** *"Can I qualify for both the small
  business and creative artist exemption at the same time? No."* Below $100,000
  worldwide, the small business exemption already zeroes your tax, so the
  creative artist question is moot. It would only ever matter above $100,000 —
  and above $100,000 you are arguing that website work is entertainment, in
  front of an auditor, retroactively.
- **It is not available to new registrants.** *"The creative activities exemption
  is only available to registered businesses and not new businesses."*

**If you want to ask anyway, ask in writing.** Email
**Finance.CustomerService@lacity.org** with your account number and this:

> I am registering a new one-person web design, website hosting, and
> marketing software business in the City of Los Angeles. The work will be
> designing and building marketing websites for home-services companies
> (HVAC, plumbing, electrical) and then hosting and supporting them. I have
> no clients yet. I want to confirm my correct fund/class —
> the Multimedia description on your rate page appears to
> cover "the design of WEB sites for clients" — and to confirm whether this work
> falls outside the Creative Artist Exemption under LAMC 21.29(b), since it is
> commercial rather than for entertainment or aesthetic purposes. Please reply in
> writing.

A written answer from Finance is worth having in the file either way. Phone is
**(844) 663-4411**, Monday–Thursday 9:00 a.m.–3:00 p.m., Friday 9:00 a.m.–2:00
p.m. You can also book a virtual counter appointment from the Contact Us page.

### One more thing to check, separately

Working from home in a residential zone is governed by the City's home
occupation rules (LAMC 12.05 A.16), which are zoning, not tax. Home occupations
are permitted in residential zones subject to conditions about noise, signage,
traffic and customer visits. A one-person business with no client visits and no
signage is the easy case, but confirm with City Planning rather than taking this
paragraph as the answer.

Sources: [How to register for a BTRC](https://finance.lacity.gov/tax-education/new-business-registration/how-register-btrc) ·
[Business types — no registration required](https://finance.lacity.gov/tax-education/new-business-registration/business-types-no-registration-required) ·
[Small Business Exemption FAQ](https://finance.lacity.gov/small-business-exemption-faq) ·
[Renewal deadlines, forms and online services](https://finance.lacity.gov/tax-education/business-tax-registration-renewal/renewal-deadlines-forms-and-online-services) ·
[Business Tax Renewal Instructions](https://finance.lacity.gov/business-tax-renewal-instructions) ·
[Know Your Rates](https://finance.lacity.gov/know-your-rates) ·
[Tax Incentives and Exemptions](https://finance.lacity.gov/tax-incentives-and-exemptions) ·
[Entertainment Creative Talent FAQ](https://finance.lacity.gov/entertainment-creative-talent-faq) ·
[Office of Finance — Contact Us](https://finance.lacity.gov/contact-us)

---

## 4. Bookkeeping from dollar zero

### The recommendation: QuickBooks Online Simple Start

**$19/month for the first three months (50% off), then $38/month** — *or* a
30-day free trial. Intuit's pricing page presents these as two separate offers
you pick between at signup, not as a trial followed by a discount. Confirm which
one you are getting before you subscribe, and do not budget for both.
<https://quickbooks.intuit.com/pricing/>

Three reasons, in order of weight:

1. **The CPA you hire will almost certainly use it.** You have an unusual
   structure — a Stripe Connect platform that may sit inside a different legal
   entity (see below) — and that is the kind of thing an accountant has to be
   inside. You have not engaged one yet. QuickBooks is the safe default for
   whoever you hire — it is what they open without asking, where Wave means
   exporting files and explaining them — but ask which tool they want before you
   subscribe, because that answer beats this recommendation.
2. **Real double-entry books, not a Schedule C worksheet.** If you go LLC, the
   CPA needs to see owner's draws, owner's contributions, and a balance sheet.
   That is what makes the "kept separate" story provable.
3. **The cheaper options cost you elsewhere.** Solopreneur ($20) and Wave Pro
   ($19) are genuinely cheaper in dollars; the case for Simple Start is the
   chart of accounts and the CPA handoff, not price. See below.

### What I compared

| | Price | Bank auto-import | Notes |
| --- | --- | --- | --- |
| **QuickBooks Online Simple Start** | $19/mo intro (50% off, 3 months), then **$38/mo** | yes | recommended |
| QuickBooks Solopreneur | $10/mo intro (50% off, 3 months), then **$20/mo** | yes | genuinely cheaper, but a Schedule C worksheet instead of real books |
| Wave Starter | **$0** | **no** | manual entry only |
| Wave Pro | **$19/mo** or **$190/year** | yes | genuinely good, but off the CPA's beaten path |

**Why not Wave's free tier.** Auto-import of bank transactions is Pro-only. The
free plan means you type every transaction by hand — which is the exact chore
you are buying software to avoid. Free Wave costs you hours, not dollars.

**Why not Wave Pro.** It is a fine product at $19/month and it is the right pick
for someone whose books nobody else will touch. Yours are not that. The $19/month
delta versus QuickBooks buys a CPA — whoever you end up hiring — who does not
have to learn a second tool to untangle the Long Hall Financial question.

**Why not QuickBooks Solopreneur.** It is still the cheap option — $20/month
against Simple Start's $38. What the extra $18 buys is a real chart of accounts
and a balance sheet instead of a Schedule C worksheet, which is what the Long
Hall Financial question will need. There is also a migration cost:
moving up later is one-way and lossy. Intuit's own documentation says you cannot
downgrade back, that bank transactions imported into Solopreneur *"won't be
visible on the Bank transactions page of QuickBooks Online"* after the upgrade,
and that duplicates can appear. Starting on Simple Start avoids a migration you
would otherwise do in year two.

### What to track from day one

Set this up the week the bank account opens, before there is anything in it.
An empty ledger takes twenty minutes to configure. A twelve-month backlog takes
a weekend.

1. **Connect the bank account and the business card to the feed.** Both, on day
   one. This is the whole point.
2. **Keep the chart of accounts small.** Ten or twelve expense categories, not
   sixty. Something like: hosting and domains, software subscriptions,
   GoHighLevel, contractors, professional fees (attorney, CPA), insurance,
   marketing, home office, phone and internet, bank and payment fees, mileage,
   other.
3. **Separate income by line, matching `src/config.ts`.** Hosted $29, Care Plan
   $150, Lead Capture $297, Reputation Engine $197 — and the Reputation Engine
   at $97 when it is bundled with Lead Capture, which is its own income line —
   plus add-ons (extra edit $25 or $100 for a 5-pack, new page $150, campaign or
   landing page $250, email deliverability setup $100 one-time). You will want to
   know which line actually carries the business — and separated income is what
   makes that a report instead of an afternoon.
4. **Tag every pass-through cost to the client it belongs to.** Domain renewals
   and hosting bought on a client's behalf are not your margin. Untangling them
   later is painful, and it is the obvious thing to argue about on an invoice.
   There is no track record here yet — this is a precaution, not a lesson
   learned.
5. **Label owner's draw and owner's contribution as their own categories.** Never
   as income or expense. Every transfer between the business account and your
   personal account gets one of these two labels, the same day.
6. **Photograph receipts.** Both apps do this from the phone. Do it at the point
   of purchase or it does not happen.
7. **Reconcile once a month.** Pick a day — first business day of the month — and
   spend fifteen minutes matching the ledger to the bank statement. This is the
   habit that keeps tax season from becoming a project.
8. **Move a tax set-aside on every deposit.** Self-employment tax alone is
   **15.3%** (12.4% Social Security + 2.9% Medicare), on top of income tax, and
   you file Schedule SE once net earnings from self-employment are **$400 or
   more**. That is why Relay's sub-accounts are useful — a second account named
   "Taxes" that you sweep into and never spend from.
9. **Calendar the quarterly estimated payments.** You generally must pay
   estimated tax if you expect to owe **$1,000 or more** when the return is
   filed. Federal due dates for a calendar-year filer: **April 15, June 15,
   September 15, and January 15** of the following year. California's schedule
   differs — ask the CPA.

### The wrinkle the CPA must be told about: Long Hall Financial

This is the part nobody would guess from the books alone, so it needs to be
written down and handed over.

**What actually happens.** When a client takes payments online, the money runs
through *the client's own* Stripe account, connected as a Standard account to a
Stripe Connect platform. The Free Website Co. collects a disclosed per-transaction
application fee. But per `docs/pricing-proposal-care-suite.md`, that Connect
platform is **already set up under Long Hall Financial**, your holding company —
not under The Free Website Co.

**A wording problem rides along with this.** The client-facing text does not
describe the arrangement above. `docs/care-plan-agreement.md`, `src/pages/terms.astro`,
and Attachment B of the attorney packet all currently call Long Hall Financial
"The Free Website Co.'s parent company," which is a different claim from an
operating company that merely uses another entity's platform at arm's length.
Attorney question 3 exists to settle the wording. Whatever comes back, the
redline has to land in all three places — do not let it be forgotten once the
bookkeeping answer arrives.

**Why that matters for bookkeeping.** The application fees are revenue earned by
the work of The Free Website Co., but they settle into a Stripe account that
belongs to a different legal entity. So:

- If The Free Website Co. ends up as its own entity, that revenue lands in
  **Long Hall Financial's** books, not in the books you are about to set up. If
  it ends up as a DBA under Long Hall Financial, there is only one set of books
  and the split never arises. The entity decision at the top of this document is
  what settles it.
- **Who gets which tax form is a question for the CPA, not an assumption.**
  Under the Stripe Connect Standard structure described in
  `docs/pricing-proposal-care-suite.md`, each client owns their own Stripe
  account and their own 1099-K; funds never touch your entity. What lands on
  your side is platform fee income, which a 1099-K threshold does not govern.
  Bring the structure to the CPA and let them tell you which entity reports
  what — this is exactly the kind of thing that is cheap to settle now and
  expensive to unwind.
- Meanwhile every cost of earning that revenue — your time, the site, the
  support — sits in The Free Website Co. Revenue in one entity, expenses in the
  other, with nothing on paper connecting them, is exactly the pattern that
  makes an accountant stop and ask questions.
- Stripe's own processing fee (2.9% + 30¢ on domestic cards) passes through to
  the client unchanged and is not your revenue at all. Do not book it as either.

**What to hand the CPA, in writing, at the first meeting:**

1. A one-paragraph description of the arrangement: client owns the Stripe
   account; Long Hall Financial operates the Connect platform; The Free Website
   Co. does the work and the platform fee is its compensation.
2. The Stripe platform account setup, and — once any fees have actually been
   collected — the statements showing them. As of today there are none.
3. The answer to attorney question 3 in `docs/attorney-review-packet.md` — whether
   a written intercompany or platform-services agreement between Long Hall
   Financial and The Free Website Co. is needed.
4. The specific question: **should the platform fees be recorded as revenue of
   Long Hall Financial and then paid across to The Free Website Co. under that
   agreement, or booked directly to The Free Website Co. as agent?** Whatever the
   answer, it needs to be the same answer in both sets of books, from the first
   transaction.

Do not start collecting platform fees before that question is answered. Fixing
the treatment retroactively across two entities is far more expensive than
waiting a week.

Sources: [QuickBooks Online pricing](https://quickbooks.intuit.com/pricing/) ·
[QuickBooks Solopreneur](https://quickbooks.intuit.com/solopreneur/) ·
[Intuit — changes when you upgrade from Solopreneur](https://quickbooks.intuit.com/learn-support/en-us/help-article/mobile-apps/learn-changes-upgrade-quickbooks-solopreneur/L3MAUUaNM_US_en_US) ·
[Wave pricing](https://www.waveapps.com/pricing) ·
[IRS — Estimated taxes](https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes) ·
[IRS — Estimated tax due dates](https://www.irs.gov/faqs/estimated-tax/individuals/individuals-2) ·
[IRS — Self-employment tax](https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes) ·
[IRS — 1099-K threshold FAQs under OBBB](https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000) ·
[Stripe pricing](https://stripe.com/pricing)

---

## Do these in this order

Each step needs something the step above produces. Skipping ahead is what
creates the re-do.

```
  0.  DECIDE: LLC or sole proprietor + DBA          ← attorney; blocks everything
      │
      ├── LLC path ──────────────────────────┐      ├── Sole prop path ──────────┐
      │                                      │      │                            │
  1a. File Articles of Organization          │  1b. File FBN at LA County        │
      CA SOS bizfile · $70                   │      $26 (+$10.75 online)         │
      wait for approval                      │      → publish 4 weeks, start     │
      │                                      │        within 30 days of filing   │
      └──────────────────┬───────────────────┘      └────────────┬───────────────┘
                         │                                       │
                         └───────────────┬───────────────────────┘
                                         ▼
  2.  GET EIN  ·  irs.gov  ·  free  ·  one sitting, cannot be saved
      needs: approved legal name (LLC) or your name + filed DBA
      save the CP 575 PDF
                                         │
                                         ▼
  3.  OPEN BANK ACCOUNT  ·  budget an hour  ·  $0
      needs: EIN letter + formation docs or stamped FBN + photo ID
      recommended: Relay Starter (free, sub-accounts, QuickBooks sync)
      open a second sub-account named "Taxes" the same day
                                         │
                    ┌────────────────────┴────────────────────┐
                    ▼                                         ▼
  4.  REGISTER BTRC                            5.  SET UP BOOKKEEPING
      latax.lacity.org · ~30 min                   QuickBooks Simple Start
      $0 to register — but some                    needs: the bank account,
      classifications require a                    to connect the feed
      minimum payment at registration              $19/mo → $38/mo after 3,
      needs: EIN (or SSN), legal name,             or a 30-day trial — not both
      DBA, start date, address
      temporary cert immediately
      permanent mailed in 4–6 weeks
```

**Then, on the calendar — set every reminder that applies to your path, in one
sitting:**

| When | What |
| --- | --- |
| LLC only: within 90 days of SOS approval | Statement of Information, $20, bizfile |
| LLC only: 15th day of the 4th month after SOS registration | **$800** FTB annual tax (Form 3522) — owed even at zero revenue |
| **February 1, every year** | Start the LA business tax renewal. The City posts the date as February 28 (February 29 in a leap year) — check what it posts that year; late = no small business exemption |
| Apr 15 · Jun 15 · Sep 15 · Jan 15 | Federal quarterly estimated tax, if you expect to owe $1,000+ |
| Sole prop only: 5 years from the FBN filing date | Renew the Fictitious Business Name Statement |

**Two things that must happen before you take a dollar of platform fees:**

- The attorney answers who the signing entity is and what the client-facing
  disclosure should say about Long Hall Financial (`docs/attorney-review-packet.md`,
  questions 1 and 3).
- The CPA answers which entity books the platform fee revenue.

Most of what is above can be redone if you get it wrong. Two things above
cannot: an EIN issued under the wrong name (the IRS deactivates, it never
cancels) and a published FBN. That is the whole reason the order matters. The
two questions above are the expensive ones to fix after the fact.
