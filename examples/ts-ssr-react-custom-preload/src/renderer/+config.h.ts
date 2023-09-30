// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["pageProps"],
  // https://vite-plugin-ssr.com/meta
  meta: {
    // Create new config 'preloadStrategy'
    preloadStrategy: {
      env: "server-only",
    },
  },
} satisfies Config;
