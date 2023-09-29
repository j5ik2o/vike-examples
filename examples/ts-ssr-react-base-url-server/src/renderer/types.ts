import type fetch from "node-fetch";
import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from "vike/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  fetch?: typeof fetch;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
  userAgent: string;
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export { PageContextCustom };
export type { PageContext, PageContextClient, PageContextServer, PageProps };
