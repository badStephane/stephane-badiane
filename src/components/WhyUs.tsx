import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import AnimatedIcon from './AnimatedIcon';
import { projects } from './projectsData';

const YEARS_OF_EXPERIENCE = '5+';
/** Les liens de démo contiennent ce marqueur : ils ne comptent pas comme en production */
const DEMO_URL_MARKER = '-demo';
/** Une carte design ou logo reprend un produit déjà compté : seules les fiches full-stack comptent */
const builtProjects = projects.filter((project) => (project.domain ?? 'fullstack') === 'fullstack');
const totalProjects = builtProjects.length;
const liveProjects = builtProjects.filter(
  (project) => project.url && !project.url.includes(DEMO_URL_MARKER)
).length;

const translations = {
  en: {
    label: 'IN PRACTICE',
    titleLine1: 'REAL PRODUCTS,',
    titleLine2: 'LIVE FOR YOU TO SEE',
    points: [
      {
        icon: <Rocket size={28} />,
        title: 'Products that sell',
        description:
          'LaB sells its tickets online in Dakar, with payments and order management. Emargix sells its online attendance service.',
      },
      {
        icon: <ShieldCheck size={28} />,
        title: 'Demanding trades',
        description: "RestoPro covers a restaurant's till and kitchen, Patho-LIS a laboratory's patient files.",
      },
      {
        icon: <Sparkles size={28} />,
        title: 'Design and code in one place',
        description:
          'I designed the interface and wrote the code of LaB, RestoPro and Emargix, from the first screen to the last line.',
      },
    ],
    stats: [
      { number: `${totalProjects}`, label: 'Websites and applications built' },
      { number: `${liveProjects}`, label: 'Live on their own domain' },
      { number: YEARS_OF_EXPERIENCE, label: 'Years of experience' },
    ],
  },
  fr: {
    label: 'EN PRATIQUE',
    titleLine1: 'DES PRODUITS RÉELS,',
    titleLine2: 'À VOIR EN LIGNE',
    points: [
      {
        icon: <Rocket size={28} />,
        title: 'Des produits qui vendent',
        description:
          "LaB vend ses billets en ligne à Dakar, avec paiement et gestion des commandes. Emargix vend son service d'émargement en ligne.",
      },
      {
        icon: <ShieldCheck size={28} />,
        title: 'Métiers exigeants',
        description: "RestoPro couvre la caisse et la cuisine d'un restaurant, Patho-LIS les dossiers d'un laboratoire.",
      },
      {
        icon: <Sparkles size={28} />,
        title: 'Design et code au même endroit',
        description:
          "J'ai conçu l'interface et écrit le code de LaB, RestoPro et Emargix, du premier écran à la dernière ligne.",
      },
    ],
    stats: [
      { number: `${totalProjects}`, label: 'Sites et applications développés' },
      { number: `${liveProjects}`, label: 'En ligne sur leur propre domaine' },
      { number: YEARS_OF_EXPERIENCE, label: "Années d'expérience" },
    ],
  },
};

const WhyUs = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionLabel className="mb-6">{t.label}</SectionLabel>
          <h2 className="text-h2 text-white">
            <span className="block">{t.titleLine1}</span>
            <span className="block text-white/40">{t.titleLine2}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 100} className="rounded-2xl border border-white/10 p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <AnimatedIcon delay={index * 100}>{point.icon}</AnimatedIcon>
              </div>
              <h3 className="font-display text-xl uppercase text-white">{point.title}</h3>
              <p className="mt-3 font-body text-base font-medium leading-relaxed text-white/60">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-16 sm:grid-cols-3">
          {t.stats.map((stat, index) => (
            <Reveal key={stat.label} variant="scale" delay={index * 80} className="text-center sm:text-left">
              <div className="font-display text-5xl text-white">{stat.number}</div>
              <div className="mt-2 font-body text-sm font-medium uppercase tracking-wide text-white/50">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
