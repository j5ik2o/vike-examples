import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { gql, useQuery } from "urql";
import { Counter } from "./Counter";
const query = gql `
  {
    countries {
      code
      name
    }
  }
`;
const Page = () => {
    const [result] = useQuery({ query });
    const { data, fetching, error } = result;
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Counter" }), _jsx(Counter, {}), _jsx("h1", { children: "Countries" }), _jsxs(_Fragment, { children: [fetching && _jsx("p", { children: "Loading..." }), error && _jsxs("p", { children: ["Oh no... ", error.message] }), data && (_jsx("ul", { children: data.countries.map((country) => (_jsx("li", { children: country.name }, country.code))) }))] })] }));
};
export default Page;
