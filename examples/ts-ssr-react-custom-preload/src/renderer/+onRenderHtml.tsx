// https://vite-plugin-ssr.com/onRenderHtml
import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { InjectFilterEntry } from "vike/types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { PageContextBuiltIn } from "vike/types";
import { PageLayout } from "./PageLayout";
import type { PageContext } from "./types";

const onRenderHtml = async (pageContext: PageContextBuiltIn & PageContext) => {
  const { Page, pageProps } = pageContext;
  // The config 'preloadStrategy' is a custom config we defined at ./+config.ts
  const { preloadStrategy } = pageContext.exports;
  const pageHtml = renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    injectFilter(assets: InjectFilterEntry[]) {
      // Default vite-plugin-ssr's preloading strategy
      if (!preloadStrategy) return;

      if (preloadStrategy === "DISABLED") {
        assets.forEach((asset) => {
          if (
            // Entries always need to be injected
            asset.isEntry ||
            // We don't touch JavaScript preloading (recommended)
            asset.assetType === "script"
          ) {
            return;
          }
          asset.inject = false;
        });
      }

      if (preloadStrategy === "IMAGES") {
        assets.forEach((asset) => {
          if (asset.assetType === "image") {
            asset.inject = "HTML_BEGIN";
          }
        });
      }
    },
  };
};

export default onRenderHtml;
