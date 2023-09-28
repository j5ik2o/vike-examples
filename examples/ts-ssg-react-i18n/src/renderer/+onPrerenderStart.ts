// https://vite-plugin-ssr.com/onPrerenderStart
import { localeDefault, locales } from "../locales";
import { PageContextServer } from "./types";

// We only need this for pre-rendered apps https://vite-plugin-ssr.com/pre-rendering
const onPrerenderStart = (prerenderContext: PageContextServer) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageContexts: any[] = [];
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    locales.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext;
      if (locale !== localeDefault) {
        urlOriginal = `/${locale}${pageContext.urlOriginal}`;
      }
      pageContexts.push({
        ...pageContext,
        urlOriginal,
        // Set pageContext.locale
        locale,
      });
    });
  });
  return {
    prerenderContext: {
      pageContexts,
    },
  };
};

export default onPrerenderStart;
