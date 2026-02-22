import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://raschomakuin.github.io",
  base: "/raschomakuin.github.io-inmomanu/",
  integrations: [tailwind()],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
