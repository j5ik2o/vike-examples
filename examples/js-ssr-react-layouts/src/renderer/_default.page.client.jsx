import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";

let reactRoot;

const render = async (pageContext) => {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const reactRootElem = document.getElementById("react-root");
  if (pageContext.isHydration) {
    reactRoot = hydrateRoot(reactRootElem, page);
  } else {
    if (!reactRoot) {
      reactRoot = createRoot(reactRootElem);
    }
    reactRoot.render(page);
  }
};

const clientRouting = true;
const hydrationCanBeAborted = true;

export { render, clientRouting, hydrationCanBeAborted };
