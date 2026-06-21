import { useEffect, useRef, useState } from 'react';
import { useLanguageAndTheme } from './LanguageAndThemeContext';

const translations = {
  en: {
    sectionTitle: 'Welcome',
    sectionSubtitle: 'I AM STEPHANE BADIANE',
    description: 'Creative designer & developer crafting exceptional digital experiences with passion, innovation, and cutting-edge technology.',
    alt: 'GDNIGHTMARE - Creative Professional',
  },
  fr: {
    sectionTitle: 'Bienvenue',
    sectionSubtitle: 'JE SUIS STEPHANE BADIANE',
    description: 'Concepteur et développeur créatif qui conçoit des expériences numériques exceptionnelles avec passion, innovation et technologie de pointe.',
    alt: 'GDNIGHTMARE - Professionnel Créatif',
  },
};

const Hero = () => {
  const { language } = useLanguageAndTheme();
  const t = translations[language];
  // Halo qui suit la souris : piloté en direct via ref + rAF (aucun re-render React)
  const blobRef = useRef<HTMLDivElement>(null);
  // La vidéo n'est chargée que sur desktop (économie de data sur mobile / bas débit)
  const [showVideo, setShowVideo] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches
  );

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)');
    const update = () => setShowVideo(mql.matches);
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    // Pas de parallaxe sur écran tactile ou si l'utilisateur réduit les animations
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let raf = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (blobRef.current) {
          // translate3d = composité sur le GPU → pas de layout/paint
          blobRef.current.style.transform = `translate3d(${e.clientX * 0.02}px, ${e.clientY * 0.02}px, 0)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center relative overflow-hidden">
      {/* Animated Background */}
      {/* Video Background Positioned Absolutely */}
      {showVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          role="presentation"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          src="/hero-bg.mp4"
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 pointer-events-none"
          style={{ backgroundImage: 'url(/hero-poster.jpg)' }}
          role="presentation"
        />
      )}
      {/* Content container with relative to keep content above the video */}
      <div className='flex relative z-10 w-full'>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        {/* Halo qui suit la souris · animé via ref (cf. plus haut), désactivé sur mobile */}
        <div
          ref={blobRef}
          className="absolute left-1/4 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-xl animate-pulse hidden sm:block will-change-transform"
        ></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-lg animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-lg animate-pulse hidden md:block"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping hidden sm:block"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 items-center">
          <div className="text-white text-center lg:text-left motion-safe:animate-fade-up">
            <h1 className=" font-black mb-8 leading-tight">
              <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl block">{t.sectionTitle}</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {t.sectionSubtitle}
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.description}
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3">
                View My Work 
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="group border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3">
                Download CV 
                <Download className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </button>
            </div> */}
          </div>
          
          <div className="flex justify-center lg:justify-end mt-8">
            <div className="relative">
              <div className="w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img
                  src="/mypp.webp"
                  alt={t.alt}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-2xl animate-float">
                <div className="text-white text-center">
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-12 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl shadow-2xl animate-pulse">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">💡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </div>
    </section>
    
  );
};

export default Hero;