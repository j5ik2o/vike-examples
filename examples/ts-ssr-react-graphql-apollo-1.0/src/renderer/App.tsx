import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import "./App.css";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const App = ({
  apolloClient,
  children,
}: {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  children: React.ReactNode;
}) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default App;
