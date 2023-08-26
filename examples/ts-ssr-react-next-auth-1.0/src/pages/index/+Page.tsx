import { useSession } from "next-auth/react";
function Page() {
  const { data: session, status } = useSession();

  console.log("session", session);
  console.log("status", status);
  const userEmail = session?.user?.email;

  if (status === "authenticated") {
    return <p>Signed in as {userEmail}</p>;
  }

  return (
    <>
      <a href="/api/auth/signin">Sign in</a>
      <br />
      <a href="/api/auth/signout">Sign out</a>
    </>
  );
}

export default Page;
