import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import languages from "../locales/languages";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "br",
    // debug: true,
    fallbackLng: "br",
    resources: {
      ...languages,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
