import React from "react";
import "./LayoutDefault.css";

const LayoutDefault: ({
  children,
}: {
  children: React.ReactNode;
}) => React.JSX.Element = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <Sidebar>
        <a className="navitem" href="/">
          Home
        </a>
        <a className="navitem" href="/about">
          About
        </a>
        <a className="navitem" href="/starship">
          Starship
        </a>
      </Sidebar>
      <Content>{children}</Content>
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

export { LayoutDefault };
