import { render } from "vite-plugin-ssr/abort";

const guard = (pageContext) => {
  if (!pageContext.user) {
    throw render("/login");
  }
};

export default guard;
