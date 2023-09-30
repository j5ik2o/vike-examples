// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  // https://vite-plugin-ssr.com/passToClient
  passToClient: ["pageProps"],
} satisfies Config;
