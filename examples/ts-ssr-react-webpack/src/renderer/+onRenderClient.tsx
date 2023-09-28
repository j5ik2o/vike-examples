// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { PageContext } from "./types";

const onRenderClient = async (pageContext: PageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};

export default onRenderClient;
