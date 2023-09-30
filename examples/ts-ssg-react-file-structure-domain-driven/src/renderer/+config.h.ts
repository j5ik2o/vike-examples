// https://vite-plugin-ssr.com/config
import { Config } from "vike/types";

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  passToClient: ["routeParams"],
} satisfies Config;
