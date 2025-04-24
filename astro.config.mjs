// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    fallback: {
      de: "en"
    },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite"
    }
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname
      }
    },

    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()],
  /* adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }), */
});