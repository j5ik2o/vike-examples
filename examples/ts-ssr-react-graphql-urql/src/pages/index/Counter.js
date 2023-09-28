import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["Counter ", count] }));
};
export { Counter };
