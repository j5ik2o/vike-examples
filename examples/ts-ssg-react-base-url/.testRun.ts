export { testRun };

import {
  autoRetry,
  expect,
  fetchHtml,
  getServerUrl,
  page,
  partRegex,
  run,
  test,
} from "@brillout/test-e2e";
import assert from "node:assert";
import { ensureWasClientSideRouted, testCounter } from "../../test/utils";

function testRun(
  cmd: "pnpm run dev" | "pnpm run preview" | "pnpm run start",
  {
    baseServer,
    baseAssets,
  }: {
    baseServer: "/" | "/some/base-url/" | "/some/base-url";
    baseAssets:
      | "/"
      | "/some/base-url/"
      | "/some/base-url"
      | "http://localhost:8080/cdn/";
  },
) {
  const addBaseServer = (url: string) => join(baseServer, url);
  const addBaseAssets = (url: string) => join(baseAssets, url);
  const isDev = cmd === "pnpm run dev";

  run(cmd);

  test("URLs correctly contain Base URL in HTML", async () => {
    const html = await fetchHtml(addBaseServer("/"));

    expect(html).toContain("<h1>Welcome</h1>");
    expect(html).toContain(`<a href="${addBaseServer("/")}">Home</a>`);
    expect(html).toContain(`<a href="${addBaseServer("/about")}">About</a>`);
    expect(html).toContain(
      `<link rel="manifest" href="${addBaseAssets("/manifest.json")}">`,
    );
    if (isDev) {
      expect(html).toContain(
        `<link rel="icon" href="${addBaseAssets("/renderer/logo.svg")}" />`,
      );
    } else {
      expect(html).toMatch(
        partRegex`<link rel="icon" href="${addBaseAssets(
          "/assets/static/logo.",
        )}${/[a-zA-Z0-9]+/}.svg" />`,
      );
    }
  });

  test("page is rendered to the DOM and interactive", async () => {
    await page.goto(getServerUrl() + addBaseServer("/"));
    expect(await page.textContent("h1")).toBe("Welcome");
    await testCounter();
  });

  test("Client Routing", async () => {
    await page.click(`a[href="${addBaseServer("/about")}"]`);
    await autoRetry(async () => {
      expect(await page.textContent("h1")).toBe("About");
    });
    await ensureWasClientSideRouted("/pages/index");
  });
}

function join(base: string, url: string) {
  if (url === "/") return base;
  if (base.endsWith("/")) base = base.slice(0, -1);
  assert(url.startsWith("/"));
  return base + url;
}
