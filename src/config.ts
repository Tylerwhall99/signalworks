/**
 * Single source of truth for brand constants, contact placeholders,
 * navigation, and pricing. Copy edits here propagate site-wide.
 *
 * Before launch, replace: SITE_URL, CONTACT.phone, CONTACT.email,
 * CONTACT.address, and (optionally) CONTACT.formEndpoint.
 */

// Real domain goes here before launch. Used for canonical URLs, sitemap, and structured data.
export const SITE_URL = 'https://signalworks.example';

export const BRAND = {
  name: 'Signalworks',
  tagline: 'Websites and apps that get service businesses found, called, and booked.',
  // Default meta description; individual pages override it.
  description:
    'Signalworks builds custom websites and web apps for service businesses. Solo builder based in Los Angeles, working with clients nationwide.',
} as const;

export const CONTACT = {
  phone: 'PHONE_PLACEHOLDER',
  email: 'EMAIL_PLACEHOLDER',
  address: 'ADDRESS_PLACEHOLDER',
  // Form POST endpoint (e.g. Formspree/Basin URL). Leave empty to hide the
  // contact form and show direct contact details only.
  formEndpoint: '',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Process', href: '/process/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
];

export const NAV_CTA: NavItem = { label: 'Get a quote', href: '/contact/' };

export interface Service {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  href: string;
}

/**
 * Services currently offered. Future services are added here as siblings
 * (slug 'seo', 'automation', ...) with a matching page file in
 * src/pages/services/ — the hub page, nav, footer, and sitemap pick them
 * up from this array. Nothing else needs to change.
 */
export const SERVICES: Service[] = [
  {
    slug: 'web-design',
    title: 'Custom websites & web apps',
    navLabel: 'Websites & web apps',
    summary:
      'A fast, clear website built around the jobs you want more of — or a web app that replaces the spreadsheet holding your operation together.',
    href: '/services/web-design/',
  },
];

export interface PricingPackage {
  id: string;
  name: string;
  /** Display price, e.g. "$1,900" or "from $9,000". Edit here only. */
  price: string;
  priceNote: string;
  timeline: string;
  summary: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const PRICING: PricingPackage[] = [
  {
    id: 'one-page',
    name: 'One-Page Site',
    price: '$1,900',
    priceNote: 'flat, fixed quote',
    timeline: '5 business days from kickoff',
    summary:
      'One focused page that says what you do, where you work, and how to reach you. Built to load fast and turn visits into calls.',
    includes: [
      'One custom-designed page, written and built for your business',
      'Copywriting included — you talk, I write',
      'Click-to-call and contact form',
      'Mobile-first build, tested on real phones',
      'Basic on-page SEO: titles, descriptions, structured data',
      'Hosting setup on fast static hosting (often $0/month)',
      'A 30-minute handoff call and a plain-English owner’s guide',
    ],
    ctaLabel: 'Start a one-pager',
    ctaHref: '/contact/',
  },
  {
    id: 'business-site',
    name: 'Business Site',
    price: '$4,800',
    priceNote: 'flat, fixed quote',
    timeline: '2–3 weeks from kickoff',
    summary:
      'A full site with a page for each service you want more of. The standard choice for established service businesses.',
    includes: [
      'Up to 8 custom pages, including a page per core service',
      'Copywriting included for every page',
      'Contact forms, click-to-call, and a quote-request flow',
      'Mobile-first build, tested on real phones',
      'On-page SEO: titles, descriptions, structured data, sitemap',
      'Google Business Profile checklist for your listing',
      'Hosting setup, redirects from your old site, launch support',
      'A recorded video walkthrough of how to run your site',
    ],
    ctaLabel: 'Start a business site',
    ctaHref: '/contact/',
  },
  {
    id: 'web-app',
    name: 'Web App',
    price: 'from $9,500',
    priceNote: 'fixed quote after a scoping call',
    timeline: 'scoped per project; most ship in 3–6 weeks',
    summary:
      'Custom software for the part of your operation that outgrew spreadsheets — booking, quoting, scheduling, client portals.',
    includes: [
      'A scoping call and a written spec before any money changes hands',
      'A fixed quote against that spec — no hourly meter',
      'Custom build, no license fees on someone else’s platform',
      'You own the code and the accounts, from day one',
      'Training for you and your staff, recorded',
      '30 days of post-launch fixes included',
    ],
    ctaLabel: 'Scope a web app',
    ctaHref: '/contact/',
  },
];

export const CARE_PLAN = {
  name: 'Site Care',
  price: '$95/month',
  priceNote: 'optional, cancel anytime',
  summary:
    'For owners who never want to think about their website again. Not required — every site ships with a guide so you can run it yourself.',
  includes: [
    'Content edits within 2 business days — just email what changed',
    'Software updates, backups, and uptime monitoring',
    'A short monthly note on what changed',
  ],
} as const;
