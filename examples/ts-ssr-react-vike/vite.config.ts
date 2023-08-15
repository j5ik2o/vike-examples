import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
  optimizeDeps: { include: ["cross-fetch", "react/jsx-runtime"] },
} satisfies UserConfig;
