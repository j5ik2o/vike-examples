import vikeReact from "vike-react";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";

export default {
  Layout,
  passToClient: [
    "userFullName",
    // https://github.com/vikejs/vike-react/issues/4
    "pageProps",
    "title",
  ],
  extends: vikeReact,
} satisfies Config;
