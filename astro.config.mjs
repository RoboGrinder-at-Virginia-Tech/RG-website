import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteURL = new URL(process.env.SITE_URL || 'https://www.robogrinder.org');
siteURL.protocol = 'https:';
if (siteURL.hostname === 'robogrinder.org') siteURL.hostname = 'www.robogrinder.org';

export default defineConfig({
  site: siteURL.href,
  base: process.env.SITE_BASE || '/',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
