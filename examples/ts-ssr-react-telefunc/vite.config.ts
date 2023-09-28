import react from "@vitejs/plugin-react";
import { telefunc } from "telefunc/vite";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr(), telefunc()],
});
