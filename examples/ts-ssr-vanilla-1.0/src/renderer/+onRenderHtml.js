// https://vite-plugin-ssr.com/onRenderHtml
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageLayout } from "./PageLayout";

const onRenderHtml = async (pageContext) => {
  const { Page } = pageContext;
  const pageHtml = PageLayout(Page);
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
