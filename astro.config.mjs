import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vitablixen.github.io',
  i18n: {
    locales: ['en', 'da'],
    defaultLocale: 'en',
    routing: {
      // Engelsk ligger i roden, dansk kommer senere under /da/
      prefixDefaultLocale: false,
    },
  },
});
