import { Counter } from "../../components/Counter";

const Page = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Example of implementing authentication with vite-plugin-ssr.</p>
      <p>
        If you try to access the Admin Panel but you aren't logged in, then the{" "}
        <code>+guard.js</code> hook together with <code>throw render()</code>{" "}
        protects the page and renders the login page as fallback. Note how the
        URL <code>/admin</code> is preserved during the entire login flow.
      </p>
      <p>
        This page is hydrated: <Counter />
      </p>
    </>
  );
};

export default Page;
