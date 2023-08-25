import { todoItems } from "../../database/todoItems";

const onNewTodo = async ({ text }: { text: string }) => {
  todoItems.push({ text });
  return { todoItems };
};

export { onNewTodo };
