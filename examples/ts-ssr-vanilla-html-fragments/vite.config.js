import ssr from "vite-plugin-ssr/plugin";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [ssr()],
};
