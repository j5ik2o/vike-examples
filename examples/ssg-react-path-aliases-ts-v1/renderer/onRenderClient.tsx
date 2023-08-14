// https://vite-plugin-ssr.com/onRenderClient
// import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";
import type { PageContext } from "#root/types";

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
