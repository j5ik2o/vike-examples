import { todoItems } from "../../database/todoItems";

const onNewTodo = async ({ text }) => {
  todoItems.push({ text });
  return { todoItems };
};

export { onNewTodo };
