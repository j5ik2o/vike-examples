import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContext } from "./types";

const render = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;
  const view = document.getElementById("page-view");
  if (view !== null) {
    hydrateRoot(
      view,
      <PageLayout pageContext={pageContext}>
        <Page {...pageProps} />
      </PageLayout>,
    );
  }
};

export { render };
