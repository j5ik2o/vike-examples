// https://vite-plugin-ssr.com/onRenderClient
// import React from "react";
import type { PageContext } from "#root/types";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

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
