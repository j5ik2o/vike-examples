import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import "./App.css";

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
