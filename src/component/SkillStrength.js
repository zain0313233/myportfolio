"use client"
import React, { useState, useEffect } from 'react';

const Skills
 = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(true);
         
          setTimeout(() => {
            setAnimateProgress(true);
          }, 500);
        }
      });
    }, observerOptions);

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'ReactJS', level: 95 },
    { name: 'NextJS', level: 90 },
    { name: 'Node.js', level: 95 },
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'JavaScript', level: 100 },
    { name: 'Express.js', level: 90 },
    { name: 'Tailwind CSS', level: 95 }
  ];

  const softSkills = [
    { name: 'Communication', level: 70, color: '#10B981' },
    { name: 'Problem Solving', level: 90, color: '#3B82F6' },
    { name: 'Team Work', level: 85, color: '#8B5CF6' },
    { name: 'Leadership', level: 75, color: '#F59E0B' }
  ];

 const CircularProgress = ({ skill, index }) => {
  const radius = 80;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = animateProgress
    ? circumference - (skill.level / 100) * circumference
    : circumference;


  const getSkillColor = (skillName) => {
    const colorMap = {
      'Communication': 'from-blue-500 to-blue-600',
      'Problem Solving': 'from-purple-500 to-purple-600',
      'Teamwork': 'from-green-500 to-green-600',
      'Leadership': 'from-orange-500 to-orange-600',
      'Time Management': 'from-red-500 to-red-600',
      'Adaptability': 'from-teal-500 to-teal-600',
      'Critical Thinking': 'from-indigo-500 to-indigo-600',
      'Creativity': 'from-pink-500 to-pink-600',
    };
    return colorMap[skillName] || 'from-gray-500 to-gray-600';
  };

  const getSolidColor = (skillName) => {
    const colorMap = {
      'Communication': '#3b82f6',
      'Problem Solving': '#8b5cf6',
      'Teamwork': '#10b981',
      'Leadership': '#f59e0b',
      'Time Management': '#ef4444',
      'Adaptability': '#14b8a6',
      'Critical Thinking': '#6366f1',
      'Creativity': '#ec4899',
    };
    return colorMap[skillName] || '#6b7280';
  };

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out delay-${index * 150} ${
        visibleSection 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        
    
        <div className="relative flex justify-center mb-4">
          <div className="relative">
            <svg
              height={radius * 2}
              width={radius * 2}
              className="transform -rotate-90 drop-shadow-sm"
            >
            
              <defs>
                <linearGradient id={`bg-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id={`skill-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={getSolidColor(skill.name)} />
                  <stop offset="100%" stopColor={getSolidColor(skill.name)} stopOpacity="0.8" />
                </linearGradient>
                
               
                <filter id={`glow-${index}`}>
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

            
              <circle
                stroke={`url(#bg-gradient-${index})`}
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />

           
              <circle
                stroke={`url(#skill-gradient-${index})`}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-2000 ease-out filter drop-shadow-sm"
                style={{
                  transitionDelay: `${index * 150 + 600}ms`,
                  filter: `url(#glow-${index})`
                }}
              />
            </svg>

          
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-2xl font-bold transition-all duration-1000 delay-${index * 150 + 800} ${
                animateProgress ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {animateProgress ? `${skill.level}%` : '0%'}
              </span>
              <div className={`w-8 h-0.5 mt-1 rounded-full transition-all duration-1000 delay-${index * 150 + 1000} ${
                animateProgress ? `bg-gradient-to-r ${getSkillColor(skill.name)}` : 'bg-gray-200'
              }`} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-200">
            {skill.name}
          </h3>
          
        
          <div className="flex justify-center">
            <span className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
              skill.level >= 80 
                ? 'bg-green-100 text-green-700'
                : skill.level >= 60 
                ? 'bg-blue-100 text-blue-700'
                : skill.level >= 40
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : skill.level >= 40 ? 'Intermediate' : 'Beginner'}
            </span>
          </div>
        </div>

        <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.name)}`} />
        </div>
      </div>

      <div className={`absolute -inset-1 bg-gradient-to-r ${getSkillColor(skill.name)} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
    </div>
  );
};

  const ProgressBar = ({ skill, index }) => {
    return (
      <div 
        className={`mb-6 transition-all duration-1000 ${
          visibleSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-2000 ease-out"
            style={{
              width: animateProgress ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 150 + 500}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
    
        <div 
          id="skills-section"
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl font-bold text-black mb-4">
            Skills
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and professional capabilities 
            developed through hands-on experience and continuous learning
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-16 items-start">
        
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">
              Technical Skills
            </h2>
            <div className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <ProgressBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

        
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">
              Professional Skills
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              {softSkills.map((skill, index) => (
                <CircularProgress key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

      
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              My skill set is constantly evolving through practical application in real-world projects, 
              staying updated with the latest technologies, and maintaining a growth mindset in the 
              ever-changing landscape of web development.
            </p>
            <div className="md:flex block  justify-center mt-6 space-x-4">
              <div className="bg-teal-100  text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                1+ Years Experience
              </div>
              <div className="bg-blue-100 md:my-0 my-3 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                5+ Projects Completed
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full sm:justify-self-center sm:mt-3 text-sm font-medium">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }

        .delay-600 {
          transition-delay: 600ms;
        }

        .delay-800 {
          transition-delay: 800ms;
        }
      `}</style>
    </div>
  );
};

export default Skills;