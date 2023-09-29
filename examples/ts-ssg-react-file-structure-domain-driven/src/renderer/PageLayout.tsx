import React from "react";
import "./PageLayout.css";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          <a className="navitem" href="/">
            Home
          </a>
          <a className="navitem" href="/about">
            About
          </a>
          <a className="navitem" href="/auth/login">
            Login
          </a>
          <a className="navitem" href="/auth/signup">
            Signup
          </a>
          <a className="navitem" href="/products">
            Products
          </a>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export { PageLayout };
