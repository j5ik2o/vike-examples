import type {
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vite-plugin-ssr/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export { PageContextCustom };
export type { PageContext, PageContextClient, PageContextServer, PageProps };
