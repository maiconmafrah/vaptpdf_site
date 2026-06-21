import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';
export type { Language };

type TranslationType = typeof translations.pt;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      const supported: Language[] = ['pt', 'en', 'es', 'de', 'fr'];
      if (supported.includes(browserLang as Language)) {
        setLang(browserLang as Language);
      } else {
        setLang('en');
      }
    } catch {
      setLang('en');
    }
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid render before auto-detect

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
