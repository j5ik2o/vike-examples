// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["pageProps"],
  clientRouting: true,
  hydrationCanBeAborted: true,
} satisfies Config;
