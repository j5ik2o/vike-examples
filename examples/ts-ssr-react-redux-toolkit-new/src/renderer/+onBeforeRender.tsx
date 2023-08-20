// サーバーサイド/クライアントサイド実行
// https://vite-plugin-ssr.com/onBeforeRender
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { getStore } from "./store";
import type { PageContext } from "./types";
// import { PageContextProvider } from "./usePageContext";

const onBeforeRender = async (pageContext: PageContext) => {
  const store = getStore({ value: 10 });
  console.log(`onBeforeRender: ${JSON.stringify(store.getState())}`);

  const { Page } = pageContext;
  const pageHtml = renderToString(
    //    <PageContextProvider pageContext={pageContext}>
    <Provider store={store}>
      <Page />
    </Provider>,
    //    </PageContextProvider>,
  );

  const PRELOADED_STATE = store.getState().counter;
  console.log(`PRELOADED_STATE = ${JSON.stringify(PRELOADED_STATE)}`);

  return {
    pageContext: {
      pageHtml,
      PRELOADED_STATE,
    },
  };
};

export default onBeforeRender;
