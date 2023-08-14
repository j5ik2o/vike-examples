import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  root: "./src",
  public: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: "/some/base-url",
  plugins: [react(), ssr({ prerender: true })],
};
