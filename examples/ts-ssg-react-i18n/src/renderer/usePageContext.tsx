import React, { useContext } from "react";
import { PageContext } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Context = React.createContext<PageContext>(undefined as any);

const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

export { PageContextProvider, usePageContext };
