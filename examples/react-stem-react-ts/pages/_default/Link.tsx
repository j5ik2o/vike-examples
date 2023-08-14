import { usePageContext } from "@brillout/stem-react";

const Link = ({ href, children }: { href: string; children: string }) => {
  const pageContext = usePageContext() as { urlPathname: string }; // TODO
  const { urlPathname } = pageContext;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={isActive ? "is-active" : undefined}>
      {children}
    </a>
  );
};

export { Link };
