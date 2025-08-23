import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-black font-['Inter',sans-serif] overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;