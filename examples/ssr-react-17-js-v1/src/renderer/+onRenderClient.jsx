// https://vite-plugin-ssr.com/onRenderClient
import React from "react";
import { hydrate } from "react-dom";
import { PageLayout } from "./PageLayout";

const onRenderClient = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  hydrate(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    document.getElementById("page-view"),
  );
};

export default onRenderClient;
