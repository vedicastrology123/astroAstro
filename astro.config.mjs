// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from "@vite-pwa/astro";

import { targetBlank } from './src/plugins/targetBlank';

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

export default defineConfig({
  // ...
    markdown: {
    rehypePlugins: [[targetBlank, { domain: 'localhost:4321' }]],
  },
  compressHTML: false,
  site: 'http://localhost:4321',
  integrations: [sitemap(), AstroPWA({
    manifest: {
      name: "Vedic Astrology",
      short_name: "Vedic Astrology",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/static/apple-icon-180x180.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/static/shri-chakra-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      // You can use a generateSW strategy for automatic service worker generation
      // or injectManifest to provide your own.
      navigateFallback: "/",
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
    },
  }), mdx(), react()],
});