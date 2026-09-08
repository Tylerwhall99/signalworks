# "Why free" post — platform variants

> Paste-and-go versions of `docs/marketing/why-free-post.md`. Same argument,
> same voice — only length and shape change.
>
> **HOLD BEFORE POSTING — the intake can't take a submission yet.** `CONTACT.formEndpoint`
> and `CONTACT.accessKey` are both empty in `src/config.ts`, so `src/pages/index.astro`
> renders both wizards with no form action and the notice "Intake opens in the next few
> days — we're moving onto the new domain." Every variant here routes to that intake, so
> every call to action is currently false. Set the endpoint and key, land a real test
> submission, then post. If something has to go out before then, cut the intake line and
> use: "The site's up at https://freewebsiteco.com — the intake opens in the next few days.
> Comment or DM me and I'll send you the link the day it does."
>
> **Rules that ride along, every version:**
> - No invented proof. No testimonials, no client count, no logos, no years in business. There are zero clients, so nothing may be written in a tense that implies otherwise — "plenty won't", never "plenty never do".
> - No outcome promises. Never rankings, calls, leads, traffic, or revenue. The only guarantee is the price.
> - No capacity number. `FREE_BUILD.capacityPerMonth` is still `null` in `src/config.ts`, so nothing here says "X slots this month." Don't add one until it's a number you'll enforce. Same reason nothing says "the first builds" — that implies an opening batch that doesn't exist.
> - Ownership stated the way the agreement states it: the **domain** is registered by the client, in their own registrar account, from day one. **Code and hosting** move into accounts in their name **at launch** (or stay with us on a care plan). Never "your files, your accounts" on day one.
> - Scope: **up to five pages that earn their place**, plus a privacy policy page that doesn't count toward the five. Never "the pages your business needs".
> - Timeline always carries its qualifier: first working draft within five business days **of a confirmed slot**, and the slot is confirmed within one business day of intake.
> - Wherever the build is called free, the hosting cost goes with it: roughly $0-20/month self-hosted, or from $29/month on a care plan.
> - There **is** a signed one-page build agreement before the first commit. What's true is no monthly contract and no minimum term — never "no contract".
> - Banned words checked: elevate, leverage, digital landscape, solutions, transform, unlock, empower, cutting-edge, seamless, game-changing — none appear.
> - `[Brackets]` mark things needing Tyler's contact details or a name. Contact email and phone don't exist yet; either fill them or delete the bracketed line before posting.
> - Live link in every version: https://freewebsiteco.com

---

## 1. LinkedIn

**1,753 characters. First two lines carry the "see more" click. Three hashtags, no more.**

```
I build websites for home services businesses, and I don't charge for the build.

Not "free trial" free. Not "free until you read the contract" free.

The domain is yours from day one — you register it in your own account, and it stays there. At launch the code and hosting move into accounts in your name. If you never spend a dollar with me, you keep it anyway.

Here's the honest math. AI-assisted development means a build that would have taken me weeks takes days. The paid part is the ongoing work — hosting, edits, the month-after-month stuff an owner can hand off after launch. I'm betting enough will want that to make the free build pay for itself. That's my risk, not yours. It's an audition, not a trap.

What you get: up to five pages that earn their place, plus a privacy policy page that doesn't count toward the five, written from a short intake (about three minutes if you're in a hurry, 10-15 if you want draft one to land close), built mobile-first with click-to-call where thumbs go. One revision round. If something I built breaks, I fix it free for 60 days — a bug I caused is never your bill.

The build is free; hosting isn't — roughly $0-20/month on your own, or from $29/month if I handle it.

First working draft within five business days of a confirmed slot — I confirm the slot within one business day of your intake. No sales call. You decide with a real draft in front of you.

Terms are on the site in plain English, one page, and the agreement you sign before I start says the same things.

https://freewebsiteco.com

HVAC, plumbing, electrical, roofing and landscaping first, but every trade is welcome. Questions? DM me [or add your business email/phone here once they exist].

#HomeServices #SmallBusiness #LosAngeles
```

**Notes:** LinkedIn cuts the preview at roughly 200-210 characters on desktop and about 140 on mobile. The first two lines run 148 characters, so they clear the desktop cut but line two loses its tail on mobile — the first line (80 characters) is the one that has to carry it. Don't add a fourth hashtag. An outbound link in the post body is widely reported to cost reach; the workaround is to post the text first, let it run an hour or two, then edit the link in. (It is not a formatting problem — LinkedIn posts have no rich-text formatting to strip.)

---

## 2. Google Business Profile post

**1,483 characters, under the 1,500 limit. Button: Learn more → https://freewebsiteco.com**

```
Free websites for home services businesses in Los Angeles.

I build the site and the build costs nothing. You register the domain in your own account on day one. At launch the code and hosting go into accounts you own. If you never spend a dollar with me, you keep all of it.

Why it's free: AI-assisted development made the build fast, so the build isn't where my money comes from. The paid part is the ongoing work — hosting, edits, support — which I expect some owners will want handled after launch and plenty won't. The site is yours either way.

What's included: up to five pages that earn their place, copy written from a short intake (about 3 minutes quick, 10-15 minutes detailed), mobile-first layout, click-to-call, a contact form that reaches a real inbox, basic on-page SEO hygiene, and a Google Business Profile connection. One revision round. Bug fixes free for 60 days — if I broke it, I fix it, and it never uses your revision.

Timeline: first working draft within five business days of a confirmed slot — I confirm the slot within one business day of your intake.

Not included free, quoted plainly if you want them: online stores, booking portals, pages beyond five, ongoing edits, photography and logo design. Hosting after launch is roughly $0-20/month on your own, or from $29/month if I handle it — month-to-month, cancel anytime.

Terms are on the site: one page, plain English. The agreement you sign before I start says the same.

https://freewebsiteco.com
```

**Button:** `Learn more` (from Google's list: Book / Order online / Buy / Learn more / Sign up / Call now), pointed at https://freewebsiteco.com.

Use `Call now` instead only once a real phone number exists on the profile — a Call now button on a profile with no number is a dead end. Don't use `Sign up`; there's no signup, just an intake form.

**Notes:** GBP posts need your own Business Profile to be live first. There is deliberately no contact line in this post: Google's posts content policy bans phone numbers in post text outright, not just repeated ones ("Phone stuffing": "we do not allow your post content to include a phone number"). Contact belongs on the profile itself and behind the Call now button — never in the body. All-caps is not named in Google's written policy; treat avoiding it as style advice, not a stated rule.

---

## 3. Facebook group / Nextdoor (neighbourhood, not trade)

**Check the group's rules on self-promotion before you post. Most local groups either ban promo outright, restrict it to one day a week, or want a mod's OK first.**

**Facebook groups:** ask a mod, and post as yourself, not as a page.
**Nextdoor:** the reverse. Nextdoor's self-promotion policy requires business promotion to come from a free Business Page, not a personal neighbour account — that covers posts, main-feed comments and unsolicited DMs. Posting this from your neighbour account isn't deleted outright; Nextdoor shows it to fewer neighbours and tells you by email and a banner on the post, with a review request available.

```
Neighbor here, and this is a plain offer, not a pitch: I build websites for local service businesses for free.

Free meaning free — the build costs nothing. You register the domain in your own account, at launch the code and hosting move into accounts in your name, and if you never pay me anything you still keep the site. Hosting is the one real cost of running any website: roughly $0-20/month if you run it yourself, or from $29/month if I handle it.

I can do it because AI-assisted tools made the build fast — I earn only if someone later wants me handling the ongoing part, like hosting and edits. Plenty won't, and that's fine.

First working draft within five business days of your confirmed slot — I confirm the slot within one business day of your intake. One round of changes. If something I built breaks in the first 60 days, I fix it free.

If you run an HVAC, plumbing, electrical, roofing or landscaping business — or you know someone who does and doesn't have a website yet — the details and the intake (about three minutes for the short version) are here: https://freewebsiteco.com

Happy to answer website questions in the comments whether you ever use me or not. [Or reach me at ___ — add email/phone once they exist.]
```

**Notes:** 1,238 characters. Answer every comment, including the sour ones. In these groups the comment thread is the post. Don't repost to five groups the same day.

---

## 4. Trade group / contractor forum

**Check the forum's vendor rules first. On ContractorTalk, only paid supporting vendors may promote a business — free accounts can't, and a week of good-faith participation doesn't earn you the right to post this there. On a contractor Facebook group, ask a mod. Either way, be a real participant for a week before you post. This is the most skeptical room you'll be in — the scam question gets answered in the first three lines, before anything else.**

```
"Free website" sounds like a scam. Fair — it usually is one. The catch is normally that you don't own the domain, or you're locked into their hosting, or the free build is a monthly contract with the price buried on page four.

None of that here. You register the domain yourself, in your own account, on day one. At launch the code and hosting transfer to accounts you own. There's no monthly contract and no minimum term. There is one document: a one-page agreement you sign before I start, and it's the same plain-English terms that are public on the site. If you never pay me a dollar, you keep the site.

So how does it work: AI-assisted development means a build that would have taken me weeks takes days. The build isn't where the money is. The paid part is what comes after launch — hosting at $29/month if I run it, or roughly $0-20/month if you host it yourself, a care plan at $150/month if you want edits handled for you, plus optional lead-capture and review tools. All of it month-to-month, cancel anytime, and if you cancel, the site and your contact records are handed over within five business days at no charge — the domain was never mine to hand back, it's been in your account the whole time. Some owners will want that. Plenty won't. That's the bet I'm making.

What you actually get: up to five pages, plus a privacy policy page that doesn't count toward the five, copy written from a short intake (about three minutes for the quick version, 10-15 for the detailed one), mobile-first, click-to-call, a contact form that reaches a real inbox, a Google Business Profile connection. One revision round. Anything I broke, I fix free for 60 days, and it doesn't burn your revision.

What I won't tell you: that it'll rank, or bring you calls, or fix a slow month. I don't know that and neither does anybody else selling you a website. The only thing I'll guarantee is the price.

Straight about the rest of it: I'm one person in Los Angeles, I build AI-assisted, and I'm early — part of why the build is free is that I want work to show. That's the whole pitch.

https://freewebsiteco.com — terms are one page, public, and you read them before you give me anything.

Ask me anything below, skeptical stuff included. Happy to talk websites generally whether or not you ever use me.
```

**Notes:** The "I'm early" line is the one that does the work in this room — don't cut it to sound bigger. If someone asks how many sites you've built, answer honestly. The cancellation promise is deliberately scoped to the site, domain and contact records: Lead Capture and Reputation Engine have no signable agreement yet (`docs/SERVICES-CATALOG.md`, open item 2026-09-06), and what "handed over" means for a phone number, message history and review requests in flight is still undefined. Don't widen that sentence until `docs/lead-services-agreement.md` exists.

---

## 5. Text / DM to someone you already know

**351 characters.**

```
[Name] — random one. I started building websites for home services businesses and the build is free. Real site, domain in your own account, yours to keep even if you never pay me a dollar. Hosting's the only cost: $0-20/mo on your own, or $29 if I run it. Want me to build [business]'s? The short intake runs about 3 minutes: https://freewebsiteco.com
```

**Notes:** One follow-up a week later, max, then stop: "No pressure — if timing changes, the intake stays open."

---

## 6. Three one-liners for "why is it free?"

Rotate these so you're not reciting the same sentence at every event, in every comment thread, on every call.

1. **The tooling one.** "AI-assisted tools made the build cheap for me, so I give it away — I earn only if you later want the ongoing work handled, and you keep the site either way. Hosting's the only real cost, about $0-20 a month on your own."

2. **The audition one.** "The build is the audition. Hosting and upkeep are the paid part, and those are optional, month-to-month, and yours to cancel whenever."

3. **The math one.** "I'm not charging for the fast part. A build that would have taken me weeks takes days now, so the build is free — hosting's the only real cost, about $0–20 a month on your own — and the after-launch work is where I earn."

---

## Before you paste — 30-second check

- [ ] A test intake submission actually lands in the inbox (`formEndpoint` + `accessKey` set in `src/config.ts`). Until then, nothing here posts.
- [ ] Every `[bracket]` either filled or deleted — and no phone number anywhere in the body of variant 2.
- [ ] No number of clients, sites built, or years in business anywhere.
- [ ] No slot/capacity count (still `null` in config), and nothing implying a first batch or a deadline.
- [ ] Nothing promising a ranking, a call, a lead, or a dollar.
- [ ] Every "free" carries the hosting cost with it.
- [ ] Ownership stated correctly: domain day one, code and hosting at launch.
- [ ] Draft timeline stated with "of a confirmed slot".
- [ ] https://freewebsiteco.com present and loading.
- [ ] Group and forum rules checked (variants 3 and 4).