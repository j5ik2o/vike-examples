// https://vite-plugin-ssr.com/onRenderClient
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

const onRenderClient = async (pageContext: any) => {
  const { Page, pageProps } = pageContext;
  const pageViewElem = document.getElementById("page-view");

  if (!pageViewElem) {
    throw new Error("page-view element not found!");
  }

  hydrateRoot(
    pageViewElem,
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>,
  );
};

export default onRenderClient;
