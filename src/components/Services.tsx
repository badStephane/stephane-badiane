import { Code, Palette, ShieldCheck, Smartphone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import AnimatedIcon from './AnimatedIcon';

const translations = {
  en: {
    label: 'WHAT I DO',
    titleLine1: 'FROM DESIGN',
    titleLine2: 'TO DEPLOYMENT',
    services: [
      {
        id: 1,
        title: 'Web development',
        description:
          'I build fast websites and applications, front end and back end.',
        icon: <Code size={40} />,
        features: ['React / Vue.js', 'TypeScript', 'Responsive design', 'Performance'],
      },
      {
        id: 2,
        title: 'Design',
        description:
          'I design clear interfaces and visual identities, from logo to social media graphics.',
        icon: <Palette size={40} />,
        features: ['UI/UX', 'Prototyping', 'Logo', 'Social media graphics'],
      },
      {
        id: 3,
        title: 'Deployment & Security',
        description:
          'I put my projects online and keep them secure and up to date.',
        icon: <ShieldCheck size={40} />,
        features: ['Deployment', 'Updates', 'Security', 'Monitoring'],
      },
      {
        id: 4,
        title: 'Mobile Payment & AI',
        description:
          'I integrate mobile payment and, where it genuinely helps, simple AI features.',
        icon: <Smartphone size={40} />,
        features: ['WAEMU mobile payment', 'API integration', 'Simple AI features'],
      },
    ],
  },
  fr: {
    label: 'CE QUE JE FAIS',
    titleLine1: 'DU DESIGN',
    titleLine2: 'AU DÉPLOIEMENT',
    services: [
      {
        id: 1,
        title: 'Développement web',
        description:
          'Je construis des sites et des applications rapides, du front au back.',
        icon: <Code size={40} />,
        features: ['React / Vue.js', 'TypeScript', 'Design responsive', 'Performance'],
      },
      {
        id: 2,
        title: 'Design',
        description:
          'Je dessine des interfaces claires et des identités visuelles, du logo aux visuels réseaux sociaux.',
        icon: <Palette size={40} />,
        features: ['UI/UX', 'Prototypage', 'Logo', 'Visuels réseaux sociaux'],
      },
      {
        id: 3,
        title: 'Déploiement et sécurité',
        description:
          'Je mets mes projets en ligne et je les garde sécurisés et à jour.',
        icon: <ShieldCheck size={40} />,
        features: ['Mise en ligne', 'Mises à jour', 'Sécurité', 'Suivi'],
      },
      {
        id: 4,
        title: 'Paiement mobile et IA',
        description:
          "J'intègre le paiement mobile et, quand c'est vraiment utile, des fonctions d'IA simples.",
        icon: <Smartphone size={40} />,
        features: ['Paiement mobile UEMOA', "Intégration d'API", 'Fonctions IA simples'],
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
                <p className="mt-3 max-w-xl font-body text-base font-medium leading-relaxed text-white/60">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/15 px-3 py-1 font-body text-xs font-medium text-white/70"
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
