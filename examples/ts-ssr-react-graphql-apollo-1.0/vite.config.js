const react = require("@vitejs/plugin-react");
const ssr = require("vite-plugin-ssr/plugin");

const config = {
  root: "./src",
  publicDir: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), ssr()],
  ssr: {
    noExternal: ["@apollo/client"],
  },
};

export default config;
