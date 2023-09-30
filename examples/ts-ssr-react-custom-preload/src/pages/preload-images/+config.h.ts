// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

const config = {
  // The config 'preloadStrategy' is a custom config we defined at ../../renderer/+config.ts
  preloadStrategy: "IMAGES",
} as Config;

export default config;
