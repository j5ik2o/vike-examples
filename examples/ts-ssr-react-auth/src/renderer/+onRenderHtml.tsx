import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import LayoutDefault from "../layouts/LayoutDefault";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

const onRenderHtml = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageContextProvider pageContext={pageContext}>
      <LayoutDefault>
        <Page {...pageProps} />
      </LayoutDefault>
    </PageContextProvider>
  );
  const viewHtml = dangerouslySkipEscape(renderToString(page));

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
