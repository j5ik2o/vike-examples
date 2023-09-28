// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import {
  Provider,
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";
import type {
  /*
// When using Client Routing https://vite-plugin-ssr.com/clientRouting
PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
/*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from "vike/types";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";

const onRenderClient = async (
  pageContext: PageContextBuiltInClient & PageContext,
) => {
  const { Page, pageProps, urqlState } = pageContext;
  const client = createClient({
    url: "https://countries.trevorblades.com",
    exchanges: [
      dedupExchange,
      cacheExchange,
      // We hydrate the page
      ssrExchange({ isClient: true, initialState: urqlState }),
      fetchExchange,
    ],
  });
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageShell pageContext={pageContext}>
      <Provider value={client}>
        <Page {...pageProps} />
      </Provider>
    </PageShell>,
  );
};

export default onRenderClient;
