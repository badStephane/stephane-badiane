import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowRight, Code, Palette, Shield, Database } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "SecureBank Pro",
      subtitle: "Cybersecurity Banking Platform",
      description: "Advanced banking platform with multi-layer security, real-time threat detection, and encrypted transactions. Built with cutting-edge cybersecurity protocols.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      category: "Cybersecurity",
      tech: ["React", "Node.js", "Blockchain", "AI Security"],
      features: ["End-to-End Encryption", "Biometric Auth", "Real-time Monitoring"],
      status: "Live",
      year: "2024"
    },
    {
      id: 2,
      title: "CyberShield Dashboard",
      subtitle: "Network Security Monitoring",
      description: "Real-time cybersecurity dashboard for monitoring network threats, analyzing vulnerabilities, and managing security incidents with AI-powered insights.",
      image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-blue-700 via-blue-800 to-slate-800",
      category: "Security Dashboard",
      tech: ["Vue.js", "Python", "TensorFlow", "Docker"],
      features: ["Threat Detection", "Vulnerability Scanner", "Incident Response"],
      status: "Development",
      year: "2024"
    },
    {
      id: 3,
      title: "DevSecOps Platform",
      subtitle: "Secure Development Pipeline",
      description: "Complete DevSecOps platform integrating security into the development lifecycle with automated testing, code analysis, and deployment security.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-slate-700 via-blue-800 to-blue-900",
      category: "DevSecOps",
      tech: ["React", "Kubernetes", "Jenkins", "SonarQube"],
      features: ["Automated Security", "Code Analysis", "CI/CD Pipeline"],
      status: "Live",
      year: "2023"
    },
    {
      id: 4,
      title: "Quantum Encrypt",
      subtitle: "Next-Gen Encryption Tool",
      description: "Revolutionary encryption application using quantum-resistant algorithms to secure sensitive data against future quantum computing threats.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-blue-800 via-blue-900 to-slate-900",
      category: "Encryption",
      tech: ["C++", "Quantum Algorithms", "Cryptography", "OpenSSL"],
      features: ["Quantum-Resistant", "Zero-Knowledge", "Multi-Platform"],
      status: "Research",
      year: "2024"
    },
    {
      id: 5,
      title: "AI Threat Hunter",
      subtitle: "Machine Learning Security",
      description: "Advanced AI-powered threat hunting platform that uses machine learning to detect, analyze, and respond to sophisticated cyber attacks in real-time.",
      image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      category: "AI Security",
      tech: ["Python", "TensorFlow", "Elasticsearch", "Kafka"],
      features: ["ML Detection", "Behavioral Analysis", "Auto Response"],
      status: "Live",
      year: "2023"
    },
    {
      id: 6,
      title: "Blockchain Audit Suite",
      subtitle: "Smart Contract Security",
      description: "Comprehensive blockchain security suite for auditing smart contracts, detecting vulnerabilities, and ensuring DeFi protocol security.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      gradient: "from-blue-700 via-blue-800 to-slate-800",
      category: "Blockchain Security",
      tech: ["Solidity", "Web3.js", "Hardhat", "Slither"],
      features: ["Smart Contract Audit", "Gas Optimization", "Security Reports"],
      status: "Live",
      year: "2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Development': return 'bg-yellow-500';
      case 'Research': return 'bg-purple-500';
      default: return 'bg-blue-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity': return <Shield size={20} />;
      case 'Security Dashboard': return <Eye size={20} />;
      case 'DevSecOps': return <Code size={20} />;
      case 'Encryption': return <Database size={20} />;
      case 'AI Security': return <Shield size={20} />;
      case 'Blockchain Security': return <Database size={20} />;
      default: return <Palette size={20} />;
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 text-slate-900 dark:text-white">from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
            <Eye className="text-blue-600" size={18} />
            <span className="text-blue-700 font-semibold">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 leading-tight">
            My Latest
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my portfolio of cutting-edge cybersecurity solutions, full-stack applications, 
            and innovative designs that push the boundaries of technology.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 ${
                index % 3 === 1 ? 'lg:mt-12' : index % 3 === 2 ? 'lg:mt-6' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {project.status}
                  </div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.year}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-blue-600">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">{project.category}</span>
                </div>
                
                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{project.subtitle}</p>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-lg text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Features */}
                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* View More Button */}
                <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;