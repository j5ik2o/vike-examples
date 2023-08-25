// https://vite-plugin-ssr.com/config
import { Config } from "vite-plugin-ssr/types";

const config = {
  // The config 'preloadStrategy' is a custom config we defined at ../../renderer/+config.ts
  preloadStrategy: "DISABLED",
} as Config;

export default config;
