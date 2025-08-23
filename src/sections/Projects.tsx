import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EcoTracker',
      description: 'A sustainability app that helps users track their carbon footprint with AI-powered insights and personalized recommendations for a greener lifestyle.',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
      year: '2024',
      type: 'Web App'
    },
    {
      title: 'DevCollab',
      description: 'Real-time collaborative coding platform with integrated video calls, code reviews, and comprehensive project management features.',
      tech: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
      year: '2024',
      type: 'SaaS Platform'
    },
    {
      title: 'FinanceAI',
      description: 'Smart personal finance assistant that analyzes spending patterns and provides automated investment recommendations using machine learning.',
      tech: ['Python', 'Django', 'TensorFlow', 'Redis'],
      year: '2023',
      type: 'AI Application'
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">Work</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Selected Projects
            </h2>
          </div>
          <a 
            href="https://github.com" 
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
          >
            View all on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-100 pb-16 last:border-b-0 last:pb-0 group">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                      {project.type}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs font-medium text-gray-400 tracking-widest">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 border border-gray-200 rounded-full text-xs font-medium tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/3 lg:text-right">
                  <button className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group/btn">
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 md:hidden">
          <a 
            href="https://github.com" 
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;