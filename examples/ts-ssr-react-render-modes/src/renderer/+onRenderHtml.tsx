// https://vite-plugin-ssr.com/onRenderHtml
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";
import { PageContextServer } from "./types";

const onRenderHtml = (pageContext: PageContextServer) => {
  let pageHtml;
  if (!pageContext.Page) {
    // SPA
    pageHtml = "";
  } else {
    // SSR / HTML-only
    const { Page, pageProps } = pageContext;
    pageHtml = ReactDOMServer.renderToString(
      <PageLayout>
        <Page {...pageProps} />
      </PageLayout>,
    );
  }

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-container">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
