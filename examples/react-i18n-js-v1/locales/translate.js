import { translations } from "./translations";
import { localeDefault } from "./locales";

const translate = (text, locale) => {
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
