import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';

let lastmod = new Date();
try {
  lastmod = new Date(execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim());
} catch {
  lastmod = new Date();
}

// https://astro.build/config
export default defineConfig({
  site: 'https://dennisgarcia.dev',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/robots.txt') && !page.endsWith('/llms.txt'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      lastmod,
    }),
  ],
});
