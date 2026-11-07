import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import PillButton from './ui/PillButton';

const translations = {
  en: {
    label: 'WHO I AM',
    title: 'I like seeing a product through, end to end.',
    paragraphs: [
      "I'm Stéphane Badiane, a full-stack developer and designer based in Dakar. For more than 5 years, I've been designing websites and applications for real projects, from the interface through to launch.",
      "I draw the interface, write the code, then follow the product once it's in real users' hands. That's how LaB, RestoPro and Emargix were built.",
    ],
    cta: 'See my work',
    alt: 'Stéphane Badiane au travail',
  },
  fr: {
    label: 'QUI JE SUIS',
    title: "J'aime suivre un produit de bout en bout.",
    paragraphs: [
      "Je suis Stéphane Badiane, développeur full-stack et designer à Dakar. Depuis plus de 5 ans, je conçois des sites et des applications pour des projets concrets, de l'interface jusqu'à la mise en ligne.",
      "Je dessine l'interface, j'écris le code, puis je suis le produit une fois entre les mains de vrais utilisateurs. C'est comme ça que LaB, RestoPro et Emargix ont été construits.",
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
