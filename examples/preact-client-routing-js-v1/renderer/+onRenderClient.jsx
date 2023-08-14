// https://vite-plugin-ssr.com/onRenderClient

import { hydrate, render } from "preact";
import { PageShell } from "./PageShell";

const getPageTitle = (pageContext) => {
  const title =
    (pageContext.config.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    "Demo";
  return title;
};

const onRenderClient = async (pageContext) => {
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
    render(page, container);
  }
  document.title = getPageTitle(pageContext);
};

export default onRenderClient;
