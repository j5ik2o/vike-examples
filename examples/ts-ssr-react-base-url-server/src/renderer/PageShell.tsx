import React from "react";
import logo from "./logo.svg";
import "./PageShell.css";
import { Link } from "../components/Link";

const PageShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          <Logo />
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
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
      <Link href="/">
        <img src={logo} height={64} width={64} />
      </Link>
    </div>
  );
};

export { PageShell };
