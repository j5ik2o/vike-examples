// https://vite-plugin-ssr.com/onRenderClient
import { hydrate } from "preact";
import { PageShell } from "./PageShell";

const onRenderClient = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  const body = document.querySelector("body");
  hydrate(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    body,
  );
};

export default onRenderClient;
