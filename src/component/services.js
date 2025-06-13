"use client"
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Globe, 

  Cloud, 

  Server,
  Layers
} from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
        }
      });
    }, observerOptions);

    const items = document.querySelectorAll('[data-animate-service]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const isVisible = (index) => visibleItems.has(index.toString());

  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Frontend Development",
      subtitle: "Modern React & Next.js Applications",
      description: "Building responsive and interactive user interfaces with React, Next.js, and Tailwind CSS. Creating seamless user experiences with modern design principles.",
      features: ["ReactJS", "NextJS", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Backend Development",
      subtitle: "Scalable Server-Side Solutions",
      description: "Developing robust backend services with Node.js and Express.js. Building RESTful APIs and implementing secure authentication systems.",
      features: ["Node.js", "Express.js", "REST APIs", "Authentication"]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Database Management",
      subtitle: "Efficient Data Storage & Retrieval",
      description: "Designing and optimizing databases using MongoDB, PostgreSQL, and BigQuery. Ensuring data integrity and optimal query performance.",
      features: ["MongoDB", "PostgreSQL", "BigQuery", "Query Optimization"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Solutions",
      subtitle: "AWS Infrastructure & Deployment",
      description: "Deploying and managing applications on AWS cloud infrastructure.",
      features: ["S3 Bucket", "Ec2 Instance","Scalability"]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Full Stack Development",
      subtitle: "End-to-End Web Applications",
      description: "Creating complete web applications from frontend to backend. Managing the entire development lifecycle with modern technologies.",
      features: ["Full Stack", "MERN Stack", "End-to-End", "Modern Tech"]
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "API Integration",
      subtitle: "RESTful Services",
      description: "Integrating third-party APIs and building RESTful API endpoints. Ensuring seamless data flow between different services.",
      features: ["REST APIs", "Third-party APIs", "Data Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h1 
            className="text-5xl font-bold text-black mb-4 animate-fade-in-up"
            style={{
              animation: 'fadeInUp 1s ease-out forwards'
            }}
          >
            My Services
          </h1>
          <div 
            className="w-24 h-1 bg-gray-900 mx-auto rounded-full mb-6"
            style={{
              animation: 'fadeInUp 1s ease-out 0.2s forwards',
              opacity: 0
            }}
          ></div>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              animation: 'fadeInUp 1s ease-out 0.4s forwards',
              opacity: 0
            }}
          >
            Providing comprehensive web development solutions with cutting-edge technologies 
            and modern development practices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              data-animate-service
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${
                isVisible(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="bg-gray-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  {service.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-medium">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="text-center mt-20"
          data-index="cta"
          data-animate-service
        >
          <div className={`transition-all duration-1000 ${
            isVisible('cta') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Lets work together to bring your ideas to life with modern web technologies 
              and best development practices.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get In Touch
            </button>
          </div>
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

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .group:hover .slide-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .group:hover .slide-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
      
    </div>
  );
};

export default Services;