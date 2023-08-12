// https://vite-plugin-ssr.com/onRenderClient
export default onRenderClient;

import { render } from "solid-js/web";
import type { PageContextClient } from "./types";

/**
 * A function that disposes previously rendered pages.
 *
 * If the function is not executed, each route change will
 * append a page to the DOM without clearing (disposing)
 * the previous one.
 */
let disposePreviousPage: () => void;

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page } = pageContext;

  if (disposePreviousPage) {
    disposePreviousPage();
  }

  // render the page and save the dispose function of that page
  disposePreviousPage = render(() => <Page />, document.getElementById("root"));
};
