import i18next, { init } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";
import I18NextHttpBacked from "i18next-http-backend";

import uzTranslations from "../public/locales/uz.json";
import enTranslations from "../public/locales/en.json";
import ruTranslations from "../public/locales/ru.json";
import poTranslations from "../public/locales/po.json";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBacked)
  .use(initReactI18next);
init({
  fallbackLng: "uz",
  debug: true,
  resources: {
    uz: {
      translation: uzTranslations,
    },
    en: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
    po: {
      translation: poTranslations,
    },
  },
});

export default i18next;
