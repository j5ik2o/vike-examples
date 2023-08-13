import { createSSRApp, h } from "vue";
import PageLayout from "./PageLayout.vue";

const createApp = (pageContext) => {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        },
      );
    },
  };
  const app = createSSRApp(PageWithLayout);
  return app;
};

export { createApp };
