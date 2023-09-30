import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { PageLayout } from "./PageLayout";
import { PageContextServer } from "./types";

const onRenderHtml = (pageContext: PageContextServer) => {
  const { Page, routeParams } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page routeParams={routeParams} />
    </PageLayout>,
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
