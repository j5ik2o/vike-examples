import { testRun } from "./.testRun";
const base = "/some/base-url";
testRun("pnpm run dev", { baseServer: base, baseAssets: base });
