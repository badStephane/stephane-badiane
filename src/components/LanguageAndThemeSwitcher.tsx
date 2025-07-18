import React from 'react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';
import { Sun, Moon, Globe } from 'lucide-react';

const LanguageAndThemeSwitcher: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useLanguageAndTheme();

  return (
    <div className="flex items-center gap-4">
      {/* Language Switcher */}
      <button
        className={`p-2 rounded-full border border-blue-500/20 ${language === 'en' ? 'bg-blue-500/20 text-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        <Globe size={18} className="inline mr-1" /> EN
      </button>
      <button
        className={`p-2 rounded-full border border-blue-500/20 ${language === 'fr' ? 'bg-blue-500/20 text-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
        onClick={() => setLanguage('fr')}
        aria-label="Passer en français"
      >
        <Globe size={18} className="inline mr-1" /> FR
      </button>
      {/* Theme Switcher */}
      <button
        className="p-2 rounded-full border border-blue-500/20 text-blue-300 hover:bg-blue-500/10"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

export default LanguageAndThemeSwitcher;
