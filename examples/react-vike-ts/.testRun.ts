import {
  run,
  page,
  test,
  expect,
  getServerUrl,
  fetchHtml,
  autoRetry,
} from "@brillout/test-e2e";
import { ensureWasClientSideRouted, testCounter } from "../../test/utils";

function testRun(cmd: "npm run dev" | "npm run preview", isStem?: true) {
  run(cmd, { doNotFailOnWarning: true });

  test("page content is rendered to HTML", async () => {
    const html = await fetchHtml("/");
    expect(html).toContain("<li>Rendered to HTML.</li>");
  });

  test("page is rendered to the DOM and interactive", async () => {
    await page.goto(getServerUrl() + "/");
    await testCounter();

    // Client-side routing
    await page.click('a[href="/star-wars"]');
    await autoRetry(async () => {
      expect(await page.textContent("h1")).toBe("Star Wars Movies");
    });
    expect(await page.textContent("body")).toContain("The Phantom Menace");
    await ensureWasClientSideRouted(
      isStem ? "/pages/index/index" : "/pages/index",
    );
  });

  test("data fetching page, HTML", async () => {
    const html = await fetchHtml("/star-wars");
    expect(html).toContain('<a href="/star-wars/6">Revenge of the Sith</a>');
    expect(html).toContain('<a href="/star-wars/4">The Phantom Menace</a>');
  });

  test("data fetching page, DOM", async () => {
    await page.goto(getServerUrl() + "/star-wars");
    const text = await page.textContent("body");
    expect(text).toContain("Revenge of the Sith");
    expect(text).toContain("The Phantom Menace");

    await page.click('a[href="/star-wars/4"]');
    await autoRetry(async () => {
      expect(await page.textContent("h1")).toBe("The Phantom Menace");
    });
    const pageContent =
      "The Phantom MenaceRelease Date: 1999-05-19Director: George LucasProducer: Rick McCallum";
    expect(await page.textContent("body")).toContain(pageContent);
  });
}
export { testRun };
