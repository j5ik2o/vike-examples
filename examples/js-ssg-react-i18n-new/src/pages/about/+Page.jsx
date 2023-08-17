import React from "react";
import { LocaleText } from "../../renderer/LocaleText";

const Page = () => {
  return (
    <>
      <h1>
        <LocaleText>Hello</LocaleText>
      </h1>
      <p>
        <LocaleText>Another page</LocaleText>.
      </p>
    </>
  );
};

export default Page;
