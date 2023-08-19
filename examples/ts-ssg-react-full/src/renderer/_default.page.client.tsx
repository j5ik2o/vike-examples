import "./css/index.css";
// import React from "react";
import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";
import { getPageTitle } from "./getPageTitle";
import type { PageContextClient } from "./types";

let root: ReactDOM.Root;

const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};

const onHydrationEnd = () => {
  console.log("Hydration finished; page is now interactive.");
};

const onPageTransitionStart = () => {
  console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
};

const onPageTransitionEnd = () => {
  console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
};

const clientRouting = true;
const hydrationCanBeAborted = true;

export {
  clientRouting,
  hydrationCanBeAborted,
  onHydrationEnd,
  onPageTransitionEnd,
  onPageTransitionStart,
  render,
};
