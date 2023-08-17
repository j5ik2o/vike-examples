import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div id="landing-page">{children}</div>;
};

export default Layout;
