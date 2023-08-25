// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloClientOptions,
} from "@apollo/client";
import App from "./App";
import { PageContextClient } from "./types";

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

const makeApolloClient = (
  apolloIntialState: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> => {
  const cache: InMemoryCache = new InMemoryCache().restore(apolloIntialState);
  const options: ApolloClientOptions<NormalizedCacheObject> = {
    uri: "https://countries.trevorblades.com",
    cache,
  };
  return new ApolloClient(options);
};

export default onRenderClient;
