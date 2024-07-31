import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

i18n
  .use(XHR)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // path to your translation files
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
