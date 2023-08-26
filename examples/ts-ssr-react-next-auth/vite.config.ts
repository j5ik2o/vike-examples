import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
});
