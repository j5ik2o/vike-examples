// https://vite-plugin-ssr.com/onRenderClient
import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";
import "./css/index.css";
import { getPageTitle } from "./getPageTitle";
import type { PageContextClient } from "./types";

let root: ReactDOM.Root;

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};

export default onRenderClient;
