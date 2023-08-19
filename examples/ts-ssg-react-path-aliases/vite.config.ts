import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

const config = defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // We prefix path aliases with '#', see https://vite-plugin-ssr.com/path-aliases#vite
      "#root": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    ssr({
      prerender: true,
    }),
  ],
});

export default config;
