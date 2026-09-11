import { FormEvent, ChangeEvent, useState } from 'react';
import { Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';
import Reveal from './Reveal';
import SectionLabel from './ui/SectionLabel';
import PillButton from './ui/PillButton';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

const CONTACT_EMAIL = 'stephane.badiane.dev@gmail.com';
const CONTACT_PHONE_DISPLAY = '+221 77 354 83 42';
const CONTACT_PHONE_HREF = 'tel:+221773548342';

const translations = {
  en: {
    label: 'GET IN TOUCH',
    titleLine1: "LET'S TALK ABOUT",
    titleLine2: 'YOUR PROJECT',
    intro:
      "Have a project in mind? I'd love to hear about it and see how we can bring it to life.",
    labels: { name: 'Full name', email: 'Email address', subject: 'Subject', message: 'Message' },
    placeholders: {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project discussion',
      message: 'Tell me about your project...',
    },
    sendButton: 'Send message',
    mailSubjectFallback: 'New contact message',
    feedback: {
      success: "Message sent! I'll reply within 24h.",
      error: 'Sending failed. Try again or email me directly.',
      sending: 'Sending…',
    },
  },
  fr: {
    label: 'CONTACT',
    titleLine1: 'PARLONS DE',
    titleLine2: 'VOTRE PROJET',
    intro: "Un projet en tête ? J'aimerais en discuter et voir comment le concrétiser.",
    labels: { name: 'Nom complet', email: 'Adresse email', subject: 'Sujet', message: 'Message' },
    placeholders: {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      subject: 'Discussion de projet',
      message: 'Parlez-moi de votre projet...',
    },
    sendButton: 'Envoyer',
    mailSubjectFallback: 'Nouveau message de contact',
    feedback: {
      success: 'Message envoyé ! Je vous réponds sous 24h.',
      error: "Échec de l'envoi. Réessayez ou écrivez-moi directement.",
      sending: 'Envoi…',
    },
  },
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const INPUT_CLASS =
  'w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-body text-white placeholder-white/30 transition-all duration-300 focus:border-accent focus:outline-none';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || t.mailSubjectFallback,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-hero-from/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal variant="left">
            <SectionLabel className="mb-6">{t.label}</SectionLabel>
            <h2 className="text-h2 text-white">
              <span className="block">{t.titleLine1}</span>
              <span className="block text-white/40">{t.titleLine2}</span>
            </h2>
            <p className="mt-6 font-body text-lg font-semibold leading-relaxed text-white/60">{t.intro}</p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors duration-240 hover:border-white/30"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Mail size={20} />
                </span>
                <span className="font-body font-semibold text-white/80">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors duration-240 hover:border-white/30"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Phone size={20} />
                </span>
                <span className="font-body font-semibold text-white/80">{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-body text-sm font-semibold text-white/60">
                    {t.labels.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t.placeholders.name}
                    value={formData.name}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-body text-sm font-semibold text-white/60">
                    {t.labels.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t.placeholders.email}
                    value={formData.email}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-body text-sm font-semibold text-white/60">
                  {t.labels.subject}
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder={t.placeholders.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-body text-sm font-semibold text-white/60">
                  {t.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={t.placeholders.message}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${INPUT_CLASS} resize-none`}
                  required
                />
              </div>

              <div aria-live="polite" className="min-h-[1.5rem]">
                {status === 'success' && (
                  <p className="flex items-center gap-2 font-body font-medium text-sky-400">
                    <CheckCircle2 size={20} /> {t.feedback.success}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 font-body font-medium text-red-400">
                    <AlertCircle size={20} /> {t.feedback.error}
                  </p>
                )}
              </div>

              <PillButton type="submit" tone="light" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    {t.feedback.sending} <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  t.sendButton
                )}
              </PillButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
