import { localeDefault } from "../locales";
import { usePageContext } from "./usePageContext";

const Link = ({ href, locale, ...props }) => {
  const pageContext = usePageContext();
  locale = locale || pageContext.locale;
  if (locale !== localeDefault) {
    href = "/" + locale + href;
  }
  return <a href={href} {...props} />;
};

export { Link };
