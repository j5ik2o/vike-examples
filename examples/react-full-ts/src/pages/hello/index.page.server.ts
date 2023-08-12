import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

const names = ["evan", "rom", "alice", "jon", "eli"];

const onBeforeRender = async (pageContext: PageContextBuiltIn) => {
  const { name } = pageContext.routeParams;
  if (name !== "anonymous" && !names.includes(name)) {
    const errorDescription = `Unknown name: ${name}.`;
    throw RenderErrorPage({ pageContext: { pageProps: { errorDescription } } });
  }
  const pageProps = { name };
  return {
    pageContext: {
      pageProps,
    },
  };
};

const prerender = async () => [
  "/hello",
  ...names.map((name) => `/hello/${name}`),
];

export { onBeforeRender, prerender };
