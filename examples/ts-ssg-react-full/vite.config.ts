import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import ssr from "vite-plugin-ssr/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    ssr({
      prerender: true,
    }),
    react(),
    mdx(),
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  // (The 'react/jsx-runtime' entry is not needed in Vite 3 anymore.)
  optimizeDeps: { include: ["cross-fetch", "react/jsx-runtime"] },
});
