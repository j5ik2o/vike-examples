// https://vite-plugin-ssr.com/onRenderHtml
import type { PageContext } from "#root/types";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

const onRenderHtml = (pageContext: PageContext) => {
  const { Page } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page />
    </PageLayout>,
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
