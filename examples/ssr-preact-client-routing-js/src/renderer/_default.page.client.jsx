import { hydrate, render as render_ } from "preact";
import { PageShell } from "./PageShell";

const render = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.querySelector("body");

  if (pageContext.isHydration) {
    hydrate(page, container);
  } else {
    render_(page, container);
  }
  document.title = getPageTitle(pageContext);
};

const getPageTitle = (pageContext) => {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    "Demo";
  return title;
};

const clientRouting = true;

export { render, clientRouting };
