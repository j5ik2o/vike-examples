import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import type { PageContext } from "./types";

const onRenderClient = async (pageContext: PageContext) => {
  const { Page } = pageContext;
  const view = document.getElementById("page-view")!;
  hydrateRoot(
    view,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};

export default onRenderClient;
