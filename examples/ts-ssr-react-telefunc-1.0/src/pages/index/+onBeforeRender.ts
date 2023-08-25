// https://vite-plugin-ssr.com/onBeforeRender
import { todoItems } from "../../database/todoItems";
const onBeforeRender = () => {
  const todoItemsInitial = todoItems;
  return {
    pageContext: {
      pageProps: {
        todoItemsInitial,
      },
    },
  };
};

export default onBeforeRender;
