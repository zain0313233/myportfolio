"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  const [count, setCount] = useState(0);

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "GitHub", icon: "🐙", url: "#" },
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" }
  ];

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
 
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Images/hero.jpg')`
          }}
        ></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <header className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-10 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">
                <span className="text-orange-400">Zain</span>Ali
              </div>
              
              <div className="hidden md:flex  space-x-8">
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
                <a href="#resume" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium">
                  Resume
                </a>
              </div>

              <div className="md:hidden">
                <button className="text-white text-2xl">☰</button>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative z-10 flex items-center justify-between h-full px-8 mt-9 lg:px-16 pt-20">
          
          <div className="flex-1 max-w-3xl animate-slide-in-left">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Hi, I'm{" "}
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
              
              <div className="text-2xl lg:text-3xl text-orange-400 mb-6 font-light">
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

            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
              <ReactTyped
                strings={[
                  "As a seasoned full-stack web developer, I bring hands-on experience in both frontend and backend development, with a strong focus on building scalable, high-performance web applications."
                ]}
                typeSpeed={30}
                showCursor={false}
                startDelay={3000}
              />
            </p>

            <div className="mb-8">
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
                className="text-base text-amber-200"
              />
            </div>

           

            <div className="flex gap-8 mt-12 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400">8+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">4+</div>
                <div className="text-sm text-gray-400">Backend Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Zain's Image */}
          <div className="flex-1 flex justify-center items-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl p-1 shadow-2xl">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
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
        `}</style>
      </section>
    </>
  );
}