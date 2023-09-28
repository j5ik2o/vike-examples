import type { Config } from "vike/types";

// https://vite-plugin-ssr.com/config
export default {
  // https://vite-plugin-ssr.com/meta
  meta: {
    Page: {
      env: "server-only",
    },
  },
} satisfies Config;
