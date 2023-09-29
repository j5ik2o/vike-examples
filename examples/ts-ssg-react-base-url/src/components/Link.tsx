const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  if (!href.startsWith("/")) throw new Error("Link href should start with /");
  href = import.meta.env.BASE_URL + href;
  href = normalize(href);
  return <a href={href}>{children}</a>;
};

const normalize = (url: string) => {
  return "/" + url.split("/").filter(Boolean).join("/");
};

export { Link };
