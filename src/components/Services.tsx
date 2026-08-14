import { Palette, Code, Zap, Tangent } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import AnimatedIcon from './AnimatedIcon';

const translations = {
  en: {
    sectionTitle: 'My Services',
    sectionSubtitle: 'What I Do',
    services: [
      {
        id: 1,
        title: 'FullStack Development',
        description: 'Building lightning-fast, responsive web applications using cutting-edge technologies and modern development practices.',
        icon: <Code size={32} />,
        features: ['React/Vue.js', 'TypeScript', 'Responsive Design', 'Performance'],
        accent: 'amber',
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description: 'Designing intuitive and visually appealing user interfaces for outstanding experiences across all platforms and devices.',
        icon: <Palette size={32} />,
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        accent: 'blue',
      },
      {
        id: 3,
        title: 'Graphic Design',
        description: 'Creating visually engaging graphics that communicate ideas effectively and capture attention.',
        icon: <Tangent size={32} />,
        features: ['Social Media Graphics', 'Business Cards', 'Logo Design', 'Photo Retouching'],
        accent: 'amber',
      },
      {
        id: 4,
        title: 'IT Maintenance',
        description: 'Support, troubleshooting, and maintenance of your IT equipment to ensure optimal performance and security.',
        icon: <Zap size={32} />,
        features: ['PC Troubleshooting', 'Software Installation', 'Security & Antivirus', 'Remote Assistance'],
        accent: 'blue',
      }
    ]
  },
  fr: {
    sectionTitle: 'Mes Services',
    sectionSubtitle: 'Ce que je fais',
    services: [
      {
        id: 1,
        title: 'Développement FullStack',
        description: 'Création d’applications web rapides et réactives avec les technologies les plus modernes.',
        icon: <Code size={32} />,
        features: ['React/Vue.js', 'TypeScript', 'Design Responsive', 'Performance'],
        accent: 'amber',
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description: 'Conception d’interfaces intuitives et esthétiques pour des expériences remarquables sur tous supports.',
        icon: <Palette size={32} />,
        features: ['Recherche utilisateur', 'Wireframing', 'Prototypage', 'Design Systems'],
        accent: 'blue',
      },
      {
        id: 3,
        title: 'Graphisme',
        description: 'Création de visuels impactants pour communiquer efficacement et capter l’attention.',
        icon: <Tangent size={32} />,
        features: ['Visuels réseaux sociaux', 'Cartes de visite', 'Logo', 'Retouche photo'],
        accent: 'amber',
      },
      {
        id: 4,
        title: 'Maintenance Informatique',
        description: 'Assistance, dépannage et maintenance de vos équipements informatiques pour garantir leur bon fonctionnement et leur sécurité.',
        icon: <Zap size={32} />,
        features: ['Dépannage PC', 'Installation logicielle', 'Sécurité & Antivirus', 'Assistance à distance'],
        accent: 'blue',
      }
    ]
  }
};

const ACCENT = {
  amber: {
    icon: 'bg-gradient-to-r from-emerald-400 to-lime-500 text-slate-900',
    number: 'text-emerald-500/20',
    border: 'border-emerald-400/20',
    chip: 'bg-emerald-500/10 text-emerald-200 border border-emerald-400/20',
    glow: 'from-emerald-500 to-lime-500',
  },
  blue: {
    icon: 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white',
    number: 'text-blue-500/20',
    border: 'border-blue-400/20',
    chip: 'bg-blue-500/10 text-blue-200 border border-blue-500/20',
    glow: 'from-blue-500 to-cyan-600',
  },
} as const;

/** Occupation des cellules du bento (index % 4) : casse la grille 2x2 symétrique */
const BENTO_SPAN = ['lg:col-span-2', 'lg:col-span-1 lg:row-span-2', 'lg:col-span-1', 'lg:col-span-2'];

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-full px-6 py-2 mb-6">
            <AnimatedIcon><Zap className="text-emerald-400" size={16} /></AnimatedIcon>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-300">{t.sectionSubtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </Reveal>

        {/* Bento : la 1re et la 4e carte s'étalent sur deux colonnes, la 2e s'étire sur deux lignes → casse la grille 2x2 symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8">
          {t.services.map((service, index) => {
            const a = ACCENT[service.accent as keyof typeof ACCENT];
            const span = BENTO_SPAN[index % BENTO_SPAN.length];
            return (
            <Reveal
              key={service.id}
              variant={index % 2 === 0 ? 'left' : 'right'}
              delay={(index % 2) * 100}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border ${a.border} hover:bg-white/[0.07] hover:shadow-2xl transition-all duration-320 ease-out-expo transform hover:-translate-y-2 ${span}`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${a.icon} shadow-lg transition-transform duration-320 ease-out-expo group-hover:-rotate-6 group-hover:scale-110`}>
                    <AnimatedIcon delay={index * 120}>{service.icon}</AnimatedIcon>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono text-6xl font-bold ${a.number}`}>
                      0{service.id}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="leading-relaxed mb-6 text-blue-200">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${a.chip}`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${a.glow} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;