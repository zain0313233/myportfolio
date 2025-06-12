import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Code, Database, Globe, Server, Smartphone, Award } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  const projects = [
    {
      title: "Carrier Services Web Project",
      tech: ["AWS", "GraphQL", "React"],
      description: "Scalable web application with backend infrastructure on AWS and GraphQL API integration.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mehab Healthcare Web App",
      tech: ["MongoDB", "REST APIs", "Node.js"],
      description: "Healthcare platform with core features and full technical stack implementation.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Eveonix Company Website",
      tech: ["React", "Responsive Design"],
      description: "Corporate website with enhanced responsiveness and cross-browser compatibility.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Artv – Deep Art Application",
      tech: ["Node.js", "Express.js", "BigQuery", "After Effects"],
      description: "Full-stack video generation tool with automated rendering and data management.",
      icon: <Server className="w-6 h-6" />
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div 
          id="header"
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible('header') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-5xl font-bold text-black bg-clip-text  mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies and cloud solutions
          </p>
        </div>

       
        <div 
          id="education"
          data-animate
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible('education') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gray-900 p-3 rounded-lg mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Education</h2>
            </div>
            
            <div className="bg-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-600 font-medium mb-2">
                PMAS ARID Agriculture University Rawalpindi, Pakistan
              </p>
              <div className="flex justify-between items-center text-gray-600">
                <span>2020 - 2024</span>
                <div className="bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">CGPA: 2.95</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          id="experience"
          data-animate
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible('experience') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gray-900 p-3 rounded-lg mr-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
            </div>
            
            <div className="rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Junior Full Stack Developer</h3>
                  <p className="text-gray-600 font-medium">Eveonix Pvt Ltd, Lahore (Bahria Town)</p>
                </div>
                <div className="bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-600">1 Year</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Frontend development with ReactJS, NextJS, and Tailwind CSS</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">REST API integration and backend services with Node.js</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Database management with MongoDB and PostgreSQL</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Full-stack solution deployment and management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">AWS infrastructure and GraphQL implementation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Database optimization and query performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div 
          id="projects"
          data-animate
          className={`transition-all duration-1000 delay-800 ${
            isVisible('projects') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold  text-black mb-4">
              Company Projects
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible('projects') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible('projects') ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-200 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-gray-100 to-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -8px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0,-1px,0);
          }
        }
        
        .animate-bounce {
          animation-name: bounce;
          animation-duration: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default About;