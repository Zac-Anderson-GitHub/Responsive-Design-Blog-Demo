import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'about.html', dest: '' },
        { src: 'article.html', dest: '' },
      ],
    }),
  ],
});