import react from "@vitejs/plugin-react";
import ssr, { UserConfig } from "vite-plugin-ssr/plugin";

export default {
  root: "./src",
  public: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
  ssr: {
    noExternal: ["styled-components", "@emotion/*"],
  },
} as UserConfig;
