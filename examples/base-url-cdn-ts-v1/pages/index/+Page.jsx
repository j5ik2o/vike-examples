import React, { useState } from "react";

const Page = () => {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  );
};

export default Page;
