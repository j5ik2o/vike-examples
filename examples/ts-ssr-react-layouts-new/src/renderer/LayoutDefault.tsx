import React from "react";
import "./LayoutDefault.css";
import {HasChildrenComponent, HasChildren} from "./types";

const LayoutDefault: HasChildrenComponent = ({ children }: HasChildren) => {
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

const Sidebar: HasChildrenComponent = ({ children }: HasChildren) => {
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

const Content: HasChildrenComponent = ({ children }: HasChildren) => {
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
