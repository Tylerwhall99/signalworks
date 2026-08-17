import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
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
