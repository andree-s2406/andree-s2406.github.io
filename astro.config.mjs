// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
  site: 'https://andree-s2406.github.io',
  base,
  output: 'static',
});
