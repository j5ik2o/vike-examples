import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

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
