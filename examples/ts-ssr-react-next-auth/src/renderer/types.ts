import React from "react";
import type {
  PageContextBuiltIn,
  /*
// When using Client Routing https://vite-plugin-ssr.com/clientRouting
PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
/*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from "vike/types";

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
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

type HasChildren = { children: React.ReactNode };
type HasPageContext = { pageContext: PageContext };
type HasChildrenComponent = ({ children }: HasChildren) => React.JSX.Element;

export type {
  HasChildren,
  HasChildrenComponent,
  HasPageContext,
  PageContext,
  PageContextClient,
  PageContextCustom,
  PageContextServer,
  PageProps,
};
