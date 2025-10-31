// @ts-nocheck
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from "@vite-pwa/astro";

import { targetBlank } from './src/plugins/targetBlank';

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import favicons from "astro-favicons";

import netlify from '@astrojs/netlify';
//import tailwindcss from "@tailwindcss/vite";

import remarkLint from 'remark-lint';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';

export default defineConfig({
  // ...
  base: '/',
  output: 'server',
  // adapter: node({
  //   mode: "standalone",
  // }),
  server: {
    headers: {
      'Content-Type': 'text/html;charset=utf-8',
    },
  },
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'https://stevehora.com' }]],
    remarkPlugins: [
    remarkLint,
    [remarkLintMaximumLineLength, 80] // Sets the line length limit to 80
  ],
},

  compressHTML: false,
  site: 'https://stevehora.com',

  integrations: [
    sitemap(), mdx(), react(), favicons(),
    AstroPWA({
        manifestFilename: 'manifest.json',
        manifest: {
          $schema: 'https://json.schemastore.org/web-manifest-combined.json',
          id: 'astrology',
          name: 'Vedic Astrology',
          short_name: 'Vedic Astrology',
          description: 'A Vedic Astrology App',
          orientation: 'portrait',
          display: 'standalone',
          theme_color: '#ff5d01',
          background_color: '#11191f',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
          ]
        },
        mode: "production",
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg"],
        workbox: {
          maximumFileSizeToCacheInBytes: 4194304, 
          navigateFallback: "/",
          globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
        },
        experimental: {
          directoryAndTrailingSlashHandler: true,
        },
      }),
  ],
  adapter: netlify(),
  vite: {
    //plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@ionic/react', '@ionic/core'],
      // include: ['@ionic/react'],
      // Optional: Add other problematic packages if needed
      exclude: ['@ionic/core/components'],
    },
},
});