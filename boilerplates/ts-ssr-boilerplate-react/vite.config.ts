import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  root: "./src",
  public: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
};

export default config;
