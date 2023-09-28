import { localeDefault } from "./locales";
import { translations } from "./translations";

const translate = (text: string, locale: string) => {
  if (locale === localeDefault) {
    return text;
  }
  const textTranslations = translations[text];
  if (!textTranslations) {
    throw new Error("No translation found for: `" + text + "`");
  }
  return textTranslations[locale];
};

export { translate };
