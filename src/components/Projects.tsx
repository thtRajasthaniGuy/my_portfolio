import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
  title: "AI Email Categorization Assistant",
  period: "2025",
  tech: ["React", "Vite", "Tailwind", "Zustand", "Firebase", "Gemini AI"],
  description: "AI-powered web app that connects to Gmail, automatically categorizes emails, and generates smart summaries. Focused on reducing email overload with a clean, minimal UI.",
  highlights: [
    "OAuth2 Gmail integration with secure token handling",
    "AI-powered email categorization and summarization using Gemini Flash",
    "Persistent state management with Zustand + localStorage",
    "Custom categories support and real-time filtering"
  ],
  github: "https://github.com/thtRajasthaniGuy/email-category-ai",
  live: "https://smartemail.netlify.app/"
}
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-500 mb-3">{project.period}</p>
            </div>
            <div className="flex gap-2">
              {project.live && (
                <a href={project.live} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
              <a href={project.github} className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

          <div>
            <h5 className="font-medium mb-2">Key Highlights:</h5>
            <ul className="space-y-1">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* More Projects Link */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
        <h4 className="text-lg font-medium mb-2">More Projects</h4>
        <p className="text-gray-600 mb-4">View all my projects and contributions on GitHub</p>
        <a 
          href="https://github.com/thtRajasthaniGuy?tab=repositories" 
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Github size={18} />
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;