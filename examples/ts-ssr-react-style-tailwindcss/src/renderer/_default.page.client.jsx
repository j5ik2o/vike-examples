import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import "./index.css";

const render = async (pageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("page-view"),
    <PageLayout>
      <Page />
    </PageLayout>,
  );
};

export { render };
