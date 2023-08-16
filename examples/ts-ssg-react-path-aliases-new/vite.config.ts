import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "#root": __dirname,
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
};

export default config;
