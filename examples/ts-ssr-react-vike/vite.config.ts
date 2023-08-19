import react from "@vitejs/plugin-react";
import { UserConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
  optimizeDeps: { include: ["cross-fetch", "react/jsx-runtime"] },
} satisfies UserConfig;
