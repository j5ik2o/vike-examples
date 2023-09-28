// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContextClient } from "./types";

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const pageViewElem = document.getElementById("page-view")!;
  hydrateRoot(
    pageViewElem,
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export default onRenderClient;
