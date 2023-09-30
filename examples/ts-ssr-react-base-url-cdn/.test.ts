import { testRun } from "../base-url-v1/.testRun";

testRun("pnpm run start", {
  baseAssets: "http://localhost:8080/cdn/",
  baseServer: "/",
});
