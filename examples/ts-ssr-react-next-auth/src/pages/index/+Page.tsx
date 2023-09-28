import { useSession } from "next-auth/react";

function Page() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const userEmail = session?.user?.email;
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <br />
        <a href="/api/auth/signout">Sign out</a>
      </>
    );
  }

  return (
    <>
      <a href="/api/auth/signin">Sign in</a>
      <br />
    </>
  );
}

export default Page;
