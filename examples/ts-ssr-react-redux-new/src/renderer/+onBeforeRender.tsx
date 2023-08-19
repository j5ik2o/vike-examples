// https://vite-plugin-ssr.com/onBeforeRender
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { getStore } from "./store";
import type { PageContext } from "./types";
import type {
  /*
            // When using Client Routing https://vite-plugin-ssr.com/clientRouting
            PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
            /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  //*/
} from "vite-plugin-ssr/types";

const onBeforeRender = async (
  pageContext: PageContextBuiltInClient & PageContext,
) => {
  const store = getStore(pageContext.PRELOADED_STATE);

  const { Page } = pageContext;
  const pageHtml = renderToString(
    <Provider store={store}>
      <Page />
    </Provider>,
  );

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState();

  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml,
    },
  };
};

export default onBeforeRender;
