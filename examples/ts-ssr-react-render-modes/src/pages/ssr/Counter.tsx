import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count} (React)
    </button>
  );
};

export { Counter };
