// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { PageContextClient } from "./types";
import { makeApolloClient } from "./apollo";

const onRenderClient = async (pageContext: PageContextClient) => {
  const { Page } = pageContext;
  const apolloClient = makeApolloClient(pageContext.apolloIntialState);

  const pageContent = document.getElementById("page-content");
  if (pageContent === null) {
    throw new Error("page-content element not found!");
  }
  hydrateRoot(
    pageContent,
    <App apolloClient={apolloClient}>
      <Page />
    </App>,
  );
};

export default onRenderClient;
