// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["pageProps", "urlPathname", "urqlState"],
} satisfies Config;
