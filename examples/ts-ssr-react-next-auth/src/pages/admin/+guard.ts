import { useSession } from "next-auth/react";
import { render } from "vite-plugin-ssr/abort";
import { PageContextCustom, PageContextServer } from "../../renderer/types";

const guard = (pageContext: PageContextServer & PageContextCustom) => {
  const { data: session } = useSession();
  console.log("session", session);
  if (!session?.user) {
    throw render("/login");
  }
  if (!session.user.isAdmin) {
    throw render(403, { notAdmin: true });
  }
};

export default guard;
