import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import AnimatedIcon from './AnimatedIcon';
import { projects } from './projectsData';

const YEARS_OF_EXPERIENCE = '3+';
const totalProjects = projects.length;
const liveProjects = projects.filter((project) => Boolean(project.url)).length;

const translations = {
  en: {
    label: 'WHY WORK WITH ME',
    titleLine1: 'ONE PERSON,',
    titleLine2: 'THE FULL PROCESS',
    points: [
      {
        icon: <Rocket size={28} />,
        title: 'End-to-end delivery',
        description: 'From wireframe to production deploy, I own the whole build — no handoff friction.',
      },
      {
        icon: <ShieldCheck size={28} />,
        title: 'Design + engineering',
        description: 'UI/UX and full-stack development under one roof, so the product stays coherent.',
      },
      {
        icon: <Sparkles size={28} />,
        title: 'Built to last',
        description: 'Typed codebases, clear architecture, and interfaces designed for real users.',
      },
    ],
    stats: [
      { number: `${totalProjects}`, label: 'Projects built' },
      { number: `${liveProjects}`, label: 'Live in production' },
      { number: YEARS_OF_EXPERIENCE, label: 'Years of experience' },
    ],
  },
  fr: {
    label: 'POURQUOI TRAVAILLER AVEC MOI',
    titleLine1: 'UNE SEULE PERSONNE,',
    titleLine2: 'TOUT LE PROCESSUS',
    points: [
      {
        icon: <Rocket size={28} />,
        title: 'Livraison de bout en bout',
        description: 'Du wireframe au déploiement en production, je porte le projet entier — sans friction de passation.',
      },
      {
        icon: <ShieldCheck size={28} />,
        title: 'Design + ingénierie',
        description: "UI/UX et développement full-stack au même endroit, pour un produit cohérent.",
      },
      {
        icon: <Sparkles size={28} />,
        title: 'Fait pour durer',
        description: 'Code typé, architecture claire et interfaces pensées pour de vrais utilisateurs.',
      },
    ],
    stats: [
      { number: `${totalProjects}`, label: 'Projets réalisés' },
      { number: `${liveProjects}`, label: 'En ligne en production' },
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
              <p className="mt-3 font-body text-base font-semibold leading-relaxed text-white/60">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-16 sm:grid-cols-3">
          {t.stats.map((stat, index) => (
            <Reveal key={stat.label} variant="scale" delay={index * 80} className="text-center sm:text-left">
              <div className="font-display text-5xl text-white">{stat.number}</div>
              <div className="mt-2 font-body text-sm font-semibold uppercase tracking-wide text-white/50">
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
