import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

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
