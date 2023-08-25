import { PageContextServer } from "vike-react/dist/renderer/types";
import { render } from "vite-plugin-ssr/abort";

const guard = (pageContext: PageContextServer & PageContextCustom) => {
  if (!pageContext.user) {
    throw render("/login");
  }
};

export default guard;
