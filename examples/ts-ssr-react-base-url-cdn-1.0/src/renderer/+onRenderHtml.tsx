// https://vite-plugin-ssr.com/onRenderHtml
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";
// Assets deployed to a CDN:
//  - logo.svg
//  - manifest.json
import logoUrl from "./logo.svg";
import { PageContextServer } from "./types";

const onRenderHtml = (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>,
  );

  // Vite automatically injects the Base URL to `logoUrl`.
  // We can also manually inject the Base URL:
  const manifestUrl = import.meta.env.BASE_ASSETS + "manifest.json";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <link rel="manifest" href="${manifestUrl}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
