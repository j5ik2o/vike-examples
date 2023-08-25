// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import type {
  /*
// When using Client Routing https://vite-plugin-ssr.com/clientRouting
PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
/*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";
import { PageLayout } from "./PageLayout";
import type { PageContext } from "./types";

const onRenderClient = async (
  pageContext: PageContextBuiltInClient & PageContext,
) => {
  const { Page, pageProps } = pageContext;
  const pageViewElem = document.getElementById("page-view");

  if (!pageViewElem) {
    throw new Error("page-view element not found!");
  }

  hydrateRoot(
    pageViewElem,
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export default onRenderClient;