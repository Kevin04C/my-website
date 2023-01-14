import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
      syntaxHighlight: 'shiki',
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // theme: 'material-theme-darker',
      theme: 'one-dark-pro',
    },
  },
});
