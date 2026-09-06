# Intake questions — the master list

> Created 2026-09-06 after the Ridgeline HVAC dry run, which found that "intake answers" were referenced in the runbook, the agreement, the GBP checklist, and the free-build scope, but were never actually written down anywhere. This is the missing definition.

**What this is for.** Every field a client site needs, in the order it gets asked. The public intake wizard at https://freewebsiteco.com/#start already collects most of it. This document is the complete set: it covers the wizard fields plus the operational answers that only come up in the kickoff reply. Nothing here is optional busywork — each answer maps to a specific field in the client site's `src/config.ts` or to a step in the runbook.

**How to use it.** When an intake lands, copy this list into a reply and fill it from their answers. Anything still blank after that reply is a question you ask, once, in that same email. The build does not start with blanks in the **required to start** section.

---

## Section 1 — Required to start (build does not begin without these)

| # | Question | Goes to | Wizard field |
| --- | --- | --- | --- |
| 1 | Business name, exactly as it should read on the site | `BUSINESS.name`, `BUSINESS.wordmark` | `qs-name` / `dt-name` |
| 2 | What you do (trade) | schema type, copy voice | `qs-trade` / `dt-trade` |
| 3 | Service area — cities, neighborhoods, or radius | `BUSINESS.serviceArea`, JSON-LD `areaServed` | `qs-area` / `dt-area` |
| 4 | Phone, exactly as customers should dial it | `BUSINESS.phone`, click-to-call | `qs-phone` / `dt-phone` |
| 5 | Email where form submissions should land | `CONTACT_FORM` delivery target | `qs-email` / `dt-email` |
| 6 | Your top 3 services | `SERVICES[]` | `qs-services` / `dt-services` |
| 7 | One thing customers say they like about you | hero and About copy | `qs-like` / `dt-like` |
| 8 | Biggest headache right now | what the site is built to solve | `qs-headache` / `dt-headache` |

## Section 2 — Legal and accuracy (must be answered, may be "none")

These exist because the content rules forbid invented proof, and because some of them are legal requirements for the client, not preferences.

| # | Question | Why it is not optional |
| --- | --- | --- |
| 9 | **Contractor license number** (CSLB number for California trades), and the state it is issued in | California requires licensed contractors to show the license number in advertising, and a website is advertising. **Never write "licensed and insured" without the number.** If they have no number, the line does not appear at all. |
| 10 | Other licenses or certifications you actually hold, with issuing body | Same rule: no certification appears on the site without a real credential behind it. | 
| 11 | Insurance: are you insured, and by whom | Only stated if true and only alongside the license line. |
| 12 | Years in business, if you want it stated | Never inferred. Blank means the site says nothing about tenure. |
| 13 | Testimonials you have **written permission** to use, with the customer's name as they agreed to it | Free-build agreement §6. No permission, no testimonial. |
| 14 | Photos you have the right to use, and where they came from | Agreement §6. Record the source for each set in the handoff notes. |
| 15 | Anything on your current site that is out of date or not true anymore | Stops stale claims being carried across in a rebuild. |

## Section 3 — Site content

| # | Question | Goes to |
| --- | --- | --- |
| 16 | Pages you want (default: Home, Services, About, Contact) | page set, up to five |
| 17 | Anything the site must include | scope check before the build |
| 18 | Hours, and whether you offer emergency or after-hours service | `BUSINESS.hours`, JSON-LD |
| 19 | Do you work from a business address customers visit, or do you go to them | Decides whether an address appears at all. Service-area businesses show no street address, on the site or in structured data. |
| 20 | Logo, or brand colors you want used | `COLORS`, header |
| 21 | 1–2 sites you like the look of | art direction |
| 22 | Sites that turn you off | art direction |
| 23 | Booking or scheduling tool you already use | whether a booking link is embedded |
| 24 | Social profiles you want linked | footer, JSON-LD `sameAs` |

## Section 4 — Accounts and handoff (the runbook's day-one setup)

Asked in the kickoff reply, not the wizard. These are what make "you own it" true rather than a slogan.

| # | Question | Runbook step |
| --- | --- | --- |
| 25 | Do you own a domain already, and which registrar account is it in? | Day-one #1. If they do not own one, they register it in **their own** account before the first commit. Send `docs/client-domain-instructions.md`. |
| 26 | Who has the login to that registrar account? | Confirms the client, not a former web person, controls it. |
| 27 | Do you have a Google Business Profile, and do you control it? | Free-build scope includes GBP connection. See `docs/gbp-connection-checklist.md`. |
| 28 | Email address to create the form-delivery account under | The form service account is created **in the client's name**, so it transfers with everything else. |
| 29 | Who should receive form submissions, besides you? | Delivery targets plus our temporary monitoring alias, removed at handoff. |
| 30 | After launch, do you want to run it yourself or have us host it? | Walk-away handoff vs. care plan. Determines which handoff checklist gets used. |

## Section 5 — Recorded by us, not asked

Filled in by us at kickoff and kept with the client's file.

- Confirmed slot date, and therefore the five-business-day draft date
- Signed free-build agreement: date signed and where the executed copy is stored
- Repo name (client's domain; if no domain yet, the business name in kebab-case, renamed once the domain exists)
- Hosting destination for the build
- Portfolio opt-out: did they initial §7 of the agreement

---

## Notes on questions that changed after the dry run

- **The license number question was added.** The Ridgeline demo carried the line "Licensed & insured" with no number. That is exactly the invented-proof pattern the content rules ban, and for a California contractor it is also an advertising compliance problem for the client. The rule now: the line renders only when a real number exists.
- **The address question was split from the service-area question.** Home-services businesses usually have no address customers visit. Asking one question produced a site with a street address in structured data that should not have been there.
- **Form-account ownership was made explicit.** The runbook said to hand over the "form-service login" at launch, but never said whose email the account was created under. Creating it in the client's name from day one removes the transfer step entirely.
