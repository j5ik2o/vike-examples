import { Counter } from "../../components/Counter";

const Page = () => {
  return (
    <>
      <h1>Account</h1>
      <p>You're able to access this page because you're logged in.</p>
      <p>
        This page is hydrated: <Counter />
      </p>
    </>
  );
};

export default Page;
