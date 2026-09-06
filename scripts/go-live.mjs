/**
 * Turn the site's lead path on.
 *
 *   npm run go-live -- --email=hello@freewebsiteco.com --phone="(213) 555-0142" --key=abc-123
 *
 * Every argument is optional; pass what you have and run it again later for
 * the rest. It edits src/config.ts in place, rebuilds, and verifies. It does
 * not commit, push, or deploy — read the diff first, then push.
 *
 * Optional extras:
 *   --address="PO Box 1, Los Angeles, CA 90000"
 *   --capacity=4
 *   --plausible=freewebsiteco.com
 *   --google=<search-console-token>   --bing=<bing-token>
 *   --parent="Some Brand"
 *   --dry                             show what would change, write nothing
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG = join(root, 'src/config.ts');

const args = Object.fromEntries(
  process.argv.slice(2)
    .filter((a) => a.startsWith('--'))
    .map((a) => {
      const i = a.indexOf('=');
      return i === -1 ? [a.slice(2), true] : [a.slice(2, i), a.slice(i + 1)];
    }),
);

const dry = !!args.dry;
const changes = [];
let cfg = readFileSync(CONFIG, 'utf8');

/** Replace `key: '<anything>'` with a new single-quoted value. */
const setStr = (key, value, label) => {
  if (value === undefined) return;
  const re = new RegExp(`(${key}:\\s*)'[^']*'`);
  if (!re.test(cfg)) throw new Error(`could not find ${key} in src/config.ts`);
  const escaped = String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  cfg = cfg.replace(re, `$1'${escaped}'`);
  changes.push(`${label || key} -> ${value}`);
};

// --- validation, because a typo here ships to the public site -------------
if (args.email !== undefined) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(args.email)) throw new Error(`--email does not look like an email: ${args.email}`);
  if (/@gmail\.|@yahoo\.|@hotmail\./i.test(args.email)) {
    console.warn(`\n  WARNING: ${args.email} is a consumer address. The offer is credibility;\n  a business address on freewebsiteco.com reads very differently.\n`);
  }
}
if (args.phone !== undefined) {
  const digits = String(args.phone).replace(/\D/g, '');
  if (digits.length < 10) throw new Error(`--phone needs at least 10 digits: ${args.phone}`);
}
if (args.key !== undefined && String(args.key).length < 10) {
  throw new Error('--key looks too short for a Web3Forms access key');
}
if (args.capacity !== undefined && !/^\d+$/.test(String(args.capacity))) {
  throw new Error('--capacity must be a whole number');
}

// --- apply -----------------------------------------------------------------
setStr('phone', args.phone, 'CONTACT.phone');
setStr('email', args.email, 'CONTACT.email');
setStr('address', args.address, 'CONTACT.address');
setStr('notifyEmail', args.email, 'CONTACT.notifyEmail');
setStr('plausibleDomain', args.plausible, 'ANALYTICS.plausibleDomain');
setStr('google', args.google, 'SEARCH_VERIFICATION.google');
setStr('bing', args.bing, 'SEARCH_VERIFICATION.bing');
setStr('parent', args.parent, 'BRAND.parent');

if (args.key !== undefined) {
  // Web3Forms posts to a fixed endpoint; the key travels as a hidden field,
  // which the intake forms already render from CONTACT.formEndpoint.
  setStr('formEndpoint', 'https://api.web3forms.com/submit', 'CONTACT.formEndpoint');
  const re = /(accessKey:\s*)'[^']*'/;
  if (re.test(cfg)) {
    cfg = cfg.replace(re, `$1'${args.key}'`);
  } else {
    cfg = cfg.replace(
      /(\/\*\* Where the form endpoint should deliver submissions\..*?\*\/\n)/s,
      `  /** Web3Forms access key, sent as a hidden field with every submission. */\n  accessKey: '${args.key}',\n$1`,
    );
  }
  changes.push(`CONTACT.accessKey -> ${String(args.key).slice(0, 6)}…`);
}

if (args.capacity !== undefined) {
  const re = /capacityPerMonth:\s*[^,]+,/;
  if (!re.test(cfg)) throw new Error('could not find capacityPerMonth');
  cfg = cfg.replace(re, `capacityPerMonth: ${args.capacity} as number | null,`);
  changes.push(`FREE_BUILD.capacityPerMonth -> ${args.capacity}`);
}

if (!changes.length) {
  console.log('\n  Nothing to do. Pass at least one of --email --phone --key.\n  Run `npm run status` to see what is still missing.\n');
  process.exit(0);
}

console.log('\n  Changes to src/config.ts:\n');
for (const c of changes) console.log(`    ${c}`);
console.log('');

if (dry) {
  console.log('  --dry: nothing written.\n');
  process.exit(0);
}

writeFileSync(CONFIG, cfg);
console.log('  Written. Building…\n');

try {
  execSync('npm run build', { cwd: root, stdio: 'inherit' });
} catch {
  console.error('\n  BUILD FAILED. `git checkout src/config.ts` to undo.\n');
  process.exit(1);
}

// --- verify the built output actually reflects the change ------------------
const home = readFileSync(join(root, 'dist/index.html'), 'utf8');
const contact = readFileSync(join(root, 'dist/contact/index.html'), 'utf8');
const problems = [];

if (/PLACEHOLDER/.test(home + contact)) problems.push('a PLACEHOLDER string is still in the built HTML');
if (args.email && !contact.includes(args.email)) problems.push('the email does not appear on the built contact page');
if (args.phone && !contact.includes(args.phone)) problems.push('the phone does not appear on the built contact page');
if (args.key && !home.includes('api.web3forms.com')) problems.push('the form endpoint did not reach the homepage intake form');
if (args.key && /intake opens in the next few days/i.test(home)) problems.push('the intake form is still rendering its disabled state');

console.log('');
if (problems.length) {
  console.error('  VERIFY FAILED:');
  for (const p of problems) console.error(`    - ${p}`);
  console.error('\n  Nothing was committed. `git checkout src/config.ts` to undo.\n');
  process.exit(1);
}

console.log('  Verified in the built output.\n');
console.log('  Next:');
console.log('    1. git diff src/config.ts        # read it');
console.log('    2. git add -A && git commit -m "Wire the lead path"');
console.log('    3. git push                     # this deploys production');
if (args.key) {
  console.log('    4. Submit BOTH intake forms on the live site from a real phone');
  console.log('       and confirm each one lands in the inbox.');
}
console.log('');
