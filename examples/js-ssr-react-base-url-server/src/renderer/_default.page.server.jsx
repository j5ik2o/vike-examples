import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";
// Assets deployed to a CDN:
//  - logo.svg
//  - manifest.json
import logoUrl from "./logo.svg";

const passToClient = ["pageProps"];

const render = (pageContext) => {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>,
  );

  // The assets base URL is automatically injected to `logoUrl`.
  // We can also manually reference and inject the assets base URL:
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

export { passToClient, render };
