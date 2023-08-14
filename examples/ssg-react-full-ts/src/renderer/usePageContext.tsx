import React, { useContext } from "react";
import type { PageContext } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Context = React.createContext<PageContext>(undefined as any);

const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) => <Context.Provider value={pageContext}>{children}</Context.Provider>;

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

export { PageContextProvider, usePageContext };
