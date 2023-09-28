import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

const config = defineConfig({
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "#root/": `${__dirname}/src/`,
    },
  },
  plugins: [
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
