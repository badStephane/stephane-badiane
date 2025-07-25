import { Palette, Code, Zap, Tangent } from 'lucide-react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';

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
        gradient: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-white',
        darkBg: '',
        darkText: '',
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description: 'Designing intuitive and visually appealing user interfaces for outstanding experiences across all platforms and devices.',
        icon: <Palette size={32} />, 
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        gradient: 'from-blue-600 to-blue-700',
        bgColor: 'bg-slate-900',
        darkBg: '',
        darkText: '',
      },
      {
        id: 3,
        title: 'Graphic Design',
        description: 'Creating visually engaging graphics that communicate ideas effectively and capture attention.',
        icon: <Tangent size={32} />, 
        features: ['Social Media Graphics', 'Business Cards', 'Logo Design', 'Photo Retouching'],
        gradient: 'from-cyan-600 to-blue-600',
        bgColor: 'bg-white',
        darkBg: '',
        darkText: '',
      },
      {
        id: 4,
        title: 'IT Maintenance',
        description: 'Support, troubleshooting, and maintenance of your IT equipment to ensure optimal performance and security.',
        icon: <Zap size={32} />, 
        features: ['PC Troubleshooting', 'Software Installation', 'Security & Antivirus', 'Remote Assistance'],
        gradient: 'from-cyan-700 to-blue-800',
        bgColor: 'bg-slate-900',
        darkBg: '',
        darkText: '',
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
        gradient: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-white',
        darkBg: '',
        darkText: '',
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description: 'Conception d’interfaces intuitives et esthétiques pour des expériences remarquables sur tous supports.',
        icon: <Palette size={32} />, 
        features: ['Recherche utilisateur', 'Wireframing', 'Prototypage', 'Design Systems'],
        gradient: 'from-blue-600 to-blue-700',
        bgColor: 'bg-slate-900',
        darkBg: '',
        darkText: '',
      },
      {
        id: 3,
        title: 'Graphisme',
        description: 'Création de visuels impactants pour communiquer efficacement et capter l’attention.',
        icon: <Tangent size={32} />, 
        features: ['Visuels réseaux sociaux', 'Cartes de visite', 'Logo', 'Retouche photo'],
        gradient: 'from-cyan-600 to-blue-600',
        bgColor: 'bg-white',
        darkBg: '',
        darkText: '',
      },
      {
        id: 4,
        title: 'Maintenance Informatique',
        description: 'Assistance, dépannage et maintenance de vos équipements informatiques pour garantir leur bon fonctionnement et leur sécurité.',
        icon: <Zap size={32} />, 
        features: ['Dépannage PC', 'Installation logicielle', 'Sécurité & Antivirus', 'Assistance à distance'],
        gradient: 'from-cyan-700 to-blue-800',
        bgColor: 'bg-slate-900',
        darkBg: '',
        darkText: '',
      }
    ]
  }
};

const Services = () => {
  const { language } = useLanguageAndTheme();
  const t = translations[language];
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="text-blue-400" size={16} />
            <span className="text-blue-300 font-medium">{t.sectionSubtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.map((service) => (
            <div 
              key={service.id} 
              className={`group relative overflow-hidden rounded-3xl ${service.bgColor} hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                service.bgColor === 'bg-slate-900' ? 'border border-blue-500/20' : 'shadow-xl'
              }`}
            >
              <div className="p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className={`text-6xl font-black ${
                      service.bgColor === 'bg-slate-900' ? 'text-blue-500/20' : 'text-blue-100'
                    }`}>
                      0{service.id}
                    </span>
                  </div>
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  service.bgColor === 'bg-slate-900' ? 'text-white' : 'text-slate-800'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  service.bgColor === 'bg-slate-900' ? 'text-blue-200' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        service.bgColor === 'bg-slate-900' 
                          ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' 
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;