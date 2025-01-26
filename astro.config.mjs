// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    site: 'https://ferrywl.to',
    integrations: [mdx(), sitemap(), alpinejs()],
});