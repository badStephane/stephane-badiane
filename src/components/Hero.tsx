import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    kicker: 'PORTFOLIO — 2026',
    titleLine1: 'FULL-STACK',
    titleLine2: 'DEVELOPER &',
    titleLine3: 'DESIGNER',
    description:
      'I design and build complete digital products from interface to backend for founders and teams who need it done right, end to end.',
    viewWork: 'View my work',
    contact: 'Contact me',
    alt: 'Stéphane Badiane, développeur full-stack et designer',
  },
  fr: {
    kicker: 'PORTFOLIO — 2026',
    titleLine1: 'DÉVELOPPEUR',
    titleLine2: 'FULL-STACK &',
    titleLine3: 'DESIGNER',
    description:
      "Je conçois et je développe des produits numériques complets, de l'interface au backend, pour des porteurs de projet qui veulent que ce soit bien fait, du début à la fin.",
    viewWork: 'Voir mes projets',
    contact: 'Me contacter',
    alt: 'Stéphane Badiane, développeur full-stack et designer',
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-hero-gradient pt-20"
    >
      <img
        src="/images/profile-cutout.png"
        alt={t.alt}
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[58%] w-auto -translate-x-1/2 select-none object-contain object-bottom sm:h-[70%] lg:left-auto lg:right-[6%] lg:h-[84%] lg:translate-x-0"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:pb-20">
        <div>
          <p className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            {t.kicker}
          </p>
          <h1 className="text-h1 text-white">
            <span className="block">{t.titleLine1}</span>
            <span className="block">{t.titleLine2}</span>
            <span className="block text-white/40">{t.titleLine3}</span>
          </h1>

          <div className="mt-8 max-w-md">
            <p className="font-body text-lg font-semibold leading-relaxed text-white/85">
              {t.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PillButton href="#projects" tone="light">
                {t.viewWork}
                <ArrowRight size={18} />
              </PillButton>
              <PillButton href="#contact" tone="dark" className="border border-white/20">
                {t.contact}
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
