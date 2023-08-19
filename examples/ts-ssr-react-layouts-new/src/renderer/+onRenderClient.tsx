// https://vite-plugin-ssr.com/onRenderClient
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type {
  /*
            // When using Client Routing https://vite-plugin-ssr.com/clientRouting
            PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
            /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  //*/
} from "vite-plugin-ssr/types";

let reactRoot: Root;

const onRenderClient = async (
  pageContext: PageContextBuiltInClient & PageContext,
): Promise<void> => {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const reactRootElem = document.getElementById("react-root");

  if (!reactRootElem) {
    throw new Error("react-root element not found!");
  }

  if (pageContext.isHydration) {
    reactRoot = hydrateRoot(reactRootElem, page);
  } else {
    if (!reactRoot) {
      reactRoot = createRoot(reactRootElem);
    }
    reactRoot.render(page);
  }
};

export default onRenderClient;
