import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig } from "vite";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
} as UserConfig;
