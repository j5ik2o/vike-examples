import Menu from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Counter } from "../../components/Counter";

const Page = () => {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div>
        Menu: <Menu />
      </div>
      <div>
        Button: <Button>Some button</Button>
      </div>
    </>
  );
};

export default Page;
