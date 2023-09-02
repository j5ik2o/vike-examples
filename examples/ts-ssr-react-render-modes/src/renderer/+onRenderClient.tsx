// https://vite-plugin-ssr.com/onRenderClient
import ReactDOM from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContextClient } from "./types";

let root: ReactDOM.Root;

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );

  const container = document.getElementById("react-container");
  if (!container) {
    throw new Error("Missing <div id='react-container'>");
  }
  // SPA
  if (container.innerHTML === "" || !pageContext.isHydration) {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
    // SSR
  } else {
    root = ReactDOM.hydrateRoot(container, page);
  }
};

export default onRenderClient;
