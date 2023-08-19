import "./Layout.css";
import {HasChildren} from "../../renderer/types";

const Layout = ({ children }: HasChildren) => {
  return <div id="landing-page">{children}</div>;
};

export default Layout;
