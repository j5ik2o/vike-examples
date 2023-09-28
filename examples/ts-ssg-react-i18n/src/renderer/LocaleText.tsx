import { translate } from "../locales";
import { usePageContext } from "./usePageContext";

const LocaleText = ({ children }: { children: string }) => {
  const pageContext = usePageContext();
  const { locale } = pageContext;
  const text = children;
  const textLocalized = translate(text, locale);
  return <>{textLocalized}</>;
};

export { LocaleText };
