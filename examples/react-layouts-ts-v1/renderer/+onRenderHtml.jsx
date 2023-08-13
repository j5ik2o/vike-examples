// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml;

import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";

async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
