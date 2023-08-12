import { dirname } from "path";
import { fileURLToPath } from "url";

// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag/50052194#50052194
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = `${__dirname}/..`;

export { root };
