// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere
import React, { useContext } from "react";

const Context = React.createContext();

const PageContextProvider = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

export { PageContextProvider, usePageContext };
