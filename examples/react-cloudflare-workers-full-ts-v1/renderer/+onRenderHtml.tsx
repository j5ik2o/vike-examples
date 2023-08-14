// https://vite-plugin-ssr.com/onRenderHtml

import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onRenderHtml = async (pageContext: any) => {
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
