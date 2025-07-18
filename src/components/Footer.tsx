import React from 'react';
import { Github, Linkedin, Twitter, Heart, ArrowUp, Instagram } from 'lucide-react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';

const translations = {
  en: {
    description: 'Creative designer and developer passionate about crafting exceptional digital experiences that inspire, engage, and drive results.',
    quickLinks: 'Quick Links',
    quickLinksList: ['#home', '#about', '#services', '#contact'],
    quickLinksLabels: ['Home', 'About', 'Services', 'Contact'],
    services: 'Services',
    servicesList: ['UI/UX Design', 'FullStack Development', 'Graphic Design', 'IT Maintenance'],
    copyright: 'Made with',
    copyrightEnd: 'and lots of coffee.',
    scrollTop: 'Scroll to top',
  },
  fr: {
    description: 'Designer et développeur passionné par la création d’expériences numériques exceptionnelles qui inspirent, engagent et apportent des résultats.',
    quickLinks: 'Liens rapides',
    quickLinksList: ['#home', '#about', '#services', '#contact'],
    quickLinksLabels: ['Accueil', 'À propos', 'Services', 'Contact'],
    services: 'Services',
    servicesList: ['UI/UX Design', 'Développement FullStack', 'Design Graphique', 'Maintenance IT'],
    copyright: 'Réalisé avec',
    copyrightEnd: 'et beaucoup de café.',
    scrollTop: 'Remonter en haut',
  },
};

const Footer = () => {
  const { language } = useLanguageAndTheme();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  GDNIGHTMARE
                </h3>
                <p className="text-blue-200 mb-8 max-w-md leading-relaxed">
                  {t.description}
                </p>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/badStephane", label: "GitHub" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/st%C3%A9phane-badiane-652812287/", label: "LinkedIn" },
                  { icon: <Twitter size={20} />, href: "https://twitter.com/badiane_steph", label: "Twitter" },
                  { icon: <Instagram size={20} />, href: "https://www.instagram.com/gd_nightmare", label: "Instagram" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className="group bg-blue-500/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 border border-blue-500/20"
                  >
                    <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">{t.quickLinks}</h4>
              <ul className="space-y-4">
                {t.quickLinksList.map((link, index) => (
                  <li key={link}>
                    <a 
                      href={link} 
                      className="text-blue-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {t.quickLinksLabels[index]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">{t.services}</h4>
              <ul className="space-y-4">
                {t.servicesList.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-blue-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 flex items-center gap-2">
              &copy; {currentYear} GDNIGHTMARE Portfolio. {t.copyright} <Heart className="text-red-500" size={16} /> {t.copyrightEnd}
            </p>
            
            <button 
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label={t.scrollTop}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;