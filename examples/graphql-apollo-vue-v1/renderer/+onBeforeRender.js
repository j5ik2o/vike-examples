import { renderToString } from "@vue/server-renderer";
import { createApp } from "./app";

const onBeforeRender = async (pageContext) => {
  const app = createApp(pageContext, pageContext.apolloClient);
  const appHtml = await renderToString(app);
  const apolloInitialState = pageContext.apolloClient.extract();
  return {
    pageContext: {
      apolloInitialState,
      appHtml,
    },
  };
};

export default onBeforeRender;
