// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  clientRouting: true,
  passToClient: ["pageProps", "PRELOADED_STATE"],
  hydrationCanBeAborted: true,
} satisfies Config;
