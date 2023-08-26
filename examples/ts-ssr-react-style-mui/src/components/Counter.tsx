import Button from "@mui/material/Button";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </Button>
  );
};

export { Counter };
