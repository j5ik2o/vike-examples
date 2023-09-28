import { render } from "vike/abort";
import type { PageContextBuiltIn } from "vike/types";

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
