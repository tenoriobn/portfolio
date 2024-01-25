import { useState, useEffect } from 'react';
import i18next, { i18n as I18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from 'src/data/pt.json';
import en from 'src/data/en.json';
import es from 'src/data/es.json';

const useConfigurarI18n = (): I18nInstance | null => {
  const [i18nInitialized, setI18nInitialized] = useState(false);
  useEffect(() => {
    i18next
      .use(initReactI18next)
      .init({
        resources: {
          pt: {
            global: pt,
          },
          en: {
            global: en,
          },
          es: {
            global: es,
          },
        },
        lng: 'pt',
        fallbackLng: 'pt',
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => setI18nInitialized(true));
  }, []);

  return i18nInitialized ? i18next : null;
};

export default useConfigurarI18n;
