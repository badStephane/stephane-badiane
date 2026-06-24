import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, FolderGit2, User, Users, CreditCard } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';

/** Domaines d'expertise (ordre d'affichage des sections) */
type Domain = 'fullstack' | 'uiux' | 'graphisme';
const DOMAIN_ORDER: Domain[] = ['fullstack', 'uiux', 'graphisme'];

type Project = {
  id: number;
  title: string;
  /** Image de l'aperçu : dépose un screenshot dans /public/projects/ */
  image: string;
  /** Logo de marque (/public/projects/logos/) · badge sur la capture, ou cover si coverLogo */
  logo?: string;
  /** Si vrai : affiche le logo centré sur fond clair au lieu de la capture */
  coverLogo?: boolean;
  /** Galerie de logos/visuels (carte branding) : remplace l'aperçu par une grille */
  gallery?: string[];
  /** Domaine d'expertise (défaut : fullstack) */
  domain?: Domain;
  /** Rôle sur le projet (traduit) + type pour l'icône */
  role?: { fr: string; en: string; type: 'solo' | 'collab' | 'frontend' };
  /** Lien vers le site en ligne (laisser vide pour masquer le bouton) */
  url?: string;
  /** Affiche le badge « Bientôt en ligne » quand il n'y a pas d'URL */
  soon?: boolean;
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
    domains: {
      fullstack: 'FullStack Development',
      uiux: 'UI/UX Design',
      graphisme: 'Graphic Design',
    },
  },
  fr: {
    badge: 'Mes réalisations',
    title: 'Mes Derniers ',
    highlight: 'Projets',
    intro: "Une sélection de sites et d'applications que j'ai conçus et développés, de l'idée jusqu'à la mise en ligne.",
    visit: 'Voir le site',
    code: 'Code',
    soon: 'Bientôt en ligne',
    domains: {
      fullstack: 'Développement FullStack',
      uiux: 'UI/UX Design',
      graphisme: 'Graphisme',
    },
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
    role: { fr: 'Conçu et développé en solo', en: 'Designed & built solo', type: 'solo' },
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
    role: { fr: 'Collaboration · intégration du paiement', en: 'Collaboration · payment integration', type: 'collab' },
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
    role: { fr: 'Conçu et développé en solo', en: 'Designed & built solo', type: 'solo' },
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Render', 'Supabase'],
    year: '2026',
    description: {
      fr: "Application d'émargement en ligne : feuilles de présence numériques, collecte de signatures électroniques en temps réel et export PDF, sans installation.",
      en: 'Online attendance app: digital sign-in sheets, real-time e-signature collection and PDF export, with no installation.',
    },
  },
  {
    id: 4,
    title: 'RestoPro · Gestion de restaurant',
    image: '/projects/restopro.webp',
    logo: '/projects/logos/restopro.svg',
    coverLogo: true,
    url: 'https://restopro-demo.vercel.app',
    role: { fr: 'Conçu et développé en solo', en: 'Designed & built solo', type: 'solo' },
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tauri', 'shadcn/ui'],
    year: '2026',
    description: {
      fr: "Logiciel complet de gestion de restaurant : caisse (POS), affichage cuisine en temps réel, suivi du service et administration. Disponible en web et en application desktop native (macOS, Windows, Linux).",
      en: 'Full restaurant management software: POS, real-time kitchen display, service tracking and admin. Available on the web and as a native desktop app (macOS, Windows, Linux).',
    },
  },
  {
    id: 5,
    title: 'Patho-LIS · Système de laboratoire',
    image: '/projects/patho-lis.webp',
    logo: '/projects/logos/patho-lis.svg',
    coverLogo: true,
    url: 'https://patho-lis-demo.vercel.app',
    role: { fr: 'Conçu et développé en solo', en: 'Designed & built solo', type: 'solo' },
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'shadcn/ui', 'Tailwind'],
    year: '2026',
    description: {
      fr: "Système d'information pour laboratoire d'anatomopathologie : gestion des patients et des dossiers, worklist, contrôle qualité, reporting et archivage, avec authentification et gestion des rôles.",
      en: 'Information system for a pathology lab: patient and case management, worklist, quality control, reporting and archiving, with authentication and role management.',
    },
  },
  {
    id: 6,
    title: 'Actio · Gestion des inscriptions',
    image: '/projects/gestion-inscription.webp',
    logo: '/projects/logos/actio.svg',
    coverLogo: true,
    url: 'https://actio-demo.vercel.app',
    role: { fr: 'Conçu et développé en solo', en: 'Designed & built solo', type: 'solo' },
    tech: ['React', 'TypeScript', 'Vite', 'Tauri', 'SQLite', 'Tailwind'],
    year: '2026',
    description: {
      fr: "Application de gestion des inscriptions aux activités : enregistrement des participants, statistiques et journal d'audit. Disponible en web et en application desktop native (base SQLite locale).",
      en: 'Activity registration management app: participant enrollment, statistics and audit log. Available on the web and as a native desktop app (local SQLite database).',
    },
  },
  {
    id: 7,
    title: 'Design System · RestoPro',
    image: '/projects/uiux/restopro-ds.webp',
    logo: '/projects/logos/restopro.svg',
    coverLogo: true,
    domain: 'uiux',
    url: 'https://restopro-demo.vercel.app',
    role: { fr: 'Recherche, UI & design system', en: 'Research, UI & design system', type: 'solo' },
    tech: ['Design System', 'Prototypage', 'shadcn/ui', 'Tailwind'],
    year: '2026',
    description: {
      fr: "Conception de l'interface et du design system de RestoPro : recherche utilisateur, palette, typographie, tokens et composants (caisse, écran cuisine) avec leurs états (chargement, erreur, vide) pour une expérience cohérente sur web et desktop.",
      en: 'UI and design system for RestoPro: user research, palette, typography, tokens and components (POS, kitchen screen) with their loading, error and empty states, for a consistent experience across web and desktop.',
    },
  },
  {
    id: 8,
    title: 'Parcours billetterie · LaB',
    image: '/projects/uiux/lab-flow.webp',
    logo: '/projects/logos/lab.webp',
    coverLogo: true,
    domain: 'uiux',
    url: 'https://paskclab.com',
    role: { fr: 'UX & parcours utilisateur', en: 'UX & user flow', type: 'solo' },
    tech: ['User Research', 'Wireframing', 'Prototypage', 'Mobile-first'],
    year: '2026',
    description: {
      fr: "Conception du parcours d'achat de LaB : de la découverte d'une soirée à la réservation d'une table VIP et au paiement. Wireframes, prototypage et optimisation mobile-first pour réduire les étapes du checkout.",
      en: 'Purchase flow design for LaB: from discovering a party to booking a VIP table and paying. Wireframes, prototyping and mobile-first optimization to shorten the checkout.',
    },
  },
  {
    id: 9,
    title: 'Identités de marque · Logos',
    image: '/projects/graphisme/branding.webp',
    gallery: [
      '/projects/logos/patho-lis.svg',
      '/projects/logos/restopro.svg',
      '/projects/logos/actio.svg',
      '/projects/logos/emargix.webp',
    ],
    domain: 'graphisme',
    role: { fr: 'Création des logos & identité', en: 'Logo & identity design', type: 'solo' },
    tech: ['Logo', 'Branding', 'Vectoriel (SVG)', 'Déclinaisons'],
    year: '2026',
    description: {
      fr: "Création des identités visuelles de mes produits : conception des logos Patho-LIS, RestoPro, Actio et Emargix, du concept au vectoriel, avec leurs déclinaisons (icône, version horizontale, fond clair et foncé).",
      en: 'Visual identities for my products: logo design for Patho-LIS, RestoPro, Actio and Emargix, from concept to vector, with their variations (icon, horizontal, light and dark backgrounds).',
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
            <span className="text-blue-200 font-medium">{t.badge}</span>
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

        {/* Projets groupés par domaine */}
        {DOMAIN_ORDER.map((domain) => {
          const items = projects.filter((p) => (p.domain ?? 'fullstack') === domain);
          if (items.length === 0) return null;
          return (
            <div key={domain} className="mb-16 last:mb-0">
              <Reveal className="mb-8 flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                  {t.domains[domain]}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 100}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:bg-white/10 transition-all duration-320 ease-out-expo hover:-translate-y-2"
            >
              {/* Aperçu */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900">
                {project.gallery ? (
                  /* Galerie de logos (carte branding) */
                  <div className="grid grid-cols-2 gap-3 w-full h-full bg-gradient-to-br from-white to-blue-50 p-5">
                    {project.gallery.map((src) => (
                      <div
                        key={src}
                        className="flex items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-blue-100 p-3"
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="max-h-12 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : project.coverLogo && project.logo ? (
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
                {(project.url || project.soon || project.github) && (
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
                    ) : project.soon ? (
                      <span className="flex-1 bg-white/10 text-blue-200 py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                        {t.soon}
                      </span>
                    ) : null}
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
                )}
              </div>

              {/* Contenu */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-240">
                  {project.title}
                </h3>
                {project.role && (
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold mb-3">
                    {project.role.type === 'solo' ? (
                      <User size={14} />
                    ) : project.role.type === 'collab' ? (
                      <Users size={14} />
                    ) : (
                      <CreditCard size={14} />
                    )}
                    {project.role[language]}
                  </div>
                )}
                <p className="text-blue-200 text-sm leading-relaxed mb-4 flex-1">
                  {project.description[language]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-200 border border-blue-500/20 px-3 py-1 rounded-lg text-xs font-medium"
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
                    className="group/btn inline-flex items-center gap-2 text-blue-200 hover:text-white font-semibold text-sm transition-colors duration-240"
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
