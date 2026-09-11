import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    label: 'WHO I AM',
    title: 'Full-stack developer & designer.',
    description:
      'A versatile full-stack developer with a passion for design, I bring 3 years of experience crafting captivating digital experiences. I blend front-end and back-end development skills with a solid understanding of UX/UI and graphic design to conceive and implement comprehensive solutions. My adaptability and eagerness to learn let me approach new challenges with enthusiasm and quickly integrate into diverse environments.',
    cta: 'See my work',
    alt: 'Stéphane Badiane au travail',
  },
  fr: {
    label: 'QUI JE SUIS',
    title: 'Développeur Full-Stack & Designer.',
    description:
      "Développeur full-stack polyvalent passionné de design, je cumule 3 ans d'expérience dans la création d'expériences numériques captivantes. J'allie mes compétences front-end et back-end à une solide compréhension de l'UX/UI et du design graphique pour concevoir et mettre en œuvre des solutions complètes. Mon adaptabilité et ma soif d'apprendre me permettent d'aborder chaque nouveau défi avec enthousiasme et de m'intégrer rapidement dans des environnements variés.",
    cta: 'Voir mes projets',
    alt: 'Stéphane Badiane au travail',
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24">
      {/* Forme organique décorative en arrière-plan */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-hero-from/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="grid grid-cols-1 gap-10 rounded-3xl bg-paper p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/metoo.webp"
                alt={t.alt}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>

            <div className="flex flex-col justify-center">
              <SectionLabel tone="light" className="mb-6">
                {t.label}
              </SectionLabel>
              <h2 className="text-h2 text-ink">{t.title}</h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink/70">
                {t.description}
              </p>
              <PillButton href="#projects" tone="dark" className="mt-8 w-fit">
                {t.cta}
                <ArrowRight size={18} />
              </PillButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
