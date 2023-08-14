import { resolveRoute } from "vite-plugin-ssr/routing";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

// Route Functions enables advanced routing logic
const route = (pageContext: { urlPathname: string }) => {
  if (
    pageContext.urlPathname === "/hello" ||
    pageContext.urlPathname === "/hello/"
  ) {
    const name = "anonymous";
    return { routeParams: { name } };
  }
  return resolveRoute("/hello/@name", pageContext.urlPathname);
};

// The guard() hook enables to protect pages
const guard = async (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === "/hello/forbidden") {
    await sleep(2 * 1000); // Unlike Route Functions, guard() can be async
    throw RenderErrorPage({
      pageContext: {
        pageProps: {
          errorTitle: "Forbidden",
          errorDescription: "This page is forbidden.",
        },
      },
    });
  }
};

const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, milliseconds));
};

export default route;
export { guard };
