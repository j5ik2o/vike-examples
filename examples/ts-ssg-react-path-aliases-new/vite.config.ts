import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import * as path from "path";

const config = defineConfig({
  root: "./src",
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
