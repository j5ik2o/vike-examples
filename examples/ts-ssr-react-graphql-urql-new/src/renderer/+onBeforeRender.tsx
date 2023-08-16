// https://vite-plugin-ssr.com/onBeforeRender

import ReactDOMServer from "react-dom/server";
import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Provider,
} from "urql";
import prepass from "react-ssr-prepass";
import "isomorphic-fetch";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

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

export default onBeforeRender;
