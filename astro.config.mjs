import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    site: 'https://taml5.github.io',
    markdown: {
     remarkPlugins: [remarkMath],
     rehypePlugins: [rehypeKatex],
   },
});
