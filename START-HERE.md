# Your list

Everything that could be done without you is done. The site is live at
**https://freewebsiteco.com** and serving publicly.

Five things are yours. The first three take about 25 minutes total and are
the only ones that stand between the site being live and the site being
able to take a lead.

Run `npm run status` any time to see where things stand.

---

## 1. Business email — 10 minutes, free

**Zoho Mail** (free tier, zoho.com/mail) or **Google Workspace** (~$7/mo).
Suggested address: `hello@freewebsiteco.com`.

Zoho will give you a few DNS records to add at GoDaddy. Send them to me and
I'll tell you exactly what to paste, or paste them yourself alongside the
two records already there — they don't conflict.

**Why this is first:** the form key, the Google Business Profile, and every
reply to a lead all hang off it.

## 2. Web3Forms key — 60 seconds, free

Go to **web3forms.com**, type the email from step 1, and they email you an
access key. That's the whole thing. No account, no password, no card.

**Send me the key.** Both intake forms go live and I test them end to end.

## 3. Phone number — 10 minutes, free

**Google Voice** (voice.google.com) is free and fine. OpenPhone if you want
texting and voicemail polish later.

Send me the number. Click-to-call appears in the header, the sticky mobile
bar, and the footer automatically.

---

## 4. Hosting — one decision, I do the rest

Vercel's terms restrict their free plan to non-commercial personal use, and
this site is commercial. Two ways out:

| | Cost | What you do |
| --- | --- | --- |
| **Cloudflare Workers** (recommended) | **$0/year** | Make a free account, change two nameservers at GoDaddy. ~20 min. |
| **Vercel Pro** | $240/year | Nothing. Add a card. |

The catch with Cloudflare: your DNS moves there, so future email records go
in Cloudflare instead of GoDaddy. Not a problem, just a place to remember.

Full comparison with citations: `docs/hosting-lane-decision.md`.
**Say which one and I execute it.**

## 5. Attorney — 5 minutes to send

`docs/attorney-review-packet.pdf` is ready to email. It has a four-line
summary of the business, both one-page agreements attached, and 15 numbered
questions. Tell them one-line answers are fine.

**This blocks your first client, not this site.** The agreements currently
say "DRAFT — do not sign clients until reviewed," so nobody can sign one.

---

## Not urgent, whenever you get to it

- **Capacity number.** The site makes no claim while this is empty, which is
  the honest default. Don't set it from build speed — a full site took 11
  minutes of machine time in the dry run. Set it from how many client
  conversations you can hold at once.
- **Google Business Profile.** `docs/gbp-setup-sheet.md` is paste-ready.
  Needs the email and phone first.
- **Social handles.** `@freewebsiteco` is taken on Instagram, free
  everywhere else. Grab them in one sitting: `docs/marketing/handle-availability.md`.
- **Analytics** (Plausible ~$9/mo or GA4 free) and **Search Console** — both
  are one value each, already wired.
- **Insurance quotes.** `docs/insurance-quote-cheatsheet.md` has every form
  field pre-answered. Roughly $40–140/month for both policies.
- **Parent brand name.** Needed before the first paid upsell, around early
  October. The footer byline slot is built and hidden until then.

---

## What happens when you send me items 1–3

One message with the email, phone, and key. Then, without you:

1. Both intake forms go live and get submitted end to end, twice.
2. Click-to-call appears everywhere, using a dial-safe number format.
3. Contact details appear on the contact page, in the footer, and in the
   structured data search engines read.
4. The site redeploys and I verify every page on a phone-width viewport.

The command behind it is `npm run go-live -- --email=… --phone=… --key=…`
if you ever want to do it yourself. It validates the values, rebuilds, and
refuses to finish if anything didn't land in the built HTML.

---

## Where things are

| What | Where |
| --- | --- |
| The site | https://freewebsiteco.com |
| Readiness report | `npm run status` |
| Your full checklist | `docs/LAUNCH-CHECKLIST.md` |
| Client delivery process | `docs/client-handoff-runbook.md` |
| Intake questions | `docs/intake-questions.md` |
| Client site starter | `~/client-sites/_starter` |
| Worked example client site | https://ridgelinehvac-demo.vercel.app |
| Prospect list (14 verified) | `docs/marketing/prospect-list.md` |
