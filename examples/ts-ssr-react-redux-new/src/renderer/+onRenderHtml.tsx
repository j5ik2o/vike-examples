// https://vite-plugin-ssr.com/onRenderHtml
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

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
