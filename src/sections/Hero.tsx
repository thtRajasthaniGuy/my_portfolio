import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import profileImage from '../assets/mine_linkdkn.png';
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="text-center max-w-4xl">
         <div className="relative mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative group">
            <img
              src={profileImage}
              alt="Alex Johnson"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
            />
           
          </div>
        </div>
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-light mb-8 tracking-tight leading-none">
          Govind Kumar Bagla
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light tracking-wide">
          Full-Stack Developer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          I craft digital experiences with clean code and thoughtful design. 
          Passionate about building scalable applications that make a difference.
        </p>
        <div className="flex gap-8 justify-center items-center">
          <a href="mailto:govind302034@gmail.com"  className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/gmaheshwari96/" className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/thtRajasthaniGuy" className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://x.com/thRajasthaniGuy" className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;