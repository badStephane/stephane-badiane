import React from 'react';
import { useLanguage } from './LanguageContext';
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
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-4">
      {/* Language Switcher */}
      <button
        className={`p-2 rounded-lg border font-mono text-sm ${language === 'en' ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' : 'border-white/10 text-blue-200 hover:bg-white/5'}`}
        onClick={() => setLanguage('en')}
        aria-label={t.switchToEn}
      >
        <Globe size={18} className="inline mr-1" /> EN
      </button>
      <button
        className={`p-2 rounded-lg border font-mono text-sm ${language === 'fr' ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' : 'border-white/10 text-blue-200 hover:bg-white/5'}`}
        onClick={() => setLanguage('fr')}
        aria-label={t.switchToFr}
      >
        <Globe size={18} className="inline mr-1" /> FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
