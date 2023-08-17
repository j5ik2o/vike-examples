// This file is processed by Vite; the path alias `#root` is
// defined in `vite.config.js#resolve.alias`.
import { Counter } from "#root/components/Counter";

const Page = () => {
  return (
    <p>
      Interactive: <Counter />
    </p>
  );
};

export default Page;
