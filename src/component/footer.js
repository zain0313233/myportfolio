"use client"
import React from 'react';
import { Mail, Phone, Download, MapPin, Github, Linkedin, Instagram, Facebook, Code, Database, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
    
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
        
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Zain Ali</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full-Stack Web Developer with expertise in modern frontend and backend technologies. 
              Specialized in building scalable, high-performance web applications using ReactJS, 
              NextJS, Node.js, and various database technologies.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2 text-blue-300" />
              <span>Rawalpindi, Punjab, Pakistan</span>
            </div>
            
           
            <div className="flex space-x-4 mt-6">
              <div className="flex items-center bg-gray-700 px-3 py-2 rounded-lg">
                <Code className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-sm">Frontend</span>
              </div>
              <div className="flex items-center bg-gray-700 px-3 py-2 rounded-lg">
                <Database className="w-4 h-4 mr-2 text-green-300" />
                <span className="text-sm">Backend</span>
              </div>
              <div className="flex items-center bg-gray-700 px-3 py-2 rounded-lg">
                <Globe className="w-4 h-4 mr-2 text-purple-300" />
                <span className="text-sm">Full-Stack</span>
              </div>
            </div>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">API Development</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Database Design</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Full-Stack Solutions</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Performance Optimization</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:zain.ali.cs.dev@gmail.com" 
                className="flex items-center text-gray-300 hover:text-blue-300 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm">zain.ali.cs.dev@gmail.com</span>
              </a>
              
              <a 
                href="tel:+923081412631" 
                className="flex items-center text-gray-300 hover:text-blue-300 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+92 308-1412631</span>
              </a>
              
              <button className="flex items-center text-gray-300 hover:text-blue-300 transition-colors group">
                <Download className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Download Resume</span>
              </button>
            </div>
          </div>
        </div>

       
      </div>

   
      <div className="bg-gray-800 border-t border-gray-500">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
           
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-gray-900 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-700 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>

           
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2025 Zain Ali. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                1+ Year Experience • Full-Stack Developer • BS Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;