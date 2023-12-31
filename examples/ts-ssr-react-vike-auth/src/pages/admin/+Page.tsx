import { usePageContext } from "vike-react/usePageContext";
import { Counter } from "../../components/Counter";

const Page = () => {
  const pageContext = usePageContext();
  const { userFullName } = pageContext as unknown as PageContextCustom;
  return (
    <>
      <h1>Admin Panel</h1>
      <p>
        You&apos;re able to access this page because you&apos;re logged in as{" "}
        <b>{userFullName}</b>.
      </p>
      <p>
        This page is hydrated: <Counter />
      </p>
    </>
  );
};

export default Page;
