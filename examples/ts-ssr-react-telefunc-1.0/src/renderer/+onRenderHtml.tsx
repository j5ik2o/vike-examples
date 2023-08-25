// https://vite-plugin-ssr.com/onRenderHtml

import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";
import { PageContextServer } from "./types";

const onRenderHtml = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );
  const pageHtml = renderToString(page);

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
