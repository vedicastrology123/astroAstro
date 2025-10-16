// @ts-nocheck
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from "@vite-pwa/astro";
import manifest from "./webmanifest.json";

import { targetBlank } from './src/plugins/targetBlank';

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import favicons from "astro-favicons";



export default defineConfig({
  // ...
    markdown: {
    rehypePlugins: [[targetBlank, { domain: 'localhost:4321' }]],
  },
  compressHTML: false,
  site: 'http://localhost:4321',
  integrations: [
    sitemap(), mdx(), react(), favicons(),
    AstroPWA({
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
        manifest: manifest as manifestOptions,
      }),
  ],
});