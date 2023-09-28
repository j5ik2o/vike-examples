import { jsx as _jsx } from "react/jsx-runtime";
// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { Provider, cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange, } from "urql";
import { PageShell } from "./PageShell";
const onRenderClient = async (pageContext) => {
    const { Page, pageProps, urqlState } = pageContext;
    const client = createClient({
        url: "https://countries.trevorblades.com",
        exchanges: [
            dedupExchange,
            cacheExchange,
            // We hydrate the page
            ssrExchange({ isClient: true, initialState: urqlState }),
            fetchExchange,
        ],
    });
    hydrateRoot(document.getElementById("page-view"), _jsx(PageShell, { pageContext: pageContext, children: _jsx(Provider, { value: client, children: _jsx(Page, { ...pageProps }) }) }));
};
export default onRenderClient;
