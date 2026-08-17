import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  // Demo sample sites are shareable but not indexable or sitemapped.
  integrations: [sitemap({ filter: (page) => !page.includes('/demos/') })],
  // Retired URLs from the pre-free-site drafts.
  redirects: {
    '/pricing/': '/services/',
    '/process/': '/#how-it-works',
    '/services/web-design/': '/services/',
    '/services/landing-pages/': '/services/',
    '/services/web-apps/': '/services/',
    '/services/rescues/': '/services/',
  },
});
