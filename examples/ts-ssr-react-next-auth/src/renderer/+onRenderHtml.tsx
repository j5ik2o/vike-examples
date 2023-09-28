import { SessionProvider } from "next-auth/react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { PageLayout } from "./PageLayout";
import logoUrl from "./logo.svg";
import { PageContextServer } from "./types";

const onRenderHtml = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <SessionProvider>
        <Page {...pageProps} />
      </SessionProvider>
    </PageLayout>,
  );

  // See https://github.com/brillout/vite-plugin-ssr#html-head
  const { exports } = pageContext;
  const { documentProps } = exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";

  return escapeInject`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
