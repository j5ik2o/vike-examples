// https://vite-plugin-ssr.com/onRenderClient
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

let reactRoot: Root;

const onRenderClient = async (
  pageContext: PageContextClient,
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
