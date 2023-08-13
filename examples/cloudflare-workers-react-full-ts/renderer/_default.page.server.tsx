import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ["pageProps"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const render = async (pageContext: any) => {
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

export { render, passToClient };