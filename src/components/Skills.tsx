import { useState } from 'react';
import { Code, Palette, Database, Server, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import AnimatedIcon from './AnimatedIcon';

const tiers = {
  expert: { fr: 'Expert', en: 'Expert' },
  advanced: { fr: 'Avancé', en: 'Advanced' },
  intermediate: { fr: 'Intermédiaire', en: 'Intermediate' },
} as const;
type Tier = keyof typeof tiers;

const translations = {
  en: {
    label: 'TECHNICAL EXPERTISE',
    title: 'SKILLS & TECHNOLOGIES',
    description: 'Full-stack developer and designer, I work with a wide range of modern technologies.',
  },
  fr: {
    label: 'EXPERTISE TECHNIQUE',
    title: 'COMPÉTENCES & TECHNOLOGIES',
    description: 'Développeur et designer full-stack, je travaille avec un large éventail de technologies modernes.',
  },
};

const skillCategories = {
  backend: {
    title: { fr: 'Backend', en: 'Backend' },
    icon: <Code size={22} />,
    skills: [
      { name: 'Django', logo: '/skills/django.webp', tier: 'intermediate' },
      { name: 'Node.js', logo: '/skills/node.webp', tier: 'intermediate' },
      { name: 'Go', logo: '/skills/go.webp', tier: 'intermediate' },
      { name: 'Rust', logo: '/skills/rust.webp', tier: 'intermediate' },
      { name: 'REST', logo: '/skills/rest.webp', tier: 'intermediate' },
      { name: 'GraphQL', logo: '/skills/graphql.webp', tier: 'intermediate' },
    ],
  },
  frontend: {
    title: { fr: 'Frontend', en: 'Frontend' },
    icon: <Globe size={22} />,
    skills: [
      { name: 'JavaScript', logo: '/skills/javascript.webp', tier: 'intermediate' },
      { name: 'React', logo: '/skills/react.webp', tier: 'intermediate' },
      { name: 'Angular', logo: '/skills/angular.webp', tier: 'intermediate' },
      { name: 'Tailwind CSS', logo: '/skills/tailwind.webp', tier: 'intermediate' },
    ],
  },
  database: {
    title: { fr: 'Bases de données', en: 'Databases' },
    icon: <Database size={22} />,
    skills: [
      { name: 'SQLite', logo: '/skills/sqlite.webp', tier: 'intermediate' },
      { name: 'PostgreSQL', logo: '/skills/postgresql.webp', tier: 'intermediate' },
      { name: 'MongoDB', logo: '/skills/mongodb.webp', tier: 'intermediate' },
    ],
  },
  design: {
    title: { fr: 'Design', en: 'Design' },
    icon: <Palette size={22} />,
    skills: [
      { name: 'Photoshop', logo: '/skills/photoshop.webp', tier: 'intermediate' },
      { name: 'Illustrator', logo: '/skills/illustrator.webp', tier: 'intermediate' },
      { name: 'Figma', logo: '/skills/figma.webp', tier: 'intermediate' },
    ],
  },
  tools: {
    title: { fr: 'Outils & Systèmes', en: 'Tools & Systems' },
    icon: <Server size={22} />,
    skills: [
      { name: 'Docker', logo: '/skills/docker.webp', tier: 'intermediate' },
      { name: 'Windows', logo: '/skills/windows.webp', tier: 'advanced' },
      { name: 'Ubuntu', logo: '/skills/ubuntu.webp', tier: 'advanced' },
    ],
  },
} as const;

type CategoryKey = keyof typeof skillCategories;

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('backend');
  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionLabel tone="light" className="mb-6">
            {t.label}
          </SectionLabel>
          <h2 className="text-h2 text-ink">{t.title}</h2>
          <p className="mt-6 max-w-2xl font-body text-lg font-semibold text-ink/60">{t.description}</p>
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-3">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as CategoryKey)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold transition-all duration-240 ease-out-expo ${
                activeCategory === key
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink/15 text-ink/60 hover:border-ink/40'
              }`}
            >
              <AnimatedIcon motion={key === 'frontend' ? 'spin' : 'draw'}>{category.icon}</AnimatedIcon>
              {category.title[language]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {active.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-320 ease-out-expo hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ink/5">
                <img src={skill.logo} alt={skill.name} loading="lazy" width={36} height={36} className="h-9 w-9 object-contain" />
              </div>
              <div className="min-w-0">
                <h3 className="font-body text-base font-bold leading-tight text-ink">{skill.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-ink/5 px-2.5 py-0.5 font-body text-xs font-semibold text-ink/60">
                  {tiers[skill.tier as Tier][language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
