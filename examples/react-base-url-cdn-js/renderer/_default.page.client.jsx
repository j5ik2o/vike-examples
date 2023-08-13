import React from "react";
import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";

let root;

const render = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById("page-view");
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
};

const clientRouting = true;
const hydrationCanBeAborted = true;

export { render, clientRouting, hydrationCanBeAborted };
