import { Config } from "vike/types";

// https://vite-plugin-ssr.com/config
export default {
  passToClient: ["pageProps"],
  clientRouting: true,
  hydrationCanBeAborted: true,
} satisfies Config;
