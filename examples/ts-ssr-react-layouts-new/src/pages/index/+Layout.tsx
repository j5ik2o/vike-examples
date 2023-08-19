import { HasChildren } from "../../renderer/types";
import "./Layout.css";

const Layout = ({ children }: HasChildren) => {
  return <div id="landing-page">{children}</div>;
};

export default Layout;
