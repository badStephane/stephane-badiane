import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

const translations = {
  en: {
    badge: 'Get In Touch',
    title: "Let's Work ",
    highlight: 'Together',
    intro: "Have an exciting project in mind? I'd love to hear about it and discuss how we can bring your vision to life with exceptional design and development.",
    contactCards: [
      {
        title: 'Email Me',
        subtitle: 'stephane.badiane.dev@gmail.com',
        description: 'Send me an email anytime',
        action: 'Send Email',
      },
      {
        title: 'Call Me',
        subtitle: '+221 77 354 83 42',
        description: 'Mon-Fri from 10am to 5pm',
        action: 'Call Now',
      },
    ],
    formTitle: 'Send Me a Message',
    formSubtitle: "Fill out the form below and I'll get back to you within 24 hours",
    labels: {
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
    },
    placeholders: {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project Discussion',
      message: 'Tell me about your project...',
    },
    sendButton: 'Send Message',
    mailSubjectFallback: 'New contact message',
  },
  fr: {
    badge: 'Contactez-moi',
    title: 'Travaillons ',
    highlight: 'Ensemble',
    intro: "Vous avez un projet passionnant en tête ? Je serais ravi d'en discuter et de voir comment nous pouvons concrétiser votre vision avec un design et un développement exceptionnels.",
    contactCards: [
      {
        title: 'Envoyer un email',
        subtitle: 'stephane.badiane.dev@gmail.com',
        description: 'Envoyez-moi un email à tout moment',
        action: 'Envoyer',
      },
      {
        title: 'Appeler',
        subtitle: '+221 77 354 83 42',
        description: 'Lun-Ven de 10h à 17h',
        action: 'Appeler',
      },
    ],
    formTitle: 'Envoyez-moi un message',
    formSubtitle: 'Remplissez le formulaire ci-dessous et je vous répondrai sous 24h',
    labels: {
      name: 'Nom complet',
      email: 'Adresse email',
      subject: 'Sujet',
      message: 'Message',
    },
    placeholders: {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      subject: 'Discussion de projet',
      message: 'Parlez-moi de votre projet...',
    },
    sendButton: 'Envoyer',
    mailSubjectFallback: 'Nouveau message de contact',
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // État d'envoi : pilote le bouton + le message de retour (sans alert bloquant)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const feedback = {
    success: language === 'fr' ? 'Message envoyé ! Je vous réponds sous 24h.' : "Message sent! I'll reply within 24h.",
    error: language === 'fr' ? "Échec de l'envoi. Réessayez ou écrivez-moi directement." : 'Sending failed. Try again or email me directly.',
    sending: language === 'fr' ? 'Envoi…' : 'Sending…',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return; // évite les doubles envois

    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || t.mailSubjectFallback,
      message: formData.message,
    };  
    
    try {
      // 1️⃣ Envoi vers toi
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  
      // 2️⃣ Auto-reply vers l'utilisateur
      // IMPORTANT: dans ton template auto-reply, le "To" doit être {{email}}
      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);
  
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Vide le formulaire
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error'); // on conserve la saisie de l'utilisateur
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:stephane.badiane.dev@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+221773548342';
  };

  const contactCards = [
    {
      ...t.contactCards[0],
      icon: <Mail size={24} />,
      gradient: "from-blue-500 to-cyan-600",
      onClick: handleEmailClick
    },
    {
      ...t.contactCards[1],
      icon: <Phone size={24} />,
      gradient: "from-cyan-600 to-blue-500",
      onClick: handlePhoneClick
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="text-blue-400" size={16} />
            <span className="text-blue-200 font-medium">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t.title}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t.highlight}</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </Reveal>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <Reveal key={index} delay={index * 100} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-blue-500/20 p-8 hover:bg-white/10 transition-all duration-320 ease-out-expo hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${card.gradient} text-white mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-200 text-lg font-semibold mb-2">{card.subtitle}</p>
                <p className="text-blue-200 mb-6">{card.description}</p>
                <button 
                  onClick={card.onClick}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${card.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-240 ease-out-expo transform hover:scale-105 active:scale-95`}
                >
                  {card.action}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Contact Form */}
        <Reveal className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">{t.formTitle}</h3>
              <p className="text-blue-200">{t.formSubtitle}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-blue-200 font-medium">{t.labels.name}</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t.placeholders.name}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-blue-200 font-medium">{t.labels.email}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t.placeholders.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-blue-200 font-medium">{t.labels.subject}</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder={t.placeholders.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-blue-200 font-medium">{t.labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.placeholders.message}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              {/* Message de retour (annoncé aux lecteurs d'écran) */}
              <div aria-live="polite" className="min-h-[1.5rem]">
                {status === 'success' && (
                  <p className="flex items-center justify-center gap-2 text-green-400 font-medium animate-fade-up">
                    <CheckCircle2 size={20} /> {feedback.success}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center justify-center gap-2 text-red-400 font-medium animate-fade-up">
                    <AlertCircle size={20} /> {feedback.error}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-12 py-4 rounded-full font-bold hover:from-amber-300 hover:to-orange-400 transition-all duration-240 ease-out-expo transform hover:scale-105 active:scale-[0.98] shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center gap-3 mx-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      {feedback.sending} <Loader2 size={20} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      {t.sendButton} <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;