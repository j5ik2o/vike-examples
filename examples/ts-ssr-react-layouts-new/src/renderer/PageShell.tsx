import {HasChildrenComponent, HasChildren, HasPageContext} from "./types";

export { PageShell };

import React from "react";
import { LayoutDefault } from "./LayoutDefault";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";

const PageShell = ({
  children,
  pageContext,
}: HasChildren & HasPageContext) => {
  // The config 'Layout' is a custom config we defined at ./+config.ts

  const Layout =
    (pageContext.config?.Layout as HasChildrenComponent) || LayoutDefault;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
};
