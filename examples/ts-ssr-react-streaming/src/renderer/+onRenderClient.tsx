// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContext } from "./types";

const onRenderClient = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export default onRenderClient;
