import React from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const base = import.meta.env.BASE_SERVER;
  if (!href.startsWith("/")) throw new Error("Link href should start with /");
  href = href.slice(1); // We remove the leading '/'
  return <a href={base + href}>{children}</a>;
};

export { Link };
