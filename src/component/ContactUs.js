"use client"
import React, { useState } from 'react'
import { FileText, Download, Eye, Printer, Linkedin, Github, Send, User, Mail, MessageSquare } from 'lucide-react'

const ContactResumeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
  }

  const handleDownloadResume = () => {
    
    console.log('Downloading resume...')
  }

  const handleViewOnline = () => {
    
    console.log('Viewing resume online...')
  }

  const handlePrintVersion = () => {
    
    console.log('Opening print version...')
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            
          
            <div className="p-8 lg:p-12   bg-white">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">Get In Touch</h3>
                    <p className="text-gray-400 text-sm">Lets start a conversation</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Have a project in mind or want to discuss opportunities? 
                  I would love to hear from you. Send me a message and lets create something amazing together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-3">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 hover:border-gray-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 hover:border-gray-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none hover:border-gray-300"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg transform flex items-center justify-center gap-3 group"
                >
                  <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </button>
             

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-400 text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

           
            
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center items-center relative">
              
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gray-900 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              <div className="text-center relative z-10 max-w-sm">
                <div className="mb-8">
                  <div className="w-28 h-28 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl group">
                    <FileText size={48} className="text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Download Resume</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Get a comprehensive overview of my experience, skills, and achievements. 
                    Perfect for understanding my technical expertise and project history.
                  </p>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={handleDownloadResume}
                    className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg transform flex items-center justify-center gap-3 group"
                  >
                    <Download size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
                    Download PDF Resume
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={handleViewOnline}
                      className="border-2 border-gray-900 text-gray-900 py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 text-sm flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      View Online
                    </button>
                    <button 
                      onClick={handlePrintVersion}
                      className="border-2 border-gray-300 text-gray-600 py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:border-gray-900 hover:text-gray-900 hover:scale-105 text-sm flex items-center justify-center gap-2"
                    >
                      <Printer size={16} />
                      Print
                    </button>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-400 mb-4 font-semibold">Also connect with me on:</p>
                  <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-blue-500 hover:scale-110 hover:bg-blue-50 group">
                      <Linkedin size={20} className="text-gray-600 group-hover:text-blue-600" />
                    </button>
                    <button className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-gray-900 hover:scale-110 hover:bg-gray-50 group">
                      <Github size={20} className="text-gray-600 group-hover:text-gray-900" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="font-semibold text-gray-600">June 2025</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-400">File Size:</span>
                    <span className="font-semibold text-gray-600">2.3 MB</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    </div>

  )
}

export default ContactResumeSection;