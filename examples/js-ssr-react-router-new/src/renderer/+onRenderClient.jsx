// https://vite-plugin-ssr.com/onRenderClient
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const onRenderClient = async (pageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("react-root"),
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>,
  );
};

export default onRenderClient;
