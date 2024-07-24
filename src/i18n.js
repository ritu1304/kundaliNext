// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { nextI18NextConfig } from '../next-i18next.config';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    lng: nextI18NextConfig.i18n.defaultLocale,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false, // Set to false due to SSR
    },
  });

export default i18n;
