import React from "react";
import { usePageContext } from "../../renderer/usePageContext";

const Page = () => {
  const ctx = usePageContext();
  const { is404 } = ctx;
  let { abortReason } = ctx;

  if (!abortReason) {
    abortReason = is404 ? "Page not found." : "Something went wrong.";
  }
  return (
    <Center>
      <p style={{ fontSize: "1.3em" }}>{abortReason}</p>
    </Center>
  );
};

const Center = ({ style, ...props }: any) => {
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      {...props}
    ></div>
  );
};

export default Page;
