import type { Config } from "vike/types";

// https://vite-plugin-ssr.com/config
export default {
  passToClient: ["pageProps", "urlPathname", "urqlState"],
} satisfies Config;
