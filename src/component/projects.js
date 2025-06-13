"use client"
import React, { useState } from 'react'
import { ExternalLink, Github, Code, Database, Smartphone, CreditCard, MapPin, Calendar, Users, MessageSquare, FileText, DollarSign } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: "Proxima",
      subtitle: "Task Management Application",
      description: "A comprehensive task management application inspired by Asana, designed to streamline workflow and enhance productivity for organizations.",
      image: "/Images/hero.jpg",
      status: "Under Production",
      category: "Web Development",
      technologies: {
        backend: ["Node.js", "Express.js", "PostgreSQL"],
        frontend: ["Next.js"],
        auth: ["Subpass"],
        tools: ["Git", "ESLint"]
      },
      features: [
        "Task Creation & Assignment",
        "Organization Management",
        "Project-Based Task Assignment",
        "Real-time Collaboration (Planned)",
        "User-Friendly Interface"
      ],
      github: {
        backend: "https://github.com/zain0313233/proxima_BE.git",
        frontend: "https://github.com/zain0313233/proximaapp.git"
      },
      icons: [<Users key="users" />, <FileText key="tasks" />, <MessageSquare key="chat" />]
    },
    {
      id: 2,
      name: "Route Pay",
      subtitle: "Online Ride Booking & Trip Planning",
      description: "A comprehensive mobile application for online ride booking and trip planning with advanced features for local travel and logistics.",
      image: "/Images/hero.jpg",
      status: "University FYP Project",
      category: "Mobile Development",
      technologies: {
        mobile: ["Flutter"],
        apis: ["Google Maps API", "Weather API", "Google Places API"],
        database: ["Firebase"],
        tools: ["VS Code", "Git"]
      },
      features: [
        "Online Ride Booking",
        "Trip Planning",
        "Fare Calculator for Local Travel",
        "Online Luggage Transfer Booking",
        "Real-time Location Tracking",
        "Weather Integration"
      ],
      icons: [<MapPin key="location" />, <Smartphone key="mobile" />, <Calendar key="planning" />]
    },
    {
      id: 3,
      name: "Online Banking System",
      subtitle: "Comprehensive Banking Solution",
      description: "A full-featured online banking system with secure transaction management and comprehensive financial services.",
      image: "/Images/hero.jpg",
      status: "Completed",
      category: "Web Development",
      technologies: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["PHP"],
        database: ["MySQL"],
        company: "Eveonix Pvt. Ltd."
      },
      features: [
        "Account Management",
        "Transaction Management",
        "Online Bill Payments",
        "Online Loans",
        "Money Transfer",
        "Secure Authentication"
      ],
      icons: [<CreditCard key="banking" />, <DollarSign key="money" />, <Database key="data" />]
    }
  ]

  const TechBadge = ({ tech, type }) => {
    const colors = {
      backend: "bg-blue-100 text-blue-800 border-blue-200",
      frontend: "bg-green-100 text-green-800 border-green-200",
      mobile: "bg-purple-100 text-purple-800 border-purple-200",
      database: "bg-orange-100 text-orange-800 border-orange-200",
      apis: "bg-indigo-100 text-indigo-800 border-indigo-200",
      tools: "bg-gray-100 text-gray-800 border-gray-200",
      auth: "bg-red-100 text-red-800 border-red-200",
      company: "bg-yellow-100 text-yellow-800 border-yellow-200"
    }
    
    return (
      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${colors[type] || colors.tools} transition-all duration-300 hover:scale-105`}>
        {tech}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h1 
            className="text-5xl font-bold text-black mb-4 animate-fade-in-up"
            style={{
              animation: 'fadeInUp 1s ease-out forwards'
            }}
          >
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions across web and mobile development, 
            from task management systems to ride booking applications.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `slideInUp ${0.6 + index * 0.2}s ease-out forwards`
              }}
            >
             
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
               
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex gap-2">
                      {project.icons.map((icon, iconIndex) => (
                        <div key={iconIndex} className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                          {React.cloneElement(icon, { size: 16 })}
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-2">{project.name}</h3>
                  <p className="text-lg text-gray-400 font-medium">{project.subtitle}</p>
                </div>

              
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {project.description}
                </p>

               
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4">Technologies Used</h4>
                  <div className="space-y-3">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category} className="flex flex-wrap gap-2">
                        {Array.isArray(techs) ? (
                          techs.map((tech, techIndex) => (
                            <TechBadge key={techIndex} tech={tech} type={category} />
                          ))
                        ) : (
                          <TechBadge tech={techs} type={category} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

               
                <div className="flex gap-4">
                  {project.github && (
                    <>
                      {project.github.backend && (
                        <a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg"
                        >
                          <Github size={18} />
                          Backend
                        </a>
                      )}
                      {project.github.frontend && (
                        <a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105"
                        >
                          <Code size={18} />
                          Frontend
                        </a>
                      )}
                    </>
                  )}
                  {!project.github && (
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-black hover:scale-105">
                      <ExternalLink size={18} />
                      View Project
                    </button>
                  )}
                </div>
              </div>

              
              <div className={`absolute inset-0 bg-gradient-to-r from-gray-900/5 to-transparent transition-opacity duration-500 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Projects