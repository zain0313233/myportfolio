"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export default function MobileHero() {
  return (
    <section className="md:hidden relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 px-6 pt-20 pb-12 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
          <div className="w-40 h-48 rounded overflow-hidden border-4 border-orange-400/30 shadow-2xl">
            <img 
              src="/Images/zain.jpg" 
              alt="Zain Ali" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                Full-Stack Developer
              </p>
              <h1 className="text-3xl font-bold text-white">
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
            </div>

            <div className="h-8 text-lg text-orange-300 font-light">
              <ReactTyped
                strings={[
                  "React.js Developer", 
                  "Node.js Developer",
                  "TypeScript Developer",
                  "Full-Stack Developer"
                ]}
                typeSpeed={80}
                backSpeed={60}
                loop={true}
                backDelay={2000}
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
              <ReactTyped
                strings={[
                  "Creating innovative web solutions with modern technologies and delivering exceptional user experiences."
                ]}
                typeSpeed={40}
                showCursor={false}
                startDelay={2000}
              />
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-full max-w-xs">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-400/20">
              <div className="text-xl font-bold text-orange-400">8+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-400/20">
              <div className="text-xl font-bold text-orange-400">4+</div>
              <div className="text-xs text-gray-400">Backend</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-400/20">
              <div className="text-xl font-bold text-orange-400">1+</div>
              <div className="text-xs text-gray-400">Years</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg">
              Download Resume
            </button>
            
          </div>
        </div>

      
      </div>
    </section>
  );
}