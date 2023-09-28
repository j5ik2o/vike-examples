import type { Config } from "vike/types";

// https://vite-plugin-ssr.com/config
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
