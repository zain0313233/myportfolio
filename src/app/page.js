"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Menu, X } from "lucide-react";
import Skill from "@/component/skill";
import About from "@/component/about";
import Services from "@/component/services";
import Skills from "@/component/SkillStrength";
import Projects from "@/component/projects";
import ContactResumeSection from "@/component/ContactUs";
import Footer from "@/component/footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <section className="relative w-full md:h-screen h-[600px] overflow-hidden">
       
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Images/hero.jpg')`
          }}
        ></div>

       
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-10 w-32 md:w-64 h-32 md:h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-32 md:w-64 h-32 md:h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

       
        <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
             
              <div className="flex items-center">
                <span className="text-white text-xl font-bold md:hidden">Zain Ali</span>
              </div>
              
              
              <div className="hidden md:flex text-[18px] space-x-8 mx-auto">
                <a href="#home" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                  Home
                </a>
                <a href="#about" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                  About
                </a>
                <a href="#projects" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                  Projects
                </a>
                <a href="#contact" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                  Contact Us
                </a>
                <a href="#resume" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                  Resume
                </a>
              </div>

              
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  {isMobileMenuOpen ? (
                    <X size={24} />
                  ) : (
                    <Menu size={24} />
                  )}
                </button>
              </div>
            </div>

           
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'max-h-64 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
                <a 
                  href="#home" 
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                >
                  Contact Us
                </a>
                <a 
                  href="#resume" 
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
                >
                  Resume
                </a>
              </div>
            </div>
          </nav>
        </header>

      
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-8 lg:px-28 pt-20 lg:pt-20">
          
        
          <div className="flex-1 max-w-3xl animate-slide-in-left text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
                Hi, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  <ReactTyped
                    strings={["Zain Ali"]}
                    typeSpeed={100}
                    backSpeed={50}
                    showCursor={true}
                    cursorChar="|"
                  />
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl lg:text-3xl text-orange-400 mb-6 font-light">
                <ReactTyped
                  strings={[
                    "Full-Stack Web Developer",
                    "React.js Developer", 
                    "Node.js Developer",
                    "TypeScript Developer"
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop={true}
                  backDelay={2000}
                />
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <ReactTyped
                strings={[
                  "As a seasoned full-stack web developer, I bring hands-on experience in both frontend and backend development, with a strong focus on building scalable, high-performance web applications."
                ]}
                typeSpeed={40}
                showCursor={false}
                startDelay={3000}
              />
            </p>

            <div className="mb-6 lg:mb-8 hidden sm:block">
              <ReactTyped
                strings={[
                  "Passionate about creating innovative digital solutions that make a difference",
                  "Transforming ideas into powerful web applications with modern technologies",
                  "Building the future of web development, one project at a time"
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop={true}
                backDelay={3000}
                startDelay={5000}
                className="text-sm sm:text-base text-amber-200"
              />
            </div>

          
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 mt-8 lg:mt-12 text-center">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">8+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">4+</div>
                <div className="text-xs sm:text-sm text-gray-400">Backend Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">1+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

      
          <div className="flex-1 md:flex hidden justify-center items-center animate-slide-in-right order-1 lg:order-2 lg:ml-20">
            <div className="relative">
              <div className="w-48 h-60 sm:w-60 sm:h-72 lg:w-80 lg:h-96 rounded-2xl p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden relative">
                  <img 
                    src="/Images/zain.jpg" 
                    alt="Zain Ali" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-orange-400 border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-orange-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out 0.3s both;
          }

          .animation-delay-1000 {
            animation-delay: 1s;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          @media (max-width: 1024px) {
            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out;
            }
            
            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out 0.2s both;
            }
          }
        `}</style>
      </section>
      <Skill/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <ContactResumeSection/>
      <Footer/> 
    </>
  );
}