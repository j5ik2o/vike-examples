// サーバーサイド/クライアントサイド実行
// https://vite-plugin-ssr.com/onBeforeRender
import { renderToString } from "react-dom/server";
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

const onBeforeRender = async (
  pageContext: PageContextBuiltInClient & PageContext,
) => {
  console.log(`onBeforeRender: ${JSON.stringify(store.getState())}`);
  const { Page } = pageContext;
  const pageHtml = renderToString(
    <PageContextProvider pageContext={pageContext}>
      <Provider store={store}>
        <Page />
      </Provider>
    </PageContextProvider>,
  );

  return {
    pageContext: {
      pageHtml,
    },
  };
};

export default onBeforeRender;
