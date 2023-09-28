import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { PageContextProvider } from "./usePageContext";
const PageShell = ({ children, pageContext, }) => {
    return (_jsx(React.StrictMode, { children: _jsx(PageContextProvider, { pageContext: pageContext, children: _jsx("main", { children: children }) }) }));
};
export { PageShell };
