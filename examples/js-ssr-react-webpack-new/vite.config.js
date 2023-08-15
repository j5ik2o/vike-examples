import ssr from "vite-plugin-ssr/plugin";

export default {
  root: "./src",
  public: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [ssr()],
};
