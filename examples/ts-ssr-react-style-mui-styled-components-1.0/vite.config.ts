import react from "@vitejs/plugin-react";
import ssr, { UserConfig } from "vite-plugin-ssr/plugin";

const isProd = process.env.NODE_ENV === "production";

const noExternal: string[] = [];
if (isProd) {
  noExternal.push(
    ...[
      // MUI needs to be pre-processed by Vite in production: https://github.com/brillout/vite-plugin-ssr/discussions/901
      "@mui/base",
      "@mui/icons-material",
      "@mui/material",
      "@mui/utils",
      "@mui/styled-engine",
      "styled-components",
    ],
  );
}

export default {
  root: "./src",
  public: "./src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  plugins: [react(), ssr()],
  ssr: {
    noExternal,
  },
} as UserConfig;
