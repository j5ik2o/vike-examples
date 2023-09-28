import { SessionProvider } from "next-auth/react";
import ReactDOM from "react-dom";
import { PageLayout } from "./PageLayout";
import { PageContextClient } from "./types";

const onRenderClient = async (
  pageContext: PageContextClient,
): Promise<void> => {
  const { Page, pageProps } = pageContext;
  // eslint-disable-next-line react/no-deprecated
  ReactDOM.hydrate(
    <PageLayout>
      <SessionProvider>
        <Page {...pageProps} />
      </SessionProvider>
    </PageLayout>,
    document.getElementById("page-view"),
  );
};

export default onRenderClient;
