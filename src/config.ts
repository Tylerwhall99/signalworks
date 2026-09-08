/**
 * Single source of truth for brand constants, contact placeholders,
 * navigation, the free-build offer, and the service roadmap.
 * Copy edits here propagate site-wide.
 *
 * Before launch, replace: SITE_URL, CONTACT.phone, CONTACT.email,
 * CONTACT.address, CONTACT.formEndpoint (intake pipeline), and — when the
 * real numbers exist — FREE_BUILD.capacityPerMonth and CLEARED_SERVICES.
 */

// The real domain. Vercel alias signalworks-hall-hub.vercel.app keeps working as a fallback.
export const SITE_URL = 'https://freewebsiteco.com';

export const BRAND = {
  name: 'The Free Website Co.',
  /** Compact wordmark for headers/footers. */
  short: 'Free Website Co.',
  /** Parent/operating brand byline ("a ___ company"). Empty = no byline rendered. */
  parent: '',
  /**
   * Deliverable-only. The old line ("get service businesses found, called,
   * and booked") promised search visibility, lead volume and revenue — three
   * outcome promises, in the footer of every page, directly under the /about/
   * paragraph that forbids exactly that.
   */
  tagline: 'A real website, built for you, yours to keep.',
  // Default meta description; individual pages override it.
  description:
    'Free, professional websites for home services businesses — HVAC, plumbing, electrical, roofing, landscaping. You own it outright: domain, files, everything.',
} as const;

export const CONTACT = {
  phone: 'PHONE_PLACEHOLDER',
  email: 'EMAIL_PLACEHOLDER',
  address: 'ADDRESS_PLACEHOLDER',
  /**
   * Intake form POST endpoint (Formspree/Basin/Web3Forms-style, or your own
   * serverless function). The endpoint is responsible for delivering
   * submissions to NOTIFY_EMAIL within a minute. While empty, the intake
   * forms render but submissions show a direct-email fallback instead.
   */
  formEndpoint: '',
  /**
   * Web3Forms access key. Web3Forms authenticates by a hidden `access_key`
   * field on every submission, not by the URL, so the endpoint alone is not
   * enough — both must be set together. `npm run go-live -- --key=…` does it.
   */
  accessKey: '',
  /** Where the form endpoint should deliver submissions. DECISION 7 — unfilled. */
  notifyEmail: '',
} as const;

/**
 * Dial-safe phone for `tel:` links. Browsers mostly cope with "(213) 555-0142"
 * but some Android dialers and older iOS versions choke on the punctuation,
 * so links use this and the visible text uses CONTACT.phone.
 */
export const PHONE_HREF = CONTACT.phone.includes('PLACEHOLDER')
  ? ''
  : `+1${CONTACT.phone.replace(/\D/g, '').replace(/^1/, '')}`;

/**
 * Which contact details are real. Anything still reading *_PLACEHOLDER is
 * hidden sitewide (footer, contact page, structured data, form fallbacks)
 * so a public visitor never sees scaffolding. Fill CONTACT above and these
 * flip on their own.
 */
export const CONTACT_READY = {
  email: !CONTACT.email.includes('PLACEHOLDER'),
  phone: !CONTACT.phone.includes('PLACEHOLDER'),
  address: !CONTACT.address.includes('PLACEHOLDER'),
} as const;

/** Optional analytics. Set a Plausible domain to inject the script site-wide. */
export const ANALYTICS = {
  plausibleDomain: '',
} as const;

/**
 * Search-engine ownership proofs. Paste the token each console gives you
 * (Google Search Console → "HTML tag" method; Bing Webmaster → "Meta tag")
 * and the matching <meta> renders on every page. Empty = nothing rendered.
 */
export const SEARCH_VERIFICATION = {
  google: '',
  bing: '',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Services', href: '/services/' },
  { label: 'FAQ', href: '/#faq' },
];

export const NAV_CTA: NavItem = { label: 'Start my free site', href: '/#start' };

/**
 * The free-build offer. DECISIONS 1, 3, 4 from docs/site-redraft-prompt.md.
 * capacityPerMonth is DECISION 5 — deliberately null until Tyler supplies a
 * number he will actually enforce. While null, the site makes NO capacity
 * claim anywhere (the spec bans fake scarcity; an invented number is fake).
 */
export const FREE_BUILD = {
  draftTimeline: 'five business days',
  /** One "change it" pass: structure, layout, what the site does. */
  revisionRounds: 1,
  /** "We broke it, we fix it" window after launch — never uses a revision. */
  bugFixWindowDays: 60,
  capacityPerMonth: null as number | null,
  includes: [
    'Home, Services, About, Contact — up to five pages that earn their place',
    'A privacy policy page, written to match your site — included, and it does not count toward your five',
    'Copy written from your intake answers — you talk, we write',
    'Mobile-first layout, tested on real phones',
    'Click-to-call, placed where thumbs go',
    'A contact form that reaches a real inbox',
    'Quote forms, booking links, and a service-area map — anything beyond that is quoted first',
    'Basic on-page SEO hygiene: titles, descriptions, speed',
    'Google Business Profile connection',
    'One revision round — the "change it" pass for structure, layout, and what the site does',
    'Bug fixes free for 60 days after launch — if we broke it, we fix it, and it never uses your revision',
  ],
  notIncludedFree: [
    'Online stores — products, checkout, payments — a quoted build with a written price and timeline first',
    'Standalone web apps — booking systems, portals, internal tools — quoted per project',
    'Pages beyond five, ongoing edits, and new content — quoted plainly (bug fixes in the first 60 days are free)',
    'Hosting and maintenance — optional care plans from $29/month, or run it yourself for roughly $0–20/month',
    'Photography and logo design',
    'Ongoing growth services — ask us',
  ],
} as const;

export interface CarePlan {
  id: string;
  name: string;
  /** Display price, e.g. "$29/month". Edit here only. */
  price: string;
  blurb: string;
  includes: string[];
}

/**
 * The care & support ladder (docs/pricing-proposal-care-suite.md).
 * Every plan: optional, cancel anytime, full handoff within 5 business
 * days at no charge, client owns everything throughout. Quantities and
 * response times only — never outcomes.
 */
export const CARE_PLANS: CarePlan[] = [
  {
    id: 'hosted',
    name: 'Hosted',
    price: '$29/month',
    blurb: 'Your site runs itself; we keep the lights on.',
    includes: [
      'Hosting, SSL, daily backups, uptime monitoring',
      'Security and software updates',
      'Email support — replies within 2 business days',
      'No edits included; add them one-off, always quoted first',
    ],
  },
  {
    id: 'care',
    name: 'Care Plan',
    price: '$150/month',
    blurb: 'For owners who never want to think about the website again.',
    includes: [
      'Everything in Hosted',
      '3 content edits per month, done within 2 business days',
      'Support replies within 1 business day',
      'A monthly report: uptime, form submissions, what changed',
    ],
  },
];


export interface AddOn {
  name: string;
  price: string;
}

/** Attach to any plan, or buy one-off. */
export const ADD_ONS: AddOn[] = [
  { name: 'Extra content edit', price: '$25 (5-pack $100)' },
  { name: 'New page on an existing site', price: '$150 flat' },
  { name: 'Campaign / landing page', price: '$250 flat' },
  { name: 'Email deliverability setup (one-time)', price: '$100' },
];

/** Cheapest plan, for "from $X/month" copy — derived, never hardcode. */
export const CARE_PLAN_FLOOR = CARE_PLANS[0]!;
export const CARE_PLAN_DEFAULT = CARE_PLANS[1]!;

/**
 * The paid-services ladder (site-upsell-prompt.md, 2026-09-01). Only
 * cleared services appear — Tyler declared these deliverable (GHL-backed).
 * Every price is month-to-month, cancel anytime, 5-day handoff.
 */
export interface LadderService {
  id: string;
  hook: string;
  name: string;
  price: string;
  bundleNote?: string;
  blurb: string;
}

export const SERVICE_LADDER: LadderService[] = [
  {
    id: 'lead-capture',
    hook: 'Answer the calls you miss',
    name: 'Lead Capture System',
    price: '$297/month',
    blurb:
      'Missed calls get an instant text back. Website chats go straight to your phone. Every lead — call, text, chat, form — lands in one inbox with instant follow-up. Booking built in.',
  },
  {
    id: 'reputation',
    hook: 'Look as good as your work',
    name: 'Reputation Engine',
    price: '$197/month',
    bundleNote: '$97/month when added to Lead Capture',
    blurb:
      'A review request goes out by text after a job you mark complete. We draft the responses, you approve.',
  },
];

/** Names woven into the "why free" story. */
export const CLEARED_SERVICES: string[] = [
  'lead capture',
  'reviews & reputation',
  'hosting & site care',
];

export type ServiceStatus = 'live' | 'planned';

export interface Service {
  slug: string;
  name: string;
  status: ServiceStatus;
  navLabel?: string;
  summary?: string;
  headline?: string;
  metaDescription?: string;
}

export const serviceHref = (s: Pick<Service, 'slug'>) => `/services/${s.slug}/`;

/**
 * The service roadmap (see docs/SERVICES-CATALOG.md for meaning and
 * prerequisites). Only status "live" gets a detail page via
 * src/pages/services/[slug].astro + a body file in
 * src/components/services/. Under the free-site model nothing is currently
 * "live" — the free build and category-level ongoing services are presented
 * on /services/ directly. When a CLEARED_SERVICE deserves its own page,
 * flip it live here and add its body file.
 */
export const SERVICES: Service[] = [
  { slug: 'web-design', name: 'Custom websites', status: 'planned' },
  { slug: 'landing-pages', name: 'Landing pages', status: 'planned' },
  { slug: 'web-apps', name: 'Web apps', status: 'planned' },
  { slug: 'rescues', name: 'Website rescues & rebuilds', status: 'planned' },
  { slug: 'e-commerce', name: 'E-commerce builds', status: 'planned' },
  { slug: 'native-apps', name: 'Native mobile apps', status: 'planned' },
  { slug: 'technical-seo', name: 'Technical SEO', status: 'planned' },
  { slug: 'local-seo', name: 'Local SEO', status: 'planned' },
  { slug: 'ai-search', name: 'AI-search readiness', status: 'planned' },
  { slug: 'content', name: 'Content production', status: 'planned' },
  { slug: 'review-systems', name: 'Review systems', status: 'planned' },
  { slug: 'chat-agents', name: 'AI chat agents', status: 'planned' },
  { slug: 'phone-agents', name: 'AI phone agents', status: 'planned' },
  { slug: 'email-marketing', name: 'Email marketing', status: 'planned' },
  { slug: 'crm-setup', name: 'CRM setup & pipelines', status: 'planned' },
  { slug: 'marketing-automation', name: 'Marketing automation', status: 'planned' },
  { slug: 'ai-consulting', name: 'AI consulting', status: 'planned' },
  { slug: 'dashboards', name: 'Reporting dashboards', status: 'planned' },
  { slug: 'ad-infrastructure', name: 'Ad landing pages & tracking', status: 'planned' },
  { slug: 'ads-management', name: 'Ads management', status: 'planned' },
];

/** Everything the public site is allowed to show as a named detail page. */
export const LIVE_SERVICES: Service[] = SERVICES.filter(
  (s) => s.status === 'live'
);
