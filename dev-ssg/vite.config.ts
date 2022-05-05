import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    Pages(),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md: any) {
        md.use(require("markdown-it-abbr"));
        md.use(require("markdown-it-anchor"));
        md.use(require("markdown-it-deflist"));
        md.use(require("markdown-it-emoji"));
        md.use(require("markdown-it-footnote"));
        md.use(require("markdown-it-highlightjs"));
        md.use(require("markdown-it-ins"));
        md.use(require("markdown-it-mark"));
        md.use(require("markdown-it-sub"));
        md.use(require("markdown-it-sup"));
        md.use(require("markdown-it-task-lists"));
        md.use(require("markdown-it-toc-done-right"));
      },
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      "@": resolve(__dirname, "./src/components"),
    },
  },
  ssgOptions: {
    mock: true,
    format: 'cjs',
  },
});
