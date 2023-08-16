import ReactDOM from "react-dom/client";
import { PageLayout } from "./PageLayout";

let root: ReactDOM.Root;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const render = async (pageContext: any) => {
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

export { render, clientRouting, hydrationCanBeAborted };
