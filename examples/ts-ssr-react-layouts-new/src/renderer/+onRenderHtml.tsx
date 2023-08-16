// https://vite-plugin-ssr.com/onRenderHtml
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

async function onRenderHtml(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}

export default onRenderHtml;
