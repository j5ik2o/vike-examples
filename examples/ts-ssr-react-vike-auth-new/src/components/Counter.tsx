import { useState } from "react";
import { Button } from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter: {count}
    </Button>
  );
};

export { Counter };
