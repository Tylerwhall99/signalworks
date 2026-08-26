/**
 * Single source of truth for brand constants, contact placeholders,
 * navigation, the free-build offer, and the service roadmap.
 * Copy edits here propagate site-wide.
 *
 * Before launch, replace: SITE_URL, CONTACT.phone, CONTACT.email,
 * CONTACT.address, CONTACT.formEndpoint (intake pipeline), and — when the
 * real numbers exist — FREE_BUILD.capacityPerMonth and CLEARED_SERVICES.
 */

// Real domain goes here before launch. Used for canonical URLs, sitemap, and structured data.
export const SITE_URL = 'https://signalworks.example';

export const BRAND = {
  name: 'Signalworks',
  tagline: 'Websites and apps that get service businesses found, called, and booked.',
  // Default meta description; individual pages override it.
  description:
    'Signalworks builds free, professional websites — home services businesses first (HVAC, plumbing, electrical, roofing, landscaping), every business welcome. You own it outright: domain, files, everything. Built in days with AI-assisted development.',
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
  /** Where the form endpoint should deliver submissions. DECISION 7 — unfilled. */
  notifyEmail: '',
} as const;

/** Optional analytics. Set a Plausible domain to inject the script site-wide. */
export const ANALYTICS = {
  plausibleDomain: '',
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
    'The pages your business actually needs — Home, Services, About, Contact, and whatever else earns its place',
    'Copy written from your intake answers — you talk, we write',
    'Mobile-first layout, tested on real phones',
    'Click-to-call, placed where thumbs go',
    'A contact form that reaches a real inbox',
    'Custom functionality where it helps — quote forms, booking buttons, service-area maps (sized to the draft window; bigger asks get a written timeline first)',
    'Basic on-page SEO hygiene: titles, descriptions, speed',
    'Google Business Profile connection',
    'One revision round — the "change it" pass for structure, layout, and what the site does',
    'Bug fixes free for 60 days after launch — if we broke it, we fix it, and it never uses your revision',
  ],
  notIncludedFree: [
    'Standalone web apps — booking systems, portals, internal tools — quoted per project',
    'Ongoing edits and new content — quoted plainly (bug fixes in the first 60 days are free)',
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
    id: 'lights-on',
    name: 'Lights On',
    price: '$29/month',
    blurb: 'Your site runs itself; we keep the lights on.',
    includes: [
      'Hosting, SSL, daily backups, uptime monitoring',
      'Software updates',
      'Bug coverage for what we built, extended while you subscribe',
      'Email support — replies within 2 business days',
      'No edits included; add them one-off, always quoted first',
    ],
  },
  {
    id: 'care',
    name: 'Care Plan',
    price: '$99/month',
    blurb: 'For owners who never want to think about the website again.',
    includes: [
      'Everything in Lights On',
      '2 content edits per month, done within 2 business days',
      'Support replies within 1 business day',
      'A monthly one-paragraph site note: uptime, form counts, anything needing attention',
    ],
  },
  {
    id: 'front-office',
    name: 'Front Office',
    price: '$249/month',
    blurb: 'For businesses whose site is a workhorse.',
    includes: [
      'Everything in Care Plan',
      '6 content edits per month; urgent edits same business day',
      'Up to 2 hours/month of small feature work',
      'Priority queue on everything',
      'Quarterly tune-up: speed check, content review call, Google Business Profile refresh',
    ],
  },
];

export const CUSTOM_RETAINER = {
  name: 'Custom retainer',
  price: 'quoted, from $500/month',
  blurb:
    'Multi-location companies, web-app maintenance, or varying monthly scope — scoped in writing per company, with a monthly plain-English statement of exactly what was done.',
} as const;

export interface AddOn {
  name: string;
  price: string;
}

/** Attach to any plan, or buy one-off. */
export const ADD_ONS: AddOn[] = [
  { name: 'Extra content edit', price: '$25 (5-pack $100)' },
  { name: 'New page on an existing site', price: '$150 flat' },
  { name: 'Campaign / landing page', price: '$250 flat' },
  { name: 'Email deliverability setup (one-time)', price: '$99' },
];

/** Cheapest plan, for "from $X/month" copy — derived, never hardcode. */
export const CARE_PLAN_FLOOR = CARE_PLANS[0]!;
export const CARE_PLAN_DEFAULT = CARE_PLANS[1]!;

/**
 * Paid ongoing services the site may NAME. DECISION 6 — unfilled. A service
 * goes in this list only when it passes the two-week test: delivery could
 * begin within two weeks of a client saying yes. While empty, the site says
 * "ongoing growth services" at category level and names nothing.
 */
export const CLEARED_SERVICES: string[] = [];

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
