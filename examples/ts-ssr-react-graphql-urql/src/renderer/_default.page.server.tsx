import "isomorphic-fetch";
import ReactDOMServer from "react-dom/server";
import prepass from "react-ssr-prepass";
import {
  Provider,
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ["pageProps", "urlPathname", "urqlState"];

const render = async (pageContext: PageContextBuiltIn & PageContext) => {
  const { pageHtml } = pageContext;

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

const onBeforeRender = async (
  pageContext: PageContextBuiltIn & PageContext,
) => {
  const { Page, pageProps } = pageContext;

  const ssr = ssrExchange({ initialState: undefined });
  const client = createClient({
    url: "https://countries.trevorblades.com",
    exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    suspense: true,
    fetch,
  });

  // This is the first pass, due to suspense: true it will work with prepass and populate the initial cache
  await prepass(
    <Provider value={client}>
      <Page {...pageProps} />
    </Provider>,
  );
  // After we can construct an initial html with renderToString as our cache is hydrated
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Provider value={client}>
        <Page {...pageProps} />
      </Provider>
    </PageShell>,
  );

  const urqlState = ssr.extractData();

  return {
    pageContext: {
      pageHtml,
      urqlState,
    },
  };
};

export { onBeforeRender, passToClient, render };
