import { locale } from "expo-localization";

const supportedLanguages = {
  // Key-value pairs
  // State the name of the language in its own language :)
  en: "English",
  de: "Deutsch",
};

const currentLanguage = Object.keys(supportedLanguages).includes(locale.slice(0, 2))
  ? locale.slice(0, 2)
  : Object.keys(supportedLanguages)[0];
export { supportedLanguages, currentLanguage };
