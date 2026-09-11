import { useLanguage } from './LanguageContext';

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

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 p-1">
      <button
        className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-colors duration-240 ${
          language === 'en' ? 'bg-white text-ink' : 'text-white/60 hover:text-white'
        }`}
        onClick={() => setLanguage('en')}
        aria-label={t.switchToEn}
      >
        EN
      </button>
      <button
        className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-colors duration-240 ${
          language === 'fr' ? 'bg-white text-ink' : 'text-white/60 hover:text-white'
        }`}
        onClick={() => setLanguage('fr')}
        aria-label={t.switchToFr}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
