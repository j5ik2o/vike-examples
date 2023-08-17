import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { getStore } from "./store";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

const passToClient = ["PRELOADED_STATE"];

const render = async (pageContext) => {
  const { pageHtml } = pageContext;
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

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

export { render, onBeforeRender, passToClient };
