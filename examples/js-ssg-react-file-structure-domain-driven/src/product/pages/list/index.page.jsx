import React from "react";

const Page = () => {
  return (
    <>
      <div>Product list:</div>
      <ul>
        <li>
          <a href="/product/starship">Starship</a>
        </li>
        <li>
          <a href="/product/mac-studio">Mac Studio</a>
        </li>
        <li>
          <a href="/product/แจ็คเก็ตเดนิม">แจ็คเก็ตเดนิม</a>
        </li>
      </ul>
    </>
  );
};

export { Page };