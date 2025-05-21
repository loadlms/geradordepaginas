// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  site: 'https://example.com',
  base: '/',
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      port: 4321,
      strictPort: true,
    }
  }
});
