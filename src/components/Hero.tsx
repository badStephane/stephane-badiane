import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // ~60fps
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        {/* Effets visuels lourds désactivés sur mobile */}
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-xl animate-pulse hidden sm:block"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
          }}
        ></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-lg animate-bounce hidden md:block"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-lg animate-pulse hidden md:block"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-blue-300 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 items-center">
          <div className="text-white text-center lg:text-left">            
            <h1 className=" font-black mb-8 leading-tight">
              <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl block">WELCOME </span>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                I AM STEPHANE BADIANE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creative designer & developer crafting exceptional digital experiences with passion, innovation, and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3">
                View My Work 
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="group border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3">
                Download CV 
                <Download className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end mt-8">
            <div className="relative">
              <div className="w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img 
                  src="/mypp.jpg"
                  alt="GDNIGHTMARE - Creative Professional"
                  className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl shadow-2xl animate-float">
                <div className="text-white text-center">
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-2xl shadow-2xl animate-float-delayed">
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
    </section>
  );
};

export default Hero;