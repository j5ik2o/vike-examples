import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

const passToClient = ["pageProps"];

const render = async (pageContext) => {
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

// See https://vite-plugin-ssr.com/render-hook
export { render };
// See https://vite-plugin-ssr.com/data-fetching
export { passToClient };
