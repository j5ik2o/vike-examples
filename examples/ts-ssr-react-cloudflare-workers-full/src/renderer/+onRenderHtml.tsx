// https://vite-plugin-ssr.com/onRenderHtml

import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vike/server";
import { PageLayout } from "./PageLayout";
import { PageContextServer } from "./types";

const onRenderHtml = async (pageContext: PageContextServer) => {
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
      <head>
        <link rel="icon" href="data:,">
      </head>  
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
