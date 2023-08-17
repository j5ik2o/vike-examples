import React, { useContext } from "react";

const Context = React.createContext(undefined);

const PageContextProvider = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

export { PageContextProvider, usePageContext };
