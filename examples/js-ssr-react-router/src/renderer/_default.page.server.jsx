import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

const passToClient = ["pageProps"];

const render = async (pageContext) => {
  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <Page {...pageProps} />
    </StaticRouter>,
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { passToClient, render };
