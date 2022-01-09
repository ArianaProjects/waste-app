import { locale } from "expo-localization";

const supportedLanguages = {
  // Key-value pairs
  en: "English",
  de: "Deutsch",
};

const currentLanguage = Object.keys(supportedLanguages).includes(locale.slice(0, 2))
  ? locale.slice(0, 2)
  : Object.keys(supportedLanguages)[0];
export { supportedLanguages, currentLanguage };
