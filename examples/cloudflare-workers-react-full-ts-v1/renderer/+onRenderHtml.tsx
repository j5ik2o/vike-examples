// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml;

import React from "react";
import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

async function onRenderHtml(pageContext: any) {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>
  );

  // Streaming is optional and we can use renderToString() instead
  const stream = await renderToStream(page, {
    userAgent: pageContext.userAgent,
  });

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}
