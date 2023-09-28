// https://vite-plugin-ssr.com/onRenderHtml
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { PageContextServer } from "./types";

const onRenderHtml = async (pageContext: PageContextServer) => {
  const { pageHtml } = pageContext;

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
