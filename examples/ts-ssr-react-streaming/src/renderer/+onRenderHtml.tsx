// https://vite-plugin-ssr.com/onRenderHtml
import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vike/server";
import { PageLayout } from "./PageLayout";
import { PageContext } from "./types";

const onRenderHtml = async (pageContext: PageContext) => {
  const { Page, pageProps, userAgent } = pageContext;
  const stream = await renderToStream(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    { userAgent },
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
