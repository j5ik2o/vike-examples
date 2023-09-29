import { jsx as _jsx } from "react/jsx-runtime";
// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere
import React, { useContext } from "react";
 
const Context = React.createContext(undefined);
const PageContextProvider = ({ pageContext, children }) => {
  return _jsx(Context.Provider, { value: pageContext, children: children });
};
const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
export { PageContextProvider, usePageContext };
