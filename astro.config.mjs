// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: once this moves off GitHub Pages onto ljsolutions.com, change `site` back
  // to 'https://ljsolutions.com' and delete the `base` line entirely.
  site: 'https://mundanesleet.github.io',
  base: '/LJ-Solutions',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
