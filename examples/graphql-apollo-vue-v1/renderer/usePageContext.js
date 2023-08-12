// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from "vue";

const key = Symbol();

const usePageContext = () => {
  const pageContext = inject(key);
  return pageContext;
};

const setPageContext = (app, pageContext) => {
  app.provide(key, pageContext);
};

export { usePageContext, setPageContext };
