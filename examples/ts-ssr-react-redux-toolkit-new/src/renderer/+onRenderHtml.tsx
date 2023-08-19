// サーバサイド実行
// https://vite-plugin-ssr.com/onRenderHtml
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { store } from "./store";
import type { PageContext } from "./types";

const onRenderHtml = async (pageContext: PageContextBuiltIn & PageContext) => {
  console.log(`onRenderHtml: ${JSON.stringify(store.getState())}`);
  const { pageHtml } = pageContext;
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
