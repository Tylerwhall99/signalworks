# Client Site Handoff Runbook — Signalworks

> Purpose: make "you own it, no catch" true by construction. Ownership is clean when the right accounts are client-owned from day one, so transfer at launch is a 30-minute checklist, not a project.

---

## Rule zero

The repo is the product. Lovable and Claude Code are build tools — never let a client's site exist only inside a builder account. Everything ships to GitHub; GitHub and the host are what get transferred.

## Day-one setup (per client, before the first commit)

1. **Domain — client-owned from the start.** They register it in their own registrar account (send them the 5-step instructions; takes 10 minutes). You get DNS access only. Never buy client domains in your own account — registrar transfers carry a 60-day ICANN lock and turn handoff into a support ticket.
2. **Code** — build in your GitHub org, repo named after their domain.
3. **Hosting** — deploy to your Vercel Pro team during build and revisions. Client sites never touch your Hobby account (commercial use isn't allowed there).
4. **Forms** — email-based delivery (Resend via a serverless function, or Formspree/Web3Forms) pointed at the client's inbox plus a monitoring alias of yours. **No database on free sites.** A brochure site with a Supabase dependency is a site that can break after handoff (free-tier projects pause when inactive) and one more account to migrate. Supabase enters only when the client buys a paid service that needs a backend — and then it's created in the client's org with you as admin, per the A1 decision.
5. **Analytics** — property created under the client's Google account (or their own Plausible), you added as manager.
6. **Signed one-page terms** before the first commit: what's free, what's not, ownership, one revision round, image rights, your right to keep an archive/portfolio copy.

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

Site stays on your Vercel team; you keep the repo; they still own the domain. The clause that makes this an easy yes and keeps "no catch" honest:

> "Cancel anytime. We execute the full handoff within 5 business days at no charge — code, hosting, everything in your name."

## Terms-page language (paste-able)

- "You own the site. At launch we transfer the code and hosting into accounts in your name, or host it for you on the Care Plan — your choice, changeable later."
- "The build is free. Running any website costs hosting: roughly $0–20 a month if you run it yourself, or a care plan from $29 a month if we handle it."
- "If you ever leave the Care Plan, we hand everything over within 5 business days at no charge."

## Gotchas

- **Vercel Hobby is non-commercial.** A lead-gen site for a paying business is commercial use under their fair-use terms. Never park a client there — it's the kind of corner-cutting the whole brand is built against.
- **Supabase free tier pauses inactive projects.** One more reason free brochure sites get form-to-email, not a database.
- **Domain 60-day lock.** Solved permanently by client-owned registration on day one.
- **Lovable accounts don't transfer as the product.** The GitHub repo does. Build accordingly.
