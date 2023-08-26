import { HasChildren } from "../../renderer/types";
import "./Layout.css";

const Layout = ({ children }: HasChildren) => {
  return (
    <>
      <div id="landing-page">
        <h1>page layout: +++++</h1>
        {children}
        <h1>page layout: +++++</h1>
      </div>
    </>
  );
};

export default Layout;
