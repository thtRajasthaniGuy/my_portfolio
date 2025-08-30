import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Footer from './components/Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'blogs':
        return <Blogs />;
      case 'experience':
        return <Experience />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {renderActiveTab()}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
