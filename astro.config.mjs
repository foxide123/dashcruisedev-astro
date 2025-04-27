// @ts-check
import {loadEnv} from "vite";
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare"

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

const mode = process.env.NODE_ENV ?? "development";
const { SITE_URL } = loadEnv(mode, process.cwd(), "");

const isProduction = process.env.NODE_ENV === 'production'
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('mode:', mode);

const siteUrl = SITE_URL ?? "https://astro.dashcruisedev.com"


// https://astro.build/config
 export default defineConfig({
  site: siteUrl,
  prefetch: true,
  trailingSlash: "ignore",
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: 'manual'
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    ssr: {
      resolve: {
        alias: {
          'react-dom/server': isProduction ? 'react-dom/server.edge' : 'react-dom/server',
        }
      }
    },
    resolve: {
      alias: {
        '@': new URL("./src", import.meta.url).toString().replace(/^file:\/+/, '/'),
        'react-dom/server': isProduction ? 'react-dom/server.edge': ''
      },
    },

    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap(), react()],
   adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
});