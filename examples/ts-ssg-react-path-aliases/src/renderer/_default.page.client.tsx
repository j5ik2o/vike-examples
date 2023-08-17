import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import type { PageContext } from "#root/types";

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
