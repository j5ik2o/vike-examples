import ReactDOM from "react-dom/client";
import LayoutDefault from "../layouts/LayoutDefault";
import type { PageContextClient } from "./types";
import { PageContextProvider } from "./usePageContext";

let root: ReactDOM.Root;

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const view = document.getElementById("page-view");
  if (view === null) {
    throw new Error("Missing <div id='page-view'>.</div>");
  }
  const page = (
    <PageContextProvider pageContext={pageContext}>
      <LayoutDefault>
        <Page {...pageProps} />
      </LayoutDefault>
    </PageContextProvider>
  );
  if (view.innerHTML !== "" && pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(view, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(view);
    }
    root.render(page);
  }
};

export default onRenderClient;
