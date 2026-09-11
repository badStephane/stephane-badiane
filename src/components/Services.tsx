import { Code, Palette, Tangent, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import AnimatedIcon from './AnimatedIcon';

const translations = {
  en: {
    label: 'WHAT I DO',
    titleLine1: 'EVERYTHING YOUR PRODUCT',
    titleLine2: 'NEEDS TO SHIP',
    services: [
      {
        id: 1,
        title: 'Full-Stack Development',
        description:
          'Building fast, responsive web applications using modern technologies and solid development practices.',
        icon: <Code size={40} />,
        features: ['React / Vue.js', 'TypeScript', 'Responsive design', 'Performance'],
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description:
          'Designing intuitive, visually consistent interfaces for a great experience across every device.',
        icon: <Palette size={40} />,
        features: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
      },
      {
        id: 3,
        title: 'Graphic Design',
        description: 'Creating visuals that communicate ideas clearly and capture attention.',
        icon: <Tangent size={40} />,
        features: ['Social media graphics', 'Business cards', 'Logo design', 'Photo retouching'],
      },
      {
        id: 4,
        title: 'IT Maintenance',
        description:
          'Support, troubleshooting and maintenance of IT equipment to keep it secure and performant.',
        icon: <Zap size={40} />,
        features: ['PC troubleshooting', 'Software installation', 'Security & antivirus', 'Remote assistance'],
      },
    ],
  },
  fr: {
    label: 'CE QUE JE FAIS',
    titleLine1: 'TOUT CE DONT VOTRE',
    titleLine2: 'PROJET A BESOIN',
    services: [
      {
        id: 1,
        title: 'Développement Full-Stack',
        description:
          "Création d'applications web rapides et réactives avec des technologies modernes et de bonnes pratiques de développement.",
        icon: <Code size={40} />,
        features: ['React / Vue.js', 'TypeScript', 'Design responsive', 'Performance'],
      },
      {
        id: 2,
        title: 'UI/UX Design',
        description:
          "Conception d'interfaces intuitives et cohérentes pour une expérience de qualité sur tous les supports.",
        icon: <Palette size={40} />,
        features: ['Recherche utilisateur', 'Wireframing', 'Prototypage', 'Design systems'],
      },
      {
        id: 3,
        title: 'Graphisme',
        description: "Création de visuels qui communiquent clairement et captent l'attention.",
        icon: <Tangent size={40} />,
        features: ['Visuels réseaux sociaux', 'Cartes de visite', 'Logo', 'Retouche photo'],
      },
      {
        id: 4,
        title: 'Maintenance Informatique',
        description:
          'Assistance, dépannage et maintenance de vos équipements informatiques pour garantir sécurité et performance.',
        icon: <Zap size={40} />,
        features: ['Dépannage PC', 'Installation logicielle', 'Sécurité & antivirus', 'Assistance à distance'],
      },
    ],
  },
};

const SERVICE_NUMBER_DIGITS = 2;

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionLabel className="mb-6">{t.label}</SectionLabel>
          <h2 className="text-h2 text-white">
            <span className="block">{t.titleLine1}</span>
            <span className="block text-white/40">{t.titleLine2}</span>
          </h2>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {t.services.map((service, index) => (
            <Reveal
              key={service.id}
              variant={index % 2 === 0 ? 'left' : 'right'}
              className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12"
            >
              <span className="font-display text-h5 text-accent">
                {String(service.id).padStart(SERVICE_NUMBER_DIGITS, '0')}
              </span>

              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl font-body text-base font-semibold leading-relaxed text-white/60">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/15 px-3 py-1 font-body text-xs font-semibold text-white/70"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex h-24 w-24 items-center justify-center justify-self-start rounded-2xl border border-white/10 bg-white/5 text-accent lg:justify-self-end">
                <AnimatedIcon delay={index * 100}>{service.icon}</AnimatedIcon>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
