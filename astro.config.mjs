// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ...
  compressHTML: false,
  site: 'http://localhost:4321',
  integrations: [sitemap()],
});