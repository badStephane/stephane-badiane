import { Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl backdrop-blur-sm transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                <img 
                  src="/sbadiane.jpg"
                  alt="GDNIGHTMARE - Creative Professional"
                  className="w-100 h-86 object-cover rounded-2xl transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          
          <div className="text-white order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Target className="text-white" size={16} />
              <span className="text-white font-medium">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Lead product designer and art director.
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              I'm a passionate creative professional with over 5 years of experience crafting digital experiences that matter. I believe exceptional design should not only captivate visually but also solve real problems and create meaningful connections between brands and users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;