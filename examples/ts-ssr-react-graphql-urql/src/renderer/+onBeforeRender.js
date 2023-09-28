import { jsx as _jsx } from "react/jsx-runtime";
// https://vite-plugin-ssr.com/onBeforeRender
import "isomorphic-fetch";
import ReactDOMServer from "react-dom/server";
import prepass from "react-ssr-prepass";
import { Provider, cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange, } from "urql";
import { PageShell } from "./PageShell";
const onBeforeRender = async (pageContext) => {
    const { Page, pageProps } = pageContext;
    const ssr = ssrExchange({ initialState: undefined });
    const client = createClient({
        url: "https://countries.trevorblades.com",
        exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
        suspense: true,
        fetch,
    });
    // This is the first pass, due to suspense: true it will work with prepass and populate the initial cache
    await prepass(_jsx(Provider, { value: client, children: _jsx(Page, { ...pageProps }) }));
    // After we can construct an initial html with renderToString as our cache is hydrated
    const pageHtml = ReactDOMServer.renderToString(_jsx(PageShell, { pageContext: pageContext, children: _jsx(Provider, { value: client, children: _jsx(Page, { ...pageProps }) }) }));
    const urqlState = ssr.extractData();
    return {
        pageContext: {
            pageHtml,
            urqlState,
        },
    };
};
export default onBeforeRender;
