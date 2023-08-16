// https://vite-plugin-ssr.com/onRenderClient
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

const onRenderClient = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("page-view"),
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export default onRenderClient;
