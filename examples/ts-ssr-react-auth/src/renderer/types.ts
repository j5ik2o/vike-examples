import type {
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  PageContextBuiltInServer,
} from "vike/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlOriginal: string;
  user: User;
  userFullName: string;
};

type User = {
  fullName: string;
  isAdmin: boolean;
};

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export { PageContextCustom };
export type { PageContext, PageContextClient, PageContextServer, PageProps };
