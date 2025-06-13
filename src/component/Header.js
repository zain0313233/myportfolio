"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
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
  );
}