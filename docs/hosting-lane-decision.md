# Hosting lane for freewebsiteco.com

> Researched and drafted 2026-09-06. Sources were fetched, not recalled.

# Hosting lane for freewebsiteco.com

**Bottom line:** Move the site to Cloudflare Workers (static assets) on the Free plan. Vercel Hobby is not allowed for a business site. Vercel Pro would cost $240 a year for nothing this site needs.

## What the research found

**1. Vercel Hobby forbids commercial use.** Vercel's fair-use page: "Hobby teams are restricted to non-commercial personal use only. All commercial usage of the platform requires either a Pro or Enterprise plan." Its definition includes "Advertising the sale of a product or service," which our site does. Vercel says it "will reach out before taking action to address unreasonable usage"; account and deployment pausing is documented separately. ([fair use](https://vercel.com/docs/limits/fair-use-guidelines), [pausing](https://vercel.com/kb/guide/why-is-my-account-deployment-blocked))

**2. Vercel Pro is $20 per seat per month.** One deploying seat included; viewer seats free. Pro adds commercial use, a $20/month usage credit, 1 TB transfer, and email support. ([Pro](https://vercel.com/docs/plans/pro-plan), [Hobby](https://vercel.com/docs/plans/hobby))

**3. Cloudflare Free plan.** "Requests to static assets are free and unlimited." No bandwidth cap. Builds: 3,000 minutes a month, one at a time (older Pages route: 500 builds a month). 20,000 files, 100 custom domains. Astro is officially supported; a pre-rendered site needs no adapter. Cloudflare's terms have no non-commercial clause; the only Free-plan limit is not to "process or collect personal or business credit card information," which we do not. Cloudflare's Pages page says: "Start new projects with Workers." ([billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/), [limits](https://developers.cloudflare.com/workers/platform/limits/), [builds](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/), [Astro](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/), [terms](https://www.cloudflare.com/terms/), [Pages](https://developers.cloudflare.com/pages/))

**4. GitHub-connected deploys are free on both.** Vercel's Git integration works on Hobby for a private repo under a personal GitHub account (only organization-owned private repos are blocked). Cloudflare Workers Builds connects GitHub and deploys on every push. ([Vercel Git](https://vercel.com/docs/git), [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/))

## Comparison

| | Vercel Hobby (today) | Vercel Pro | Cloudflare Workers Free |
|---|---|---|---|
| Allowed for a business site | No | Yes | Yes |
| Price | $0 | $20/mo per seat | $0 |
| Bandwidth | 100 GB/mo guideline | 1 TB/mo | Unlimited for static files |
| Builds | 100 deploys/day | Faster machines | 3,000 min/mo, one at a time |
| Custom domain | Yes | Yes | Yes (bare domain needs Cloudflare DNS) |
| GitHub auto-deploy | Yes | Yes | Yes |
| Astro static site | Yes | Yes | Yes, no adapter |
| Support | None | Email | Community only |
| Cost per year | $0, not permitted | $240 + tax | $0 |

## Recommendation

Cloudflare Workers Free, **for this site only**. It is allowed for business use, costs $0, and has no bandwidth cap.

**Important limit on reusing it for clients.** Cloudflare's self-serve terms 2.2.1(a) prohibit "rent, lease, loan, export, or sell access to the Services to any third party." Hosting paying clients' sites on your own free account is exactly that clause. The sanctioned product for hosting third-party customer sites is **Workers for Platforms at $25/month**. So the $29/month Hosted plan does not ride free on this decision — either each client gets their own Cloudflare account (which also fits the "you own it" promise better), or Workers for Platforms becomes a $25/month cost of the Hosted plan. Worth settling before selling the first Hosted plan; it does not block moving this one site today.

One catch: to serve the bare domain (not only www), the nameservers must move from GoDaddy to Cloudflare. Cloudflare imports the existing DNS records and assigns "two authoritative Cloudflare nameservers." ([add a site](https://developers.cloudflare.com/fundamentals/manage-domains/add-site/), [custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/))

## Migration steps

Owner (20 minutes):
1. Create a free Cloudflare account.
2. Click "Onboard a domain," enter freewebsiteco.com, pick Free. Review the imported DNS records and note the two nameservers.
3. At GoDaddy, replace the nameservers with those two. Usually live within hours.
4. In Cloudflare DNS, delete any pre-existing record at the apex and www hostnames. Cloudflare's docs state a Custom Domain cannot be created on a hostname that already has a CNAME record. Check the actual values in the dashboard after the DNS import rather than assuming.
5. Approve the "Cloudflare Workers & Pages" GitHub app for Tylerwhall99/signalworks.

Claude (commands):
1. Add `wrangler.jsonc` to the repo: `assets.directory: "./dist"`, no `main`, custom-domain routes for apex and www.
2. `npx wrangler login` (browser approval), then `npx astro build && npx wrangler deploy` to test on a free workers.dev address.
3. Connect the Worker to GitHub in Workers Builds so every push to main deploys.
4. Once nameservers are active, deploy again; Cloudflare creates DNS records and the certificate.
5. Check the live site, then clean up Vercel.

## What happens to the Vercel project

Nothing breaks mid-switch; Vercel serves until the nameservers move. Afterward, Claude removes the domain from Vercel, deletes the project, and drops the `.vercel/` folder from the repo. The hall-hub team can stay for personal projects.

## Cost per year

- Vercel Hobby: $0, but not permitted for this site.
- Vercel Pro: $240 plus tax (one seat); more if usage exceeds the credit.
- Cloudflare Workers Free: $0 for this site. Workers Paid ($5/mo) is not needed for it. Hosting client sites later is a separate question: Workers for Platforms is $25/mo, or each client gets their own account.
- Domain renewal is unchanged in every lane.

## Fact-check corrections applied 2026-09-06

An independent pass re-opened every cited source. 30 of 33 claims held. Three were corrected above:

1. "Vercel can pause offending sites" was not on the fair-use page cited; the pausing policy lives on a separate page, now cited.
2. The claim that client sites could later ride the $29/month Hosted plan on this account was wrong, and the reason matters: Cloudflare's terms forbid selling access to the service to third parties. Workers for Platforms ($25/mo) is the sanctioned path.
3. The instruction to delete a specific Vercel A record was uncited. Cloudflare documents the conflict for CNAME records; verify actual values in the dashboard.

## Caveats and unverified points

- The task assumed the owner would edit two DNS records (A + CNAME). Research changed that: both Workers and Pages require the domain's nameservers to be on Cloudflare to serve the bare apex domain (Workers custom domains need 'an active Cloudflare zone'; Pages apex domains need Cloudflare nameservers). The brief therefore has the owner change the two nameserver entries at GoDaddy and delete the two old Vercel records after Cloudflare imports DNS. Moving nameservers moves all DNS for the domain, so any future email (MX) records must be added in Cloudflare.
- Cloudflare's docs do not explicitly say the GitHub integration supports private repositories; it is a GitHub App with 'Only select repositories' access, which in practice covers private repos, but this was not confirmed verbatim.
- Cloudflare commercial-use finding is based on the Self-Serve Subscription Agreement at cloudflare.com/terms as fetched today: no non-commercial clause found; the only Free Services restriction is not processing or collecting credit card information (section 2.2.1(h)). This is a reading of the terms, not legal advice.
- Vercel Pro annual cost ($240) is 12 x $20 for one deploying seat, excluding tax and any on-demand usage beyond the $20/month credit; the Vercel pricing page also states $20/month per developer seat.
- The step where 'wrangler deploy' creates custom-domain DNS records and certificate relies on the wrangler.jsonc routes/custom_domain feature described in Cloudflare's custom-domains docs; the exact config syntax was not re-verified in this session and should be checked when Claude writes the file.
- Nameserver propagation time ('usually within hours') is general experience; Cloudflare's add-a-site page does not give a number.
- Cloudflare Pages remains available on all plans; the 'Start new projects with Workers' banner is Cloudflare's guidance, not a deprecation notice. The migrate-from-Pages guide frames Workers as the broader feature set rather than declaring Pages end-of-life.
- Word count is 695 by wc (631 excluding markdown table pipes and list markers). No artifact page was published; the brief is returned as markdown only.

## Sources

- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/plans/pro-plan
- https://vercel.com/docs/git
- https://developers.cloudflare.com/workers/platform/limits/
- https://developers.cloudflare.com/workers/platform/pricing/
- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/
- https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- https://developers.cloudflare.com/workers/ci-cd/builds/
- https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/
- https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/
- https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/
- https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- https://developers.cloudflare.com/pages/
- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/fundamentals/manage-domains/add-site/
- https://www.cloudflare.com/terms/
