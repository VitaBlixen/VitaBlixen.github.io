import { defineConfig } from 'astro/config';

export default defineConfig({
  // Udskift med dit rigtige GitHub Pages-link, når repoet er oprettet:
  // site: 'https://<brugernavn>.github.io',
  i18n: {
    locales: ['en', 'da'],
    defaultLocale: 'en',
    routing: {
      // Engelsk ligger i roden, dansk kommer senere under /da/
      prefixDefaultLocale: false,
    },
  },
});
