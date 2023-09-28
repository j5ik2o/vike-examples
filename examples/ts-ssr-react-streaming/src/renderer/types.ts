import React from "react";
import type {
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vike/types";

type PageProps = Record<string, unknown>;
type Page = (pageProps: PageProps) => React.JSX.Element;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  userAgent?: string;
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type {
  PageContext,
  PageContextClient,
  PageContextCustom,
  PageContextServer,
  PageProps,
};
