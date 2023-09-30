// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["pageProps", "title"],
  clientRouting: true,
  hydrationCanBeAborted: true,
} satisfies Config;
