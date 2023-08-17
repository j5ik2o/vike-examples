import React from "react";
import "./PageShell.css";
import { LayoutDefault } from "./LayoutDefault";
import { PageContextProvider } from "./usePageContext";

const PageShell = ({ children, pageContext }) => {
  const Layout = pageContext.exports.Layout || LayoutDefault;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
};

export { PageShell };
