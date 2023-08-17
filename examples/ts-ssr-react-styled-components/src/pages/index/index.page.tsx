import React from "react";
import styled from "styled-components";
import { Counter } from "./Counter";

const Container = styled.div`
  width: 100%;
  background-color: red;
`;

function Page() {
  return (
    <Container>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </Container>
  );
}

export { Page };
