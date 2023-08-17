import { useState } from "react";
import Button from "@mui/material/Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </Button>
  );
};

export { Counter };
