import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import SpacedNavLink from './ui/SpacedNavLink';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    navLinks: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Work' },
      { id: 'skills', label: 'Skills' },
    ],
    talk: 'Contact us',
  },
  fr: {
    navLinks: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projets' },
      { id: 'skills', label: 'Compétences' },
    ],
    talk: 'Me contacter',
  },
};

const SCROLL_THRESHOLD_PX = 24;

const Navigation = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-320 ${
        isScrolled ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="font-display text-h5 uppercase tracking-wide text-white"
        >
          Stéphane Badiane
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {t.navLinks.map((item, index) => (
            <SpacedNavLink
              key={item.id}
              label={item.label}
              index={index + 1}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
            />
          ))}
          <LanguageSwitcher />
          <PillButton href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            {t.talk}
          </PillButton>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-ink/98 backdrop-blur-xl md:hidden">
          <div className="space-y-3 px-4 pb-6 pt-4">
            {t.navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="block rounded-lg px-4 py-3 font-body text-white/80 transition-colors duration-240 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <PillButton
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full"
              >
                {t.talk}
              </PillButton>
            </div>
            <div className="flex justify-center pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
