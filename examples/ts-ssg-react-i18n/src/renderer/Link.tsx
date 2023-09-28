import { localeDefault } from "../locales";
import { usePageContext } from "./usePageContext";
type LinkProps = {
  href: string;
  locale?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Link = ({ href, locale, ...props }: LinkProps) => {
  const pageContext = usePageContext();
  locale = locale || pageContext?.locale;
  if (locale !== localeDefault) {
    href = "/" + locale + href;
  }
  return <a href={href} {...props} />;
};

export { Link };
