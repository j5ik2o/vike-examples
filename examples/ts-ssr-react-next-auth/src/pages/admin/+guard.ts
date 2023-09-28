import { useSession } from "next-auth/react";
import { render } from "vike/abort";
import { PageContextCustom, PageContextServer } from "../../renderer/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const guard = (pageContext: PageContextServer & PageContextCustom) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  console.log("session", session);
  if (!session?.user) {
    throw render("/login");
  }
  if (!("isAdmin" in session.user) || !session.user.isAdmin) {
    throw render(403, { notAdmin: true });
  }
};

export default guard;
