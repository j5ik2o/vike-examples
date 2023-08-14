// https://vite-plugin-ssr.com/onRenderClient
import { PageLayout } from "./PageLayout";

const onRenderClient = async (pageContext) => {
  if (!pageContext.isHydration) {
    const { Page } = pageContext;
    const pageHtml = PageLayout(Page);
    document.getElementById("page-view").innerHTML = pageHtml;
  }
  hydrateCounters();
};

const hydrateCounters = () => {
  document.querySelectorAll(".counter").forEach((counter) => {
    let count = 0;
    counter.onclick = () => {
      counter.textContent = `Counter ${++count}`;
    };
  });
};

export default onRenderClient;
