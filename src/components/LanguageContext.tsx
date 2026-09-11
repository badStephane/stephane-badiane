import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Supported languages
export type Language = 'en' | 'fr';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

// Choix initial : préférence mémorisée > langue du navigateur > anglais
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Persiste le choix et synchronise l'attribut <html lang>
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
