import { createContext, useContext, useState, ReactNode } from 'react';

// Supported languages
export type Language = 'en' | 'fr';

interface LanguageAndThemeContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageAndThemeContext = createContext<LanguageAndThemeContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguageAndTheme = () => {
  const context = useContext(LanguageAndThemeContext);
  if (!context) throw new Error('useLanguageAndTheme must be used within LanguageAndThemeProvider');
  return context;
};

export const LanguageAndThemeProvider = ({ children }: { children: ReactNode }) => {
  // Language state
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageAndThemeContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageAndThemeContext.Provider>
  );
};
