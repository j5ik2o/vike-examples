// https://vite-plugin-ssr.com/onRenderClient
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import { PageContextClient } from "./types";

let root: Root;

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }
};

export default onRenderClient;
