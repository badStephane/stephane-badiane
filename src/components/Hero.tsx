import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    kicker: 'CODANIS · DAKAR',
    titleLine1: 'DIGITAL TOOLS',
    titleLine2: 'THAT KEEP',
    titleLine3: 'RUNNING',
    description:
      'I design and run websites and applications for SMEs and startups in West Africa. One point of contact, from the first conversation to launch.',
    viewWork: 'View my work',
    contact: 'Contact me',
    alt: 'Stéphane Badiane, développeur full-stack et designer',
  },
  fr: {
    kicker: 'CODANIS · DAKAR',
    titleLine1: 'DES OUTILS',
    titleLine2: 'NUMÉRIQUES',
    titleLine3: 'QUI TOURNENT',
    description:
      "Je conçois et je fais tourner les sites et les applications des PME et des startups d'Afrique de l'Ouest. Un seul interlocuteur, du premier échange à la mise en ligne.",
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
      className="relative flex min-h-screen flex-col overflow-hidden bg-secondary pt-20 lg:flex-row lg:items-end"
    >
      <img
        src="/images/profile-cutout.png"
        alt={t.alt}
        className="pointer-events-none mx-auto min-h-[18rem] w-full max-w-md flex-1 basis-0 select-none object-cover object-top lg:absolute lg:bottom-0 lg:right-0 xl:right-[6%] lg:z-0 lg:mx-0 lg:h-[84%] lg:min-h-0 lg:w-auto lg:max-w-none lg:flex-none lg:basis-auto lg:object-contain lg:object-bottom"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 pb-12 pt-6 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:pb-20 lg:pt-16">
        <div>
          <p className="mb-6 font-body text-sm font-medium uppercase tracking-[0.3em] text-white/70">
            {t.kicker}
          </p>
          <h1 className="text-h1 text-white lg:whitespace-nowrap">
            <span className="block">{t.titleLine1}</span>
            <span className="block">{t.titleLine2}</span>
            <span className="block text-white/40">{t.titleLine3}</span>
          </h1>

          <div className="mt-8 max-w-md">
            <p className="font-body text-lg font-medium leading-relaxed text-white/85">
              {t.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PillButton href="#projects">
                {t.viewWork}
                <ArrowRight size={18} />
              </PillButton>
              <PillButton href="#contact" tone="outline">
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
