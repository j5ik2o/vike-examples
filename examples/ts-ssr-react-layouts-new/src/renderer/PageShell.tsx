export { PageShell };

import React from "react";
import { LayoutDefault } from "./LayoutDefault";
import "./PageShell.css";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

const PageShell = ({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => {
  // The config 'Layout' is a custom config we defined at ./+config.ts
  const Layout =
    (pageContext.config?.Layout as ({
      children,
    }: {
      children: React.ReactNode;
    }) => React.JSX.Element) || LayoutDefault;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
};
