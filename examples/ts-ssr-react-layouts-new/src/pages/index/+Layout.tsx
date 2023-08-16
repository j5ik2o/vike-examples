import "./Layout.css";

function Layout({ children }: { children: React.ReactNode }) {
  return <div id="landing-page">{children}</div>;
}

export default Layout;
