import { todoItems } from "../../database/todoItems";

async function onNewTodo({ text }) {
  todoItems.push({ text });
  return { todoItems };
}

export { onNewTodo };
