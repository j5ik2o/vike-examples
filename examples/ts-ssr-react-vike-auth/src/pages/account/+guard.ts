import { render } from "vike/abort";
import { PageContextServer } from "vike/types";

const guard = (pageContext: PageContextServer & PageContextCustom) => {
  if (!pageContext.user) {
    throw render("/login");
  }
};

export default guard;
