import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import "./index.css";
import { PageContextClient } from "./types";

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};

export { onRenderClient };
