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

const DISPLAY_FONT = "font-['Space_Grotesk'] uppercase tracking-tight";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#5b84b5_0%,#2e4a70_100%)] pt-20 lg:items-end"
    >
      <img
        src="/images/profile-cutout.png"
        alt={t.alt}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[48%] w-full select-none object-cover object-bottom [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%)] lg:inset-auto lg:bottom-0 lg:left-auto lg:right-[6%] lg:top-auto lg:h-[84%] lg:w-auto lg:object-contain lg:[mask-image:none]"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#2e4a70]/15 via-transparent to-[#0a0a0a]/75 lg:hidden" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-6 pb-12 pt-16 text-center sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:pb-20 lg:text-left">
        <div>
          <p className={`mb-6 text-sm font-semibold tracking-[0.3em] text-white/70 ${DISPLAY_FONT}`}>
            {t.kicker}
          </p>
          <h1
            className={`text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-none text-white ${DISPLAY_FONT}`}
          >
            <span className="block">{t.titleLine1}</span>
            <span className="block">{t.titleLine2}</span>
            <span className="block text-white/40">{t.titleLine3}</span>
          </h1>

          <div className="mx-auto mt-8 max-w-md lg:mx-0">
            <p className="text-lg font-semibold leading-relaxed text-white/85">{t.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
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
