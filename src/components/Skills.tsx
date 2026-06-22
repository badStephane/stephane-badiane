import { useState, useEffect } from 'react';
import { Code, Palette, Database, Server, Globe, Zap, Star, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';

const translations = {
  en: {
    sectionTitle: 'Skills & ',
    sectionSubtitle: 'Technologies',
    badge: 'My Technical Expertise',
    description: 'Fullstack developer and designer passionate about cybersecurity, I used a wide range of modern technologies.',
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Databases",
      design: "Design",
      tools:"Tools & Systems",
    },
    achievements: [
      { number: "10+", label: "Technologies explored", icon: <Award size={20} /> },
      { number: "3+", label: "Years of Experience", icon: <Star size={20} /> },
      { number: "70%", label: "Design Level", icon: <Palette size={20} /> },
      { number: "65%", label: "Frontend Level", icon: <Globe size={20} /> },
      { number: "50%", label: "Backend Level", icon: <Server size={20} /> }
    ]
  },
  fr: {
    sectionTitle: 'Compétences & ',
    sectionSubtitle: 'Technologies',
    badge: 'Mon Expertise Technique',
    description: "Développeur et designer fullstack passionné par la cybersécurité, j'ai utilisé un large éventail de technologies modernes.",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Bases de données",
      design: "Design",
      tools:"Outils & Systèmes",
    },
    achievements: [
      { number: "10+", label: "Technologies utilisées", icon: <Award size={20} /> },
      { number: "3+", label: "Années d'expérience", icon: <Star size={20} /> },
      { number: "70%", label: "Niveau Design", icon: <Palette size={20} /> },
      { number: "65%", label: "Niveau Frontend", icon: <Globe size={20} /> },
      { number: "50%", label: "Niveau Backend", icon: <Server size={20} /> }
    ]
  },
};
const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('backend');
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    backend: {
      title: t.categories.backend,
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Django", logo: "/skills/django.webp", level: 60 },
        { name: "Node.js", logo: "/skills/node.webp", level: 70 },
        { name: "Go", logo: "/skills/go.webp", level: 70 },
        { name: "Rust", logo: "/skills/rust.webp", level: 70 },
        { name: "REST", logo: "/skills/rest.webp", level: 70 },
        { name: "GraphQL", logo: "/skills/graphql.webp", level: 70 }
      ]
    },
    frontend: {
      title: t.categories.frontend,
      icon: <Globe size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "JavaScript", logo: "/skills/javascript.webp", level: 75 },
        { name: "React", logo: "/skills/react.webp", level: 70 },
        { name: "Angular", logo: "/skills/angular.webp", level: 60 },
        { name: "Tailwind CSS", logo: "/skills/tailwind.webp", level: 45 },
        
      ]
    },
    database: {
      title: t.categories.database,
      icon: <Database size={24} />, 
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "SQLite", logo: "/skills/sqlite.webp", level: 70 },
        { name: "PostgreSQL", logo: "/skills/postgresql.webp", level: 50 },
        { name: "MongoDB", logo: "/skills/mongodb.webp", level: 50 }
      ]
    },
    design: {
      title: t.categories.design,
      icon: <Palette size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Photoshop", logo: "/skills/photoshop.webp", level: 75 },
        { name: "Illustrator", logo: "/skills/illustrator.webp", level: 75 },
        { name: "Figma", logo: "/skills/figma.webp", level: 60 }
      ]
    },
    tools: {
      title: t.categories.tools,
      icon: <Server size={24} />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Docker", logo: "/skills/docker.webp", level: 60 },
        { name: "Windows", logo: "/skills/windows.webp", level: 70 },
        { name: "Ubuntu", logo: "/skills/ubuntu.webp", level: 70 }
      ]
    }
  };
  const getSkillColor = (level: number) => {
    if (level >= 75) return "from-cyan-400 to-blue-500";
    if (level >= 65) return "from-blue-400 to-cyan-500";
    if (level >= 50) return "from-blue-500 to-cyan-600";
    return "from-blue-600 to-cyan-700";
  };

  return (
    <section className="py-20 relative overflow-hidden">
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
            <span className="text-blue-300 font-semibold">{t.badge}</span>
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
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
                <div className="text-sm text-blue-300 font-medium">
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
                  : 'bg-white/10 backdrop-blur-sm text-blue-300 hover:bg-white/20 border border-blue-500/20'
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
          {!(activeCategory in skillCategories) ? null : (
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                {skillCategories[activeCategory as keyof typeof skillCategories].icon}
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h3>
              <div className={`w-24 h-1 bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} mx-auto rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-blue-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling!.textContent = skill.name.charAt(0);
                        }}
                      />
                      <span className="text-blue-400 font-bold text-lg hidden"></span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      <span className="text-blue-300 font-bold text-sm">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-blue-900/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: animatedBars ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div 
                      className={`absolute top-0 h-3 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                      style={{ 
                        width: animatedBars ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    ></div>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="mt-4 flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      skill.level >= 75 ? 'bg-cyan-500/20 text-cyan-300' :
                      skill.level >= 65 ? 'bg-blue-500/20 text-blue-300' :
                      skill.level >= 50 ? 'bg-blue-600/20 text-blue-400' :
                      'bg-blue-700/20 text-blue-500'
                    }`}>
                      {skill.level >= 75 ? (language === 'fr' ? 'Expert' : 'Expert') :
                       skill.level >= 65 ? (language === 'fr' ? 'Avancé' : 'Advanced') :
                       skill.level >= 50 ? (language === 'fr' ? 'Intermédiaire' : 'Intermediate') :
                       (language === 'fr' ? 'Débutant' : 'Beginner')}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`${
                            i < Math.floor(skill.level / 20) ? 'text-blue-400 fill-current' : 'text-blue-800'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;