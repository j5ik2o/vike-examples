import type fetch from "node-fetch";

type PageContext = {
  Page: React.ReactElement;
  fetch?: typeof fetch;
  pageProps?: PageProps;
};

export type { PageContext };
