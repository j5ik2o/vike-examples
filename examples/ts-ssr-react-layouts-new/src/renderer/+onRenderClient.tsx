// https://vite-plugin-ssr.com/onRenderClient
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import type { PageContext } from "./types";
import { PageShell } from "./PageShell";
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
) => {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const reactRootElem: HTMLElement | null =
    document.getElementById("react-root");
  if (pageContext.isHydration) {
    if (reactRootElem !== null) {
      reactRoot = hydrateRoot(reactRootElem, page);
    }
  } else {
    if (!reactRoot) {
      if (reactRootElem !== null) {
        reactRoot = createRoot(reactRootElem);
      }
    }
    reactRoot.render(page);
  }
};

export default onRenderClient;
