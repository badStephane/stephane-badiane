import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    kicker: 'STÉPHANE BADIANE · DAKAR',
    titleLine1: 'FULL-STACK',
    titleLine2: 'DEVELOPER',
    titleLine3: '& DESIGNER',
    description:
      "I design and build web applications, from the first mockup to launch. Here you'll find my projects, the tools I use and how to reach me.",
    viewWork: 'View my work',
    contact: 'Contact me',
    alt: 'Stéphane Badiane, développeur full-stack et designer',
  },
  fr: {
    kicker: 'STÉPHANE BADIANE · DAKAR',
    titleLine1: 'DÉVELOPPEUR',
    titleLine2: 'FULL-STACK',
    titleLine3: 'ET DESIGNER',
    description:
      "Je conçois et je développe des applications web, de la première maquette à la mise en ligne. Ici, vous trouverez mes projets, les outils que j'utilise et comment me joindre.",
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
