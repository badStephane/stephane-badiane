import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le contenu de l'email
    const emailSubject = formData.subject || 'Nouveau message de contact';
    const emailBody = `
      Nom: ${formData.name}
      Message:
      ${formData.message}
    `;
    
    // Ouvrir le client email par défaut
    const mailtoLink = `mailto:badstephane14@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:badstephane14@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+221773548342';
  };

  const contactCards = [
    {
      title: "Email Me",
      subtitle: "badstephane14@gmail.com",
      description: "Send me an email anytime",
      icon: <Mail size={24} />,
      gradient: "from-blue-600 to-blue-500",
      action: "Send Email",
      onClick: handleEmailClick
    },
    {
      title: "Call Me",
      subtitle: "+221 77 354 83 42",
      description: "Mon-Fri from 10am to 5pm",
      icon: <Phone size={24} />,
      gradient: "from-cyan-600 to-blue-500",
      action: "Call Now",
      onClick: handlePhoneClick
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="text-blue-400" size={16} />
            <span className="text-blue-300 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Have an exciting project in mind? I'd love to hear about it and discuss how we can bring your vision to life with exceptional design and development.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-blue-500/20 p-8 hover:bg-white/10 transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${card.gradient} text-white mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-300 text-lg font-semibold mb-2">{card.subtitle}</p>
                <p className="text-blue-200 mb-6">{card.description}</p>
                <button 
                  onClick={card.onClick}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${card.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {card.action}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Send Me a Message</h3>
              <p className="text-blue-200">Fill out the form below and I'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-blue-300 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-300 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-blue-300 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-blue-300 font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none placeholder-blue-300/50 border border-blue-500/20 transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 mx-auto"
                >
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;