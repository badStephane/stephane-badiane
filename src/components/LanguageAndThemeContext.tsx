import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Supported languages
export type Language = 'en' | 'fr';

interface LanguageAndThemeContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
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

  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <LanguageAndThemeContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </LanguageAndThemeContext.Provider>
  );
};
