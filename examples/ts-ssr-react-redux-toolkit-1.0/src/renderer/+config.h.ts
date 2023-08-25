import type { Config } from "vite-plugin-ssr/types";

export default {
  passToClient: ["pageProps", "PRELOADED_STATE"],
  hydrationCanBeAborted: true,
} satisfies Config;
