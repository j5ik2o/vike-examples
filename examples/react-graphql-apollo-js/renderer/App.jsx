import React from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";

const App = ({ apolloClient, children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default App;
