import React from "react";
import "./PageLayout.css";
import logoUrl from "./logo.svg";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          <Logo />
          <a className="navitem" href="/">
            Preload Default
          </a>
          <a className="navitem" href="/preload-disabled">
            Preload Disabled
          </a>
          <a className="navitem" href="/preload-images">
            Preload Images
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
        paddingTop: 20,
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

const Logo = () => {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} />
      </a>
    </div>
  );
};

export { PageLayout };
