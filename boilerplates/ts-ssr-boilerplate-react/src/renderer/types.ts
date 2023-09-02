export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type {
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vite-plugin-ssr/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type { PageContextCustom };
