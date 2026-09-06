/**
 * Launch readiness report.
 *
 *   npm run status
 *
 * Reads src/config.ts and tells you exactly what is still missing before the
 * site can take a lead, in the order it should be done. Every line says who
 * it belongs to: YOU (needs an account, money, or a decision) or CLAUDE
 * (a code change, once the value exists).
 *
 * No network calls. Safe to run any time.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = readFileSync(join(root, 'src/config.ts'), 'utf8');

/** Pull `key: 'value'` out of the config source without importing TypeScript. */
const val = (key) => {
  const m = cfg.match(new RegExp(`${key}:\\s*'([^']*)'`));
  return m ? m[1] : null;
};
const isSet = (v) => v !== null && v !== '' && !v.includes('PLACEHOLDER');

const phone = val('phone');
const email = val('email');
const address = val('address');
const endpoint = val('formEndpoint');
const notify = val('notifyEmail');
const plausible = val('plausibleDomain');
const google = cfg.match(/google:\s*'([^']*)'/)?.[1] ?? '';
const bing = cfg.match(/bing:\s*'([^']*)'/)?.[1] ?? '';
const parent = val('parent');
const capacity = /capacityPerMonth:\s*null/.test(cfg) ? null : 'set';

const items = [
  {
    id: 'email',
    ok: isSet(email),
    who: 'YOU',
    label: 'Business email on freewebsiteco.com',
    blocks: 'the form endpoint, the Google Business Profile, and every reply to a lead',
    how: 'Google Workspace ~$7/mo or Zoho Mail free. Suggested: hello@freewebsiteco.com',
  },
  {
    id: 'formEndpoint',
    ok: isSet(endpoint),
    who: 'YOU',
    label: 'Web3Forms access key',
    blocks: 'BOTH intake forms — right now the site cannot capture a single lead',
    how: 'web3forms.com, enter the business email, the key arrives by email. ~60 seconds. Needs the email above first.',
  },
  {
    id: 'phone',
    ok: isSet(phone),
    who: 'YOU',
    label: 'Business phone number',
    blocks: 'the click-to-call in the header, the sticky mobile call button, and the footer',
    how: 'Google Voice is free. The site shows nothing where a phone would be until this exists.',
  },
  {
    id: 'hosting',
    ok: false,
    who: 'YOU',
    label: 'Hosting lane decision',
    blocks: 'nothing technically, but Vercel Hobby forbids commercial use and this site is commercial',
    how: 'Cloudflare Workers $0/yr (moves nameservers off GoDaddy) or Vercel Pro $240/yr (no migration). See docs/hosting-lane-decision.md',
    manual: true,
  },
  {
    id: 'address',
    ok: isSet(address),
    who: 'YOU',
    label: 'Mailing address',
    blocks: 'nothing — the footer and structured data simply omit it',
    how: 'Optional at launch. A PO box or registered-agent address is fine; a home address is not recommended.',
    optional: true,
  },
  {
    id: 'capacity',
    ok: capacity !== null,
    who: 'YOU',
    label: 'Monthly free-build capacity number',
    blocks: 'nothing — the site makes no capacity claim at all while this is empty, which is the honest default',
    how: 'One number you would enforce in your busiest month. Build time is not the constraint; client conversations are.',
    optional: true,
  },
  {
    id: 'attorney',
    ok: false,
    who: 'YOU',
    label: 'Attorney pass on the agreements',
    blocks: 'signing your FIRST CLIENT — not the launch of this site',
    how: 'Send docs/attorney-review-packet.pdf. 15 numbered questions, one-line answers are fine.',
    manual: true,
  },
  {
    id: 'analytics',
    ok: isSet(plausible),
    who: 'YOU',
    label: 'Analytics account',
    blocks: 'knowing whether anyone visits',
    how: 'Plausible ~$9/mo or GA4 free. One value in config and it goes live everywhere.',
    optional: true,
  },
  {
    id: 'searchconsole',
    ok: !!(google || bing),
    who: 'YOU',
    label: 'Google Search Console / Bing verification tokens',
    blocks: 'submitting the sitemap',
    how: 'Add freewebsiteco.com as a URL-prefix property, choose the HTML tag method, send the token. The meta tags are already wired.',
    optional: true,
  },
  {
    id: 'parent',
    ok: isSet(parent),
    who: 'YOU',
    label: 'Parent / operating brand name',
    blocks: 'nothing yet — the footer byline stays hidden until it exists',
    how: 'Needed before the first paid upsell, roughly early October.',
    optional: true,
  },
];

const required = items.filter((i) => !i.optional);
const optional = items.filter((i) => i.optional);
const done = items.filter((i) => i.ok);
const blocking = required.filter((i) => !i.ok);

const line = (i) => {
  const mark = i.ok ? '  DONE ' : i.optional ? '  soon ' : '  TODO ';
  return `${mark}[${i.who}] ${i.label}`;
};

console.log('');
console.log('  THE FREE WEBSITE CO. — LAUNCH STATUS');
console.log('  ' + '-'.repeat(58));
console.log('');
console.log(`  Site is live at https://freewebsiteco.com and serving publicly.`);
console.log(`  ${done.length} of ${items.length} items done. ${blocking.length} still blocking a working lead path.`);
console.log('');

if (blocking.length) {
  console.log('  BLOCKING — the site cannot capture a lead until these exist');
  console.log('');
  for (const i of blocking) {
    console.log(line(i));
    console.log(`         blocks: ${i.blocks}`);
    console.log(`         how:    ${i.how}`);
    console.log('');
  }
} else {
  console.log('  Nothing is blocking. Send the four facts to Claude and the forms go live.');
  console.log('');
}

console.log('  NOT BLOCKING — do these when you get to them');
console.log('');
for (const i of optional) console.log(line(i));
console.log('');

if (done.length) {
  console.log('  ALREADY DONE');
  console.log('');
  for (const i of done) console.log(line(i));
  console.log('');
}

console.log('  ' + '-'.repeat(58));
console.log('  When you have the email, phone and Web3Forms key, paste all three');
console.log('  to Claude in one message. Everything below happens automatically:');
console.log('    - both intake forms go live and get tested end to end');
console.log('    - click-to-call appears in the header, sticky bar and footer');
console.log('    - contact details appear on /contact/ and in the footer');
console.log('    - structured data gains email and telephone');
console.log('    - the site redeploys');
console.log('');

// Exit non-zero only when something required is missing, so this can gate a
// launch script later without being annoying day to day.
process.exit(blocking.length ? 1 : 0);
