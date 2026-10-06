import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://robogrinder.org',
  base: process.env.SITE_BASE || '/',
  output: 'static',
  integrations: [sitemap()],
});
