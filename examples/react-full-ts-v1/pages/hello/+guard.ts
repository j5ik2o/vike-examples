export default guard;

import { render } from "vite-plugin-ssr/abort";

// The guard() hook enables to protect pages
async function guard(pageContext: { urlPathname: string }) {
  if (pageContext.urlPathname === "/hello/forbidden") {
    await sleep(2 * 1000); // Unlike Route Functions, guard() can be async
    throw render(401, "This page is forbidden.");
  }
}

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds));
}
