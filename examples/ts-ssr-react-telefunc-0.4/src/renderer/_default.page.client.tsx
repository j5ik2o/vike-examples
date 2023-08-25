import ReactDOM from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContextClient } from "./types";

let root: ReactDOM.Root;

const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
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
};

const clientRouting = true;
const hydrationCanBeAborted = true;

export { clientRouting, hydrationCanBeAborted, render };
