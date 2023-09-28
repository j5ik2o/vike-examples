import { render } from "vike/abort";
import { PageContextCustom, PageContextServer } from "../../renderer/types";

const guard = (pageContext: PageContextServer & PageContextCustom) => {
  if (!pageContext.user) {
    throw render("/login");
  }
};

export default guard;
