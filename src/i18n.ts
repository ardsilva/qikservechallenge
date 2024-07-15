import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const isProduction = process.env.NODE_ENV === 'production';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{lng}}.json'
    }
  });

export default i18n;
