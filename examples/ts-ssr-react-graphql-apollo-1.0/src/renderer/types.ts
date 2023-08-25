import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import type {
  PageContextBuiltIn,
  /*
// When using Client Routing https://vite-plugin-ssr.com/clientRouting
PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
/*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";

type PageProps = Record<string, unknown>;
type Page = (pageProps: PageProps) => React.ReactElement;

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
  apolloIntialState: any;
  apolloClient: ApolloClient<NormalizedCacheObject>;
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type {
  PageContext,
  PageContextClient,
  PageContextCustom,
  PageContextServer,
  PageProps,
};
