import type { PageContext } from "#root/types";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

const render = async (pageContext: PageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};

export { render };
