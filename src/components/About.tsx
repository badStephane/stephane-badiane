import React from 'react';
import { Award, Users, Code, Target, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Done", icon: <Award size={24} /> },
    { number: "25+", label: "Happy Clients", icon: <Users size={24} /> },
    { number: "100K+", label: "Lines of Code", icon: <Code size={24} /> }
  ];

  const skills = [
    // Languages
    { name: "Python", logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png", level: 75 },
    { name: "JavaScript", logo: "https://images.icon-icons.com/2108/PNG/512/javascript_icon_130900.png", level: 75 },
    { name: "Go", logo: "https://images.icon-icons.com/2699/PNG/512/golang_official_logo_icon_169092.png", level: 80 },
    { name: "Rust", logo: "https://images.icon-icons.com/2699/PNG/512/rust_lang_logo_icon_169776.png", level: 80 },
  
    // Frontend
    { name: "React", logo: "https://images.icon-icons.com/2415/PNG/512/react_original_logo_icon_146374.png", level: 70 },
    { name: "Angular", logo: "https://images.icon-icons.com/2107/PNG/512/file_type_angular_icon_130754.png", level: 60 },
    { name: "Tailwind CSS", logo: "https://images.icon-icons.com/2107/PNG/512/file_type_tailwind_icon_130128.png", level: 45 },
  
    // Database
    { name: "MySQL", logo: "https://images.icon-icons.com/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png", level: 70 },
    { name: "SQLite", logo: "https://images.icon-icons.com/2107/PNG/512/file_type_sqlite_icon_130153.png", level: 75 },
    { name: "PostgreSQL", logo: "https://images.icon-icons.com/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png", level: 50 },
    { name: "MongoDB", logo: "https://images.icon-icons.com/2107/PNG/512/file_type_mongo_icon_130383.png", level: 50 },
  
    // Design
    { name: "Photoshop", logo: "https://images.icon-icons.com/3053/PNG/512/adobe_photoshop_macos_bigsur_icon_190436.png", level: 90 },
    { name: "Illustrator", logo: "https://images.icon-icons.com/3053/PNG/512/adobe_illustrator_macos_bigsur_icon_190447.png", level: 90 },
    { name: "Figma", logo: "https://images.icon-icons.com/3053/PNG/512/figma_macos_bigsur_icon_190183.png", level: 85 },
  
    // Tools
    { name: "Docker", logo: "https://images.icon-icons.com/2415/PNG/512/docker_original_wordmark_logo_icon_146557.png", level: 80 },
  
    // OS
    { name: "Windows", logo: "https://images.icon-icons.com/836/PNG/512/Windows_Phone_icon-icons.com_66782.png", level: 90 },
    { name: "Ubuntu", logo: "https://images.icon-icons.com/195/PNG/256/OS_Linux_23399.png", level: 85 }
  ];
  

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
                  src="/public/sbadiane.jpg"
                  alt="GDNIGHTMARE - Creative Professional"
                  className="w-100 h-86 object-cover rounded-2xl transform scale-x-[-1]"
                />
              </div>
              
              {/* Floating Achievement Badge */}
              {/* <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-2">
                  <Star className="text-orange-500" size={20} />
                  <div>
                    <div className="text-slate-800 font-bold text-sm">Top Rated</div>
                    <div className="text-slate-600 text-xs">Designer</div>
                  </div>
                </div>
              </div> */}
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
            
            {/* <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-center mb-3 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Download Resume
            </button> */}
          </div>
        </div>
        
        {/* <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            Skills & Tools For Those Looking For
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img className="w-20 h-20" src={skill.logo} alt={skill.name} />
                </div>
                <div className="text-white font-bold text-lg mb-4">{skill.name}</div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-white/80 text-sm"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;