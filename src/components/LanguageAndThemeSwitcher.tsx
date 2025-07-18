import React from 'react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';
import { Sun, Moon, Globe } from 'lucide-react';

const translations = {
  en: {
    switchToEn: 'Switch to English',
    switchToFr: 'Switch to French',
    toggleTheme: 'Toggle theme',
    lightMode: 'Switch to light mode',
    darkMode: 'Switch to dark mode',
  },
  fr: {
    switchToEn: 'Passer en anglais',
    switchToFr: 'Passer en français',
    toggleTheme: 'Changer de thème',
    lightMode: 'Passer en mode clair',
    darkMode: 'Passer en mode sombre',
  },
};

const LanguageAndThemeSwitcher: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useLanguageAndTheme();
  const t = translations[language];

  return (
    <div className="flex items-center gap-4">
      {/* Language Switcher */}
      <button
        className={`p-2 rounded-full border border-blue-500/20 ${language === 'en' ? 'bg-blue-500/20 text-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
        onClick={() => setLanguage('en')}
        aria-label={t.switchToEn}
      >
        <Globe size={18} className="inline mr-1" /> EN
      </button>
      <button
        className={`p-2 rounded-full border border-blue-500/20 ${language === 'fr' ? 'bg-blue-500/20 text-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
        onClick={() => setLanguage('fr')}
        aria-label={t.switchToFr}
      >
        <Globe size={18} className="inline mr-1" /> FR
      </button>
      {/* Theme Switcher */}
      <button
        className="p-2 rounded-full border border-blue-500/20 text-blue-300 hover:bg-blue-500/10"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t.lightMode : t.darkMode}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

export default LanguageAndThemeSwitcher;
