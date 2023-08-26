// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PageContextClient } from "./types";

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page } = pageContext;
  const reactRootElem = document.getElementById("react-root");
  if (reactRootElem === null) {
    throw new Error("Failed to find the react-root element");
  }

  hydrateRoot(
    reactRootElem,
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>,
  );
};

export default onRenderClient;
