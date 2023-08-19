import { hydrate } from "react-dom";
import { PageLayout } from "./PageLayout";

const render = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  hydrate(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    document.getElementById("page-view"),
  );
};

export { render };
