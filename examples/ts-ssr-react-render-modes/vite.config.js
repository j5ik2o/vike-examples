import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";

export default {
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
};
