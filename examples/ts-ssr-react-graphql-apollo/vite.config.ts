import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssr from "vike/plugin";

export default defineConfig({
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
  ssr: {
    noExternal: ["@apollo/client"],
  },
});
