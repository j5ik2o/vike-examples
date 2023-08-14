import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { render } from "vite-plugin-ssr/abort";

import { names } from "./names";

const onBeforeRender = async (pageContext: PageContextBuiltIn) => {
  const { name } = pageContext.routeParams;
  if (name !== "anonymous" && !names.includes(name)) {
    throw render(404, `Unknown name: ${name}.`);
  }
  const pageProps = { name };
  return {
    pageContext: {
      pageProps,
    },
  };
};

export default onBeforeRender;