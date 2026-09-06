# Client Site Handoff Runbook — The Free Website Co.

> Purpose: make "you own it, no catch" true by construction. Ownership is clean when the right accounts are client-owned from day one, so transfer at launch is a 30-minute checklist, not a project.

---

## Rule zero

The repo is the product. Lovable and Claude Code are build tools — never let a client's site exist only inside a builder account. Everything ships to GitHub; GitHub and the host are what get transferred.

## Day-one setup (per client, before the first commit)

1. **Domain — client-owned from the start.** They register it in their own registrar account (send them the 5-step instructions; takes 10 minutes). You get DNS access only. Never buy client domains in your own account — registrar transfers carry a 60-day ICANN lock and turn handoff into a support ticket.
2. **Code** — build in your GitHub org, repo named after their domain.
3. **Hosting** — deploy to your Vercel Pro team during build and revisions. Client sites never touch your Hobby account (commercial use isn't allowed there).
4. **Forms** — **default: Web3Forms** (no serverless function needed on a static site; free tier is enough for a brochure site). **Create the account under the client's own email**, not yours, so it transfers with everything else and the launch-day "hand over the form-service login" step disappears. Delivery goes to the client's inbox plus a monitoring alias of yours, removed at handoff. **No database on free sites.** A brochure site with a Supabase dependency is a site that can break after handoff (free-tier projects pause when inactive) and one more account to migrate. Supabase enters only when the client buys a paid service that needs a backend — and then it's created in the client's org with you as admin, per the A1 decision.
5. **Analytics** — property created under the client's Google account (or their own Plausible), you added as manager.
6. **Signed one-page terms** before the first commit: what's free, what's not, ownership, one revision round, image rights, your right to keep an archive/portfolio copy. Store the executed copy with the client's file and note the date in the build record.
7. **Complete intake** — every question in `docs/intake-questions.md` answered before the build starts. Blanks in its "required to start" section are a reason to wait, not to guess.
8. **License number, or no license line.** California contractors must show their CSLB number in advertising, and a website is advertising. Never render "licensed and insured" without the real number. Same rule for every certification: no credential appears without one behind it.
9. **Address only if customers visit it.** Most home-services clients are service-area businesses. No street address on the site and none in the structured data unless there is a real location the public walks into.
10. **Privacy page on every client site.** Any site with a contact form collects personal information; CalOPPA expects a policy for Californian visitors. It is a short page generated from the same config as the rest of the site, and it costs nothing to include.

## Before launch day — the revision round

The free build includes one revision round, and it needs a step of its own or it gets skipped:

- [ ] **Send the draft** on a preview link, with a plain sentence: this is the draft, send everything you want changed in one reply.
- [ ] **Client sends consolidated notes.** One round means one consolidated reply, not a trickle — say so when you send the link.
- [ ] **Apply the round**, then send the updated link and confirm in writing that the revision round is used and what remains free (bug fixes for 60 days after launch).
- [ ] **Client says go.** Nothing launches without that word in writing.

## Launch-day transfer — walk-away client

- [ ] **GitHub:** transfer the repo to their account (Settings → Transfer ownership), or hand over a zip if they don't want GitHub. Keep your archived copy per the signed terms.
- [ ] **Vercel:** use the claim/transfer flow to move the project to their account. Two realities to give them plainly: running a business site on Vercel requires the Pro plan (~$20/mo — Hobby is non-commercial by Vercel's terms), **or** you redeploy them to a host whose free tier allows commercial use (Cloudflare) for ~$0/mo. Their choice, five minutes either way.
- [ ] **Domain:** already theirs — confirm DNS points at the new deployment.
- [ ] **Forms:** remove your monitoring alias; confirm a test submission lands in their inbox.
- [ ] **Analytics:** transfer full ownership; remove yourself unless they ask you to stay (get that in writing).
- [ ] **Hand over:** repo or zip, all image assets with license notes, form-service login, and a one-page "how to get edits made" note.
- [ ] **Close out:** remove every access of yours, then confirm in writing: "Site is live, everything is in your name, here's what you have."
- [ ] **Bug-window re-entry (60 days):** the handoff email includes the 30-second re-invite steps (host collaborator invite + repo access) so "we fix it free" never becomes a runaround after access removal. Target: fix landed same week as re-invite.

## Launch-day — care-plan client (from $29/mo)

Site stays on your hosting; you keep the repo; they still own the domain. **This path needs its own owner's guide and checklist** — the walk-away versions tell the client how to run a site they are not running. Write the care-plan variants before the first care-plan client, not during. The clause that makes this an easy yes and keeps "no catch" honest:

> "Cancel anytime. We execute the full handoff within 5 business days at no charge — code, hosting, everything in your name."

## Terms-page language (paste-able)

- "You own the site. At launch we transfer the code and hosting into accounts in your name, or host it for you on the Care Plan — your choice, changeable later."
- "The build is free. Running any website costs hosting: roughly $0–20 a month if you run it yourself, or a care plan from $29 a month if we handle it."
- "If you ever leave the Care Plan, we hand everything over within 5 business days at no charge."

## Templates this runbook still needs

Flagged by the 2026-09-06 dry run; write each one the first time you need it, then keep it:

- Close-out email ("site is live, everything is in your name, here's what you have")
- Image-license note that ships with the handed-over assets
- Bug-window re-invite email (the 30-second access steps, sent inside the 60 days)
- Care-plan owner's guide and care-plan handoff checklist

## Gotchas

- **Vercel Hobby is non-commercial.** Vercel's fair-use terms: "Hobby teams are restricted to non-commercial personal use only." A lead-gen site for a paying business is commercial use, and so is freewebsiteco.com itself. Never park a client there — it's the kind of corner-cutting the whole brand is built against. The lane has to be settled before client one: see `docs/hosting-lane-decision.md`.
- **Every promise on the site is a promise in the build.** Service-area maps and booking links are in the public scope; if a client asks for one, it is included, not an add-on.
- **Supabase free tier pauses inactive projects.** One more reason free brochure sites get form-to-email, not a database.
- **Domain 60-day lock.** Solved permanently by client-owned registration on day one.
- **Lovable accounts don't transfer as the product.** The GitHub repo does. Build accordingly.
