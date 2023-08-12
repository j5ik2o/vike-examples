// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere
import { inject } from "vue";
import type { App, InjectionKey } from "vue";
import { PageContext } from "./types";

const key: InjectionKey<PageContext> = Symbol();

const usePageContext = () => {
  const pageContext = inject(key);
  if (!pageContext) throw new Error("setPageContext() not called in parent");
  return pageContext;
};

const setPageContext = (app: App, pageContext: PageContext) => {
  app.provide(key, pageContext);
};

export { usePageContext, setPageContext };
