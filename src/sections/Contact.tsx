import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
            Let's work together
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-lg font-medium">Get in touch</div>
            <div className="text-gray-600 font-light">govind302034@gmail.com</div>
          </div>  
          <div className="space-y-4">
            <div className="text-lg font-medium">Location</div>
            <div className="text-gray-600 font-light">India</div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;