/** Domaines d'expertise (ordre d'affichage des sections) */
export type Domain = 'fullstack' | 'uiux' | 'graphisme';

export type Project = {
  id: number;
  title: string;
  /** Image de l'aperçu : dépose un screenshot dans /public/projects/ */
  image: string;
  /** Logo de marque (/public/projects/logos/) · badge sur la capture, ou cover si coverLogo */
  logo?: string;
  /** Si vrai : affiche le logo centré au lieu de la capture */
  coverLogo?: boolean;
  /** Galerie de logos/visuels (carte branding) : remplace l'aperçu par une grille */
  gallery?: string[];
  /** Domaine d'expertise (défaut : fullstack) */
  domain?: Domain;
  /** Lien vers le site en ligne (laisser vide pour masquer le lien) */
  url?: string;
  tech: string[];
  year: string;
  description: { fr: string; en: string };
};

// Pour ajouter un projet : duplique une entrée. Captures dans /public/projects/ (.webp).
export const projects: Project[] = [
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
    url: 'https://emargix.com',
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
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tauri', 'shadcn/ui'],
    year: '2026',
    description: {
      fr: 'Logiciel complet de gestion de restaurant : caisse (POS), affichage cuisine en temps réel, suivi du service et administration. Disponible en web et en application desktop native (macOS, Windows, Linux).',
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
    tech: ['User Research', 'Wireframing', 'Prototypage', 'Mobile-first'],
    year: '2026',
    description: {
      fr: "Conception du parcours d'achat de LaB : de la découverte d'une soirée à la réservation d'une table VIP et au paiement. Wireframes, prototypage et optimisation mobile-first pour réduire les étapes du checkout.",
      en: 'Purchase flow design for LaB: from discovering a party to booking a VIP table and paying. Wireframes, prototyping and mobile-first optimization to shorten the checkout.',
    },
  },
  {
    id: 9,
    title: 'Interface & parcours · Emargix',
    image: '/projects/uiux/emargix-flow.webp',
    logo: '/projects/logos/emargix.webp',
    coverLogo: true,
    domain: 'uiux',
    url: 'https://emargix.com',
    tech: ['User Research', 'Wireframing', 'Prototypage', 'Mobile-first'],
    year: '2026',
    description: {
      fr: "Conception de l'interface d'Emargix : parcours de signature électronique en temps réel, écrans de feuille de présence et d'export, pensés pour une prise en main rapide sur le terrain (tablette et mobile).",
      en: 'UI design for Emargix: real-time e-signature flow, sign-in sheet and export screens, designed for quick pickup in the field (tablet and mobile).',
    },
  },
  {
    id: 10,
    title: 'Identités de marque · Logos',
    image: '/projects/graphisme/branding.webp',
    gallery: [
      '/projects/logos/patho-lis.svg',
      '/projects/logos/restopro.svg',
      '/projects/logos/actio.svg',
      '/projects/logos/emargix.webp',
    ],
    domain: 'graphisme',
    tech: ['Logo', 'Branding', 'Vectoriel (SVG)', 'Déclinaisons'],
    year: '2026',
    description: {
      fr: "Création des identités visuelles de mes produits : conception des logos Patho-LIS, RestoPro, Actio et Emargix, du concept au vectoriel, avec leurs déclinaisons (icône, version horizontale, fond clair et foncé).",
      en: 'Visual identities for my products: logo design for Patho-LIS, RestoPro, Actio and Emargix, from concept to vector, with their variations (icon, horizontal, light and dark backgrounds).',
    },
  },
];
