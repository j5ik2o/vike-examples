// https://vite-plugin-ssr.com/onBeforeRender
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { getStore } from "./store";

const onBeforeRender = async (pageContext) => {
  const store = getStore();

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
