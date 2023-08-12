import { createApp } from "./app";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const render = (pageContext) => {
  const defaultClient = new ApolloClient({
    link: new HttpLink({ uri: "https://countries.trevorblades.com", fetch }),
    cache: new InMemoryCache().restore(pageContext.apolloInitialState),
    connectToDevTools: true,
  });

  const app = createApp(pageContext, defaultClient);
  app.mount("#app");
};

export { render };
