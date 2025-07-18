import React from 'react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';
import { Globe } from 'lucide-react';

const translations = {
  en: {
    switchToEn: 'Switch to English',
    switchToFr: 'Switch to French',
  },
  fr: {
    switchToEn: 'Passer en anglais',
    switchToFr: 'Passer en français',
  },
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguageAndTheme();
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
    </div>
  );
};

export default LanguageSwitcher;
