// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { getStore } from "./store";
import { PageContextClient } from "./types";

const onRenderClient = async (pageContext: PageContextClient) => {
  const store = getStore(pageContext.PRELOADED_STATE);
  const { Page } = pageContext;
  // We initilaize the store on every render because we use Server Routing. If we use Client Routing, then we should initialize the store only once instead.
  // (See https://vite-plugin-ssr.com/server-routing-vs-client-routing for more information about Client Routing and Server Routing.)
  const reactRootElem = document.getElementById("react-root");

  if (!reactRootElem) {
    throw new Error("Missing #react-root");
  }

  hydrateRoot(
    reactRootElem,
    <Provider store={store}>
      <Page />
    </Provider>,
  );
};

export default onRenderClient;
