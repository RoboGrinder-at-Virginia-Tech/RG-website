import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteURL = new URL(process.env.SITE_URL || 'https://robogrinder.org');
siteURL.protocol = 'https:';
if (siteURL.hostname === 'www.robogrinder.org') siteURL.hostname = 'robogrinder.org';

export default defineConfig({
  site: siteURL.href,
  base: process.env.SITE_BASE || '/',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
