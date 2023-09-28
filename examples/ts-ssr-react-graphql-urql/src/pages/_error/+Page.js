import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Page = ({ is404 }) => {
    if (is404) {
        return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "404 Page Not Found" }), _jsx("p", { children: "This page could not be found." })] }));
    }
    else {
        return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "500 Internal Error" }), _jsx("p", { children: "Something went wrong." })] }));
    }
};
export default Page;
