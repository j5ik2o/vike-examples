import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

const render = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("page-view"),
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export { render };
