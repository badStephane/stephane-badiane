import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const translations = {
  en: {
    navLinks: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'services', label: 'Services' },
    ],
    talk: "Let's Talk",
  },
  fr: {
    navLinks: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'projects', label: 'Projets' },
      { id: 'services', label: 'Services' },
    ],
    talk: 'Contactez-moi',
  },
};

const Navigation = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950 backdrop-blur-xl shadow-2xl border-b border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="relative">
                <img src="/monlogo.webp" width={150} height={100} alt="Logo Stephane Badiane" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {t.navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-blue-200 hover:text-white transition-colors duration-240 font-medium group py-2"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="
                    relative overflow-hidden
                    px-6 py-3 rounded-full shadow-lg font-semibold

                    bg-gradient-to-r from-amber-400 to-orange-500
                    bg-[length:200%_200%] bg-left

                    text-slate-900
                    transition-all duration-240 ease-out-expo

                    hover:scale-105 active:scale-95
                    hover:shadow-lg hover:shadow-amber-500/30
                  "

              >
                {t.talk}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-200 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-blue-500/20 motion-safe:animate-fade-up">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {t.navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-blue-200 hover:text-white px-4 py-3 w-full text-left transition-colors duration-300 rounded-lg hover:bg-white hover:text-blue-500"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="block bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold px-4 py-3 rounded-lg hover:from-amber-300 hover:to-orange-400 transition-all duration-300 mx-4 mt-4 text-center"
            >
              {t.talk}
            </button>
            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;