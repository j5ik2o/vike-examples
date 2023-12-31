import { usePageContext } from "vike-react/usePageContext";
import { Counter } from "../../components/Counter";

const Page = () => {
  const pageContext = usePageContext();

  // Message shown to the user
  let msg;
  let title;

  // Handle `throw render(403, { notAdmin: true })`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((pageContext.abortReason as any)?.notAdmin) {
    msg = "You cannot access this page because you aren't an administrator.";
    title = "Unauthorized";
  }

  // Fallback error message
  if (!msg) {
    msg = pageContext.is404
      ? "This page doesn't exist."
      : "Something went wrong. Sincere apologies. Try again (later).";
    title = pageContext.is404 ? "Doesn't exist" : "Error";
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{msg}</p>
      <p>
        This page is hydrated: <Counter />
      </p>
    </>
  );
};

export default Page;
