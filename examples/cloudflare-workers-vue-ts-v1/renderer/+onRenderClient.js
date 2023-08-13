// https://vite-plugin-ssr.com/onRenderClient
import { createApp } from "./app";

const onRenderClient = async (pageContext) => {
  const app = createApp(pageContext);
  app.mount("#app");
};

export default onRenderClient;
