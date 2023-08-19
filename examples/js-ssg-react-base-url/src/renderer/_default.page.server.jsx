import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";
// Vite automatically injects the Base URL to `logoUrl`.
import logoUrl from "./logo.svg";

const passToClient = ["pageProps"];

const render = (pageContext) => {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>,
  );

  // For assets living `public/`, we need to manually inject the Base URL:
  const manifestUrl = normalize(import.meta.env.BASE_URL + "/manifest.json");

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

const normalize = (url) => {
  return "/" + url.split("/").filter(Boolean).join("/");
};

export { passToClient, render };
