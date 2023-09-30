// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["pageProps", "routeParams"],
  // https://vite-plugin-ssr.com/meta
  meta: {
    // Create new config 'Layout'
    Layout: {
      env: "server-and-client",
    },
  },
  clientRouting: true,
  hydrationCanBeAborted: true,
} satisfies Config;
