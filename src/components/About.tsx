import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    label: 'WHO I AM',
    title: 'One point of contact, from start to finish.',
    paragraphs: [
      "I'm Stéphane Badiane, founder of Codanis, a full-stack developer and designer based in Dakar. For 3 years, I've been designing websites and applications for real projects, from the interface through to launch.",
      "With me, you don't have to coordinate several providers. You talk to the person who designs and codes. I explain each choice in plain terms, and your tool stays looked after once it's live.",
    ],
    cta: 'See my work',
    alt: 'Stéphane Badiane au travail',
  },
  fr: {
    label: 'QUI JE SUIS',
    title: 'Un seul interlocuteur, du début à la fin.',
    paragraphs: [
      "Je suis Stéphane Badiane, fondateur de Codanis, développeur full-stack et designer à Dakar. Depuis 3 ans, je conçois des sites et des applications pour des projets concrets, de l'interface jusqu'à la mise en ligne.",
      "Avec moi, vous n'avez pas à coordonner plusieurs prestataires. Vous parlez à la personne qui conçoit et qui code. Je vous explique chaque choix simplement, et votre outil reste suivi une fois en ligne.",
    ],
    cta: 'Voir mes projets',
    alt: 'Stéphane Badiane au travail',
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24">
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
              <h2 className="text-h2 text-ink [text-wrap:balance]">{t.title}</h2>
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-6 font-body text-lg leading-relaxed text-ink/70">
                  {paragraph}
                </p>
              ))}
              <PillButton href="#projects" className="mt-8 w-fit">
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
