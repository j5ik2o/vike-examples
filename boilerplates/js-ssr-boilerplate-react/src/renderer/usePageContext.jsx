// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";

const Context = React.createContext(undefined);

PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};

const PageContextProvider = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

export { PageContextProvider };
// eslint-disable-next-line react-refresh/only-export-components
export { usePageContext };
