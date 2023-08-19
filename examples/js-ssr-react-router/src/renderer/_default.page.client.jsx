import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const render = async (pageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("react-root"),
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>,
  );
};

export { render };
