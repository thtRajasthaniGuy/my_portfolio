import React from 'react';
import { Mail, Github, Linkedin, Download, MapPin, Phone, Calendar } from 'lucide-react';
import Profile from '../assets/mine_linkdkn.png'
const Header = () => {
  return (
    <header className="bg-white border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-black p-1">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm font-mono">
                <img src={Profile} className='w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm font-mono'/>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2 font-mono">Govind Maheshwari</h1>
            <h2 className="text-lg sm:text-xl text-black font-medium mb-4 font-mono">Senior Software Developer - React & React Native</h2>
            
            {/* Contact Info - Resume Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-gray-700 mb-6 font-mono">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail size={16} />
                <span>govind302034@gmail.com</span>
              </div>
              {/* <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div> */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={16} />
                <span>Jaipur, India</span>
              </div>
              {/* <div className="flex items-center justify-center lg:justify-start gap-2">
                <Calendar size={16} />
                <span>Available for opportunities</span>
              </div> */}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap font-mono border-2 border-black">
              <Download size={18} />
              Download Resume
            </button>
            <div className="flex gap-3 justify-center">
              <a href="https://github.com/thtRajasthaniGuy" className="p-3 border-2 border-black hover:bg-gray-100 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gmaheshwari96/" className="p-3 border-2 border-black hover:bg-gray-100 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;