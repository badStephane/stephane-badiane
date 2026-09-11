import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    baseline: 'Full-stack developer & designer crafting complete digital products, end to end.',
    navigation: 'NAVIGATION',
    connect: 'CONNECT',
    navLinks: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Work' },
      { id: 'contact', label: 'Contact' },
    ],
    scrollTop: 'Back to top',
  },
  fr: {
    baseline: 'Développeur full-stack & designer, produits numériques complets, de bout en bout.',
    navigation: 'NAVIGATION',
    connect: 'CONNECT',
    navLinks: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projets' },
      { id: 'contact', label: 'Contact' },
    ],
    scrollTop: 'Remonter en haut',
  },
};

const SOCIAL_LINKS = [
  { icon: <Github size={20} />, href: 'https://github.com/badStephane', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/st%C3%A9phane-badiane-652812287/', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/badiane_steph', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/gd_nightmare', label: 'Instagram' },
];

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <img src="/monlogo.webp" width={150} height={100} loading="lazy" alt="Logo Stéphane Badiane" />
            <p className="mt-6 max-w-xs font-body text-sm font-semibold leading-relaxed text-white/50">
              {t.baseline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white/40">{t.navigation}</h4>
            <ul className="mt-6 space-y-3">
              {t.navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-body text-white/70 transition-colors duration-240 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white/40">{t.connect}</h4>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-all duration-240 hover:border-accent hover:text-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-10 sm:flex-row">
          <p className="font-body text-sm text-white/40">&copy; {currentYear} Stéphane Badiane.</p>
          <button
            onClick={scrollToTop}
            aria-label={t.scrollTop}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-transform duration-240 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <p className="mt-10 select-none font-display text-[clamp(2.5rem,10vw,7rem)] uppercase leading-none text-white">
          Stéphane Badiane
        </p>
      </div>
    </footer>
  );
};

export default Footer;
