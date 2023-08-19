// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import type {
  /*
// When using Client Routing https://vite-plugin-ssr.com/clientRouting
PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
/*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";
import {set, store} from "./store";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

const onRenderClient = async (
  pageContext: PageContextBuiltInClient & PageContext,
) => {
  console.log(
    `onRenderClient: store.getState() = ${JSON.stringify(store.getState())}`,
  );
  console.log(`useEffect: ${JSON.stringify(pageContext.PRELOADED_STATE)}`);
  store.dispatch(set(pageContext.PRELOADED_STATE.value));

  const { Page } = pageContext;
  // We initilaize the store on every render because we use Server Routing. If we use Client Routing, then we should initialize the store only once instead.
  // (See https://vite-plugin-ssr.com/server-routing-vs-client-routing for more information about Client Routing and Server Routing.)
  const reactRootElem = document.getElementById("react-root");

  if (!reactRootElem) {
    throw new Error("Missing #react-root");
  }

  hydrateRoot(
    reactRootElem,
    <PageContextProvider pageContext={pageContext}>
      <Provider store={store}>
        <Page />
      </Provider>
    </PageContextProvider>,
  );
};

export default onRenderClient;
