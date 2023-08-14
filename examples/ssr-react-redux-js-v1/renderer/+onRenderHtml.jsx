// https://vite-plugin-ssr.com/onRenderHtml
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

const onRenderHtml = async (pageContext) => {
  const { pageHtml } = pageContext;
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
