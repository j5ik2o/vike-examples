import type { Config } from "vike/types";

// https://vite-plugin-ssr.com/config
export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  passToClient: ["pageProps"],
} satisfies Config;
