import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import uzTranslations from "../public/locales/uz.json";
import enTranslations from "../public/locales/en.json";
import ruTranslations from "../public/locales/ru.json";
import poTranslations from "../public/locales/po.json";

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
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
    interpolation: {
      escapeValue: false, // React xatolarni avtomatik to'g'rilaydi
    },
  });

export default i18next;
