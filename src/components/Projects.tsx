import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, FolderGit2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';

type Project = {
  id: number;
  title: string;
  /** Image de l'aperçu : dépose un screenshot dans /public/projects/ */
  image: string;
  /** Logo de marque (/public/projects/logos/) · badge sur la capture, ou cover si coverLogo */
  logo?: string;
  /** Si vrai : affiche le logo centré sur fond clair au lieu de la capture */
  coverLogo?: boolean;
  /** Lien vers le site en ligne (laisser vide pour masquer le bouton) */
  url?: string;
  /** Lien vers le code source (optionnel) */
  github?: string;
  tech: string[];
  year: string;
  /** Description traduite */
  description: { fr: string; en: string };
};

const translations = {
  en: {
    badge: 'Featured Work',
    title: 'My Latest ',
    highlight: 'Projects',
    intro: 'A selection of websites and applications I have designed and developed, from concept to deployment.',
    visit: 'Visit site',
    code: 'Code',
    soon: 'Coming soon',
  },
  fr: {
    badge: 'Mes réalisations',
    title: 'Mes Derniers ',
    highlight: 'Projets',
    intro: "Une sélection de sites et d'applications que j'ai conçus et développés, de l'idée jusqu'à la mise en ligne.",
    visit: 'Voir le site',
    code: 'Code',
    soon: 'Bientôt en ligne',
  },
};

// Pour ajouter un projet : duplique une entrée. Captures dans /public/projects/ (.webp).
const projects: Project[] = [
  {
    id: 1,
    title: 'LaB · Événementiel & billetterie',
    image: '/projects/lab.webp',
    logo: '/projects/logos/lab.webp',
    coverLogo: true,
    url: 'https://paskclab.com',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    year: '2026',
    description: {
      fr: "Plateforme événementielle nightlife à Dakar : découverte des soirées, billetterie en ligne et réservation de tables VIP, avec paiement et gestion des commandes.",
      en: 'Dakar nightlife events platform: browse parties, buy tickets online and book VIP tables, with payments and order management.',
    },
  },
  {
    id: 2,
    title: 'Atypix · Formations certifiantes',
    image: '/projects/atypix.webp',
    logo: '/projects/logos/atypix.webp',
    coverLogo: true,
    url: 'https://atypix.com',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
    year: '2026',
    description: {
      fr: "Site d'un organisme de formation certifiante (PMP, Scrum, Agile), partenaire agréé PMI ATP et Scrum.org : catalogue de formations et inscription en ligne.",
      en: 'Website for a certified training provider (PMP, Scrum, Agile), an authorized PMI ATP & Scrum.org partner: course catalog and online enrollment.',
    },
  },
  {
    id: 3,
    title: 'Emargix · Émargement numérique',
    image: '/projects/emargix.webp',
    logo: '/projects/logos/emargix.webp',
    coverLogo: true,
    url: 'https://emargix.onrender.com',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Render', 'Supabase'],
    year: '2026',
    description: {
      fr: "Application d'émargement en ligne : feuilles de présence numériques, collecte de signatures électroniques en temps réel et export PDF, sans installation.",
      en: 'Online attendance app: digital sign-in sheets, real-time e-signature collection and PDF export, with no installation.',
    },
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  // Suit l'image en erreur pour basculer sur un fond dégradé + initiale
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <FolderGit2 className="text-blue-400" size={16} />
            <span className="text-blue-300 font-medium">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t.title}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.highlight}
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-8"></div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 100}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:bg-white/10 transition-all duration-320 ease-out-expo hover:-translate-y-2"
            >
              {/* Aperçu */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900">
                {project.coverLogo && project.logo ? (
                  /* Logo de marque centré sur fond clair */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-blue-50 p-8">
                    <img
                      src={project.logo}
                      alt={`Logo ${project.title}`}
                      loading="lazy"
                      className="max-h-24 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-110"
                    />
                  </div>
                ) : !brokenImages[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    onError={() =>
                      setBrokenImages((prev) => ({ ...prev, [project.id]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-black text-blue-400/40">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Badge logo de marque (uniquement sur les cartes avec capture) */}
                {project.logo && !project.coverLogo && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg flex items-center justify-center">
                    <img
                      src={project.logo}
                      alt={`Logo ${project.title}`}
                      loading="lazy"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                )}

                {/* Année */}
                <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/20">
                  {project.year}
                </div>

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-320">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-240 ease-out-expo hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        {t.visit}
                      </a>
                    ) : (
                      <span className="flex-1 bg-white/10 text-blue-200 py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                        {t.soon}
                      </span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.code} · ${project.title}`}
                        className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-240 ease-out-expo hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-240">
                  {project.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-4 flex-1">
                  {project.description[language]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lien principal */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold text-sm transition-colors duration-240"
                  >
                    {t.visit}
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-240"
                    />
                  </a>
                )}
              </div>

              {/* Lueur au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
