// https://vite-plugin-ssr.com/onRenderHtml
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import type { PageContext } from "./types";

const onRenderHtml = async (pageContext: PageContextBuiltIn & PageContext) => {
  const { pageHtml } = pageContext;
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
