import { names } from "./names";

export default (): string[] => {
  return ["/hello", ...names.map((name) => `/hello/${name}`)];
};
