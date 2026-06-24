import { useState } from 'react';
import { Code, Palette, Database, Server, Globe, Zap, Star, Award, FolderGit2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';

// Niveaux qualitatifs (plus crédibles que des % d'auto-évaluation)
const tiers = {
  expert: { fr: 'Expert', en: 'Expert', style: 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30' },
  advanced: { fr: 'Avancé', en: 'Advanced', style: 'bg-blue-500/20 text-blue-200 border border-blue-400/30' },
  intermediate: { fr: 'Intermédiaire', en: 'Intermediate', style: 'bg-white/10 text-blue-200 border border-blue-500/20' },
} as const;
type Tier = keyof typeof tiers;

const translations = {
  en: {
    sectionTitle: 'Skills & ',
    sectionSubtitle: 'Technologies',
    badge: 'My Technical Expertise',
    description: 'Fullstack developer and designer passionate about cybersecurity, I work with a wide range of modern technologies.',
    achievements: [
      { number: "10+", label: "Technologies", icon: <Award size={20} /> },
      { number: "3+", label: "Years of experience", icon: <Star size={20} /> },
      { number: "3", label: "Live projects", icon: <FolderGit2 size={20} /> },
      { number: "5", label: "Technical areas", icon: <Server size={20} /> },
    ]
  },
  fr: {
    sectionTitle: 'Compétences & ',
    sectionSubtitle: 'Technologies',
    badge: 'Mon Expertise Technique',
    description: "Développeur et designer fullstack passionné par la cybersécurité, je travaille avec un large éventail de technologies modernes.",
    achievements: [
      { number: "10+", label: "Technologies", icon: <Award size={20} /> },
      { number: "3+", label: "Années d'expérience", icon: <Star size={20} /> },
      { number: "3", label: "Projets en ligne", icon: <FolderGit2 size={20} /> },
      { number: "5", label: "Domaines techniques", icon: <Server size={20} /> },
    ]
  },
};

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: language === 'fr' ? 'Backend' : 'Backend',
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Django", logo: "/skills/django.webp", tier: "intermediate" },
        { name: "Node.js", logo: "/skills/node.webp", tier: "intermediate" },
        { name: "Go", logo: "/skills/go.webp", tier: "intermediate" },
        { name: "Rust", logo: "/skills/rust.webp", tier: "intermediate" },
        { name: "REST", logo: "/skills/rest.webp", tier: "intermediate" },
        { name: "GraphQL", logo: "/skills/graphql.webp", tier: "intermediate" },
      ]
    },
    frontend: {
      title: language === 'fr' ? 'Frontend' : 'Frontend',
      icon: <Globe size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "JavaScript", logo: "/skills/javascript.webp", tier: "intermediate" },
        { name: "React", logo: "/skills/react.webp", tier: "intermediate" },
        { name: "Angular", logo: "/skills/angular.webp", tier: "intermediate" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.webp", tier: "intermediate" },
      ]
    },
    database: {
      title: language === 'fr' ? 'Bases de données' : 'Databases',
      icon: <Database size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "SQLite", logo: "/skills/sqlite.webp", tier: "intermediate" },
        { name: "PostgreSQL", logo: "/skills/postgresql.webp", tier: "intermediate" },
        { name: "MongoDB", logo: "/skills/mongodb.webp", tier: "intermediate" },
      ]
    },
    design: {
      title: language === 'fr' ? 'Design' : 'Design',
      icon: <Palette size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Photoshop", logo: "/skills/photoshop.webp", tier: "intermediate" },
        { name: "Illustrator", logo: "/skills/illustrator.webp", tier: "intermediate" },
        { name: "Figma", logo: "/skills/figma.webp", tier: "intermediate" },
      ]
    },
    tools: {
      title: language === 'fr' ? 'Outils & Systèmes' : 'Tools & Systems',
      icon: <Server size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Docker", logo: "/skills/docker.webp", tier: "intermediate" },
        { name: "Windows", logo: "/skills/windows.webp", tier: "advanced" },
        { name: "Ubuntu", logo: "/skills/ubuntu.webp", tier: "advanced" },
      ]
    }
  };

  const active = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8">
            <Zap className="text-blue-400" size={18} />
            <span className="text-blue-200 font-semibold">{t.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight break-words">
            {t.sectionTitle}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
              {t.sectionSubtitle}
            </span>
          </h2>

          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </Reveal>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {t.achievements.map((achievement, index) => (
            <Reveal key={index} delay={index * 80} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 hover:bg-white/10 transition-all duration-320 ease-out-expo hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center">
                <div className="flex justify-center mb-3 text-blue-400">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-blue-200 font-medium">
                  {achievement.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-240 ease-out-expo transform hover:scale-105 active:scale-95 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 backdrop-blur-sm text-blue-200 hover:bg-white/20 border border-blue-500/20'
              }`}
            >
              <div className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                {active.icon}
                {active.title}
              </h3>
              <div className={`w-24 h-1 bg-gradient-to-r ${active.color} mx-auto rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {active.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/10 transition-all duration-320 ease-out-expo border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain transition-transform duration-320 ease-out-expo group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        fallback.classList.remove('hidden');
                        fallback.textContent = skill.name.charAt(0);
                      }}
                    />
                    <span className="text-blue-300 font-bold text-lg hidden"></span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-lg leading-tight">{skill.name}</h4>
                    <span className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${tiers[skill.tier as Tier].style}`}>
                      {tiers[skill.tier as Tier][language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
