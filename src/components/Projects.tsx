import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import { projects, type Domain } from './projectsData';

const DOMAIN_ORDER: Domain[] = ['fullstack', 'uiux', 'graphisme'];

const translations = {
  en: {
    label: 'OUR WORK',
    title: 'RECENT PROJECTS',
    intro:
      'A selection of websites and applications I have designed and developed, from concept to deployment.',
    visit: 'Visit site',
    domains: {
      fullstack: 'Full-Stack Development',
      uiux: 'UI/UX Design',
      graphisme: 'Graphic Design',
    },
  },
  fr: {
    label: 'MES RÉALISATIONS',
    title: 'PROJETS RÉCENTS',
    intro:
      "Une sélection de sites et d'applications que j'ai conçus et développés, de l'idée jusqu'à la mise en ligne.",
    visit: 'Voir le site',
    domains: {
      fullstack: 'Développement Full-Stack',
      uiux: 'UI/UX Design',
      graphisme: 'Graphisme',
    },
  },
};

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  return (
    <section id="projects" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionLabel tone="light" className="mb-6">
            {t.label}
          </SectionLabel>
          <h2 className="text-h2 text-ink">{t.title}</h2>
          <p className="mt-6 max-w-2xl font-body text-lg font-semibold text-ink/60">{t.intro}</p>
        </Reveal>

        {DOMAIN_ORDER.map((domain) => {
          const items = projects.filter((p) => (p.domain ?? 'fullstack') === domain);
          if (items.length === 0) return null;

          return (
            <div key={domain} className="mb-16 last:mb-0">
              <Reveal className="mb-6 flex items-center gap-4">
                <h3 className="whitespace-nowrap font-display text-lg uppercase tracking-wide text-ink/50">
                  {t.domains[domain]}
                </h3>
                <span className="h-px flex-1 bg-ink/10" />
              </Reveal>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {items.map((project, index) => (
                  <Reveal
                    key={project.id}
                    delay={(index % 4) * 80}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-320 ease-out-expo hover:-translate-y-1 hover:shadow-xl"
                  >
                    <a
                      href={project.url}
                      target={project.url ? '_blank' : undefined}
                      rel={project.url ? 'noopener noreferrer' : undefined}
                      className={project.url ? '' : 'pointer-events-none'}
                    >
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-hero-from/10 to-hero-to/10">
                        {project.gallery ? (
                          <div className="grid h-full grid-cols-2 gap-3 p-5">
                            {project.gallery.map((src) => (
                              <div
                                key={src}
                                className="flex items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-ink/10"
                              >
                                <img src={src} alt="" loading="lazy" className="max-h-12 w-auto object-contain" />
                              </div>
                            ))}
                          </div>
                        ) : project.coverLogo && project.logo ? (
                          <div className="flex h-full items-center justify-center p-8">
                            <img
                              src={project.logo}
                              alt={`Logo ${project.title}`}
                              loading="lazy"
                              className="max-h-20 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-110"
                            />
                          </div>
                        ) : !brokenImages[project.id] ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                            onError={() => setBrokenImages((prev) => ({ ...prev, [project.id]: true }))}
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="font-display text-5xl uppercase text-hero-to/30">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        )}

                        <div className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-body text-xs font-semibold text-white backdrop-blur-sm">
                          {project.year}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h4 className="font-display text-lg uppercase leading-tight text-ink">
                            {project.title}
                          </h4>
                          {project.url && (
                            <ArrowUpRight
                              size={20}
                              className="shrink-0 text-ink/40 transition-transform duration-240 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                            />
                          )}
                        </div>
                        <p className="font-body text-sm text-ink/60">{project.description[language]}</p>
                      </div>
                    </a>
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
