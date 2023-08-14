import React from "react";
import { usePageContext } from "./usePageContext";

const Link = (props: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} className={className} />;
};

export { Link };
