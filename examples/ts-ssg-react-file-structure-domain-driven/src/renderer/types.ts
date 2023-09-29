import type {
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vike/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  config: {
    /** Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
    title?: string;
  };
  /** Title defined dynamically by onBeforeRender() */
  title?: string;
  abortReason?: string;
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type { PageContext, PageContextClient, PageContextServer, PageProps };
