export { todoItems };
export type { TodoItem };

type TodoItem = { text: string };
const todoItems: TodoItem[] = [];

// Initial data
const init = () => {
  todoItems.push({ text: "Buy milk" });
  todoItems.push({ text: "Buy strawberries" });
};

init();
