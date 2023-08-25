import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "#root": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    ssr({
      prerender: true,
    }),
  ],
  optimizeDeps: {
    include: ["react-dom/client"],
  },
});

export default config;
