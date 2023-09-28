// https://vite-plugin-ssr.com/onRenderHtml
import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { PageLayout } from "./PageLayout";
import { PageContext } from "./types";

const onRenderHtml = async (pageContext: PageContext) => {
  const { Page } = pageContext;
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>,
    ),
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
