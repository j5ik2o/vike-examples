import React from "react";
import { Counter } from "./Counter";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      This page is:
      <ul>
        <li className="my-4">Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
};

export { Page };
