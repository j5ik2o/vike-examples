import { Counter } from "./Counter";

const Page = () => {
  return (
    <>
      <h1>Vite-plugin-ssr + Stem React</h1>
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

export default { Page };
