// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  // ...
  compressHTML: false,
  site: 'http://localhost:4321',
  integrations: [sitemap(),
    AstroPWA({
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
    }),
  ],
});