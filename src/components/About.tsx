import { Target } from 'lucide-react';

import { useLanguageAndTheme } from './LanguageAndThemeContext';

const translations = {
  en: {
    badge: 'About Me',
    title: 'Full-Stack Developer & Designer.',
    description: `A versatile Full-stack Developer with a passion for design, I bring 3 years of experience in crafting captivating digital experiences. I blend my front-end and back-end development skills with a solid understanding of UX/UI and graphic design to conceive and implement comprehensive solutions. My adaptability and eagerness to learn allow me to approach new challenges with enthusiasm and quickly integrate into diverse environments. I believe that exceptional design, coupled with robust architecture, is key to forging meaningful connections between brands and their users.`,
    alt: 'GDNIGHTMARE - Creative Professional',
  },
  fr: {
    badge: 'À propos de moi',
    title: 'Développeur Full-Stack & Designer.',
    description: `Développeur full-stack polyvalent passionné de design, je cumule 3 ans d’expérience dans la création d’expériences numériques captivantes. J’allie mes compétences front-end et back-end à une solide compréhension de l’UX/UI et du design graphique pour concevoir et mettre en œuvre des solutions complètes. Mon adaptabilité et ma soif d’apprendre me permettent d’aborder chaque nouveau défi avec enthousiasme et de m’intégrer rapidement dans des environnements variés. Je crois qu’un design d’exception, allié à une architecture robuste, est la clé pour créer des liens forts entre les marques et leurs utilisateurs.`,
    alt: 'GDNIGHTMARE - Professionnel Créatif',
  },
};

const About = () => {
  const { language } = useLanguageAndTheme();
  const t = translations[language];
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center relative overflow-hidden">      
    {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl backdrop-blur-sm transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                <img 
                  src="/metoo.jpg"
                  alt={t.alt}
                  className="w-100 h-86 object-cover rounded-2xl transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          
          <div className="text-white order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Target size={16} />
              <span className="font-medium">{t.badge}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {t.title}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;