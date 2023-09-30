// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  passToClient: ["apolloIntialState"],
} satisfies Config;
