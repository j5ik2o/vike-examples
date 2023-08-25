import { useState } from "react";
import type { TodoItem } from "../../database/todoItems";
import { TodoList } from "./TodoList";
const Page = ({ todoItemsInitial }: { todoItemsInitial: TodoItem[] }) => {
  return (
    <>
      <h1>To-do List</h1>
      <TodoList todoItemsInitial={todoItemsInitial} />
      <Counter />
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      This page is interactive:
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </button>
    </div>
  );
};

export default Page;
