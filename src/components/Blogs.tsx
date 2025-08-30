import React from 'react';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';

const Blogs = () => {
  const blogs = [
   {
  title: "Why New Architecture Introduced in React Native",
  date: "Aug 2024",
  excerpt: "Exploring the motivation and benefits behind React Native's new architecture — Fabric, TurboModules, and JSI — and how they enable better performance, scalability, and developer experience.",
  readTime: "6 min read",
  link: "https://parttimecoder96.hashnode.dev/why-new-architecture-introduced-in-react-native"
}
  ];

  return (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                <a href={blog.link}>{blog.title}</a>
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{blog.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
            <a href={blog.link} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors self-start">
              <ExternalLink size={18} />
            </a>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">{blog.excerpt}</p>
          
          <a 
            href={blog.link} 
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Read More <ArrowRight size={14} />
          </a>
        </div>
      ))}

      {/* More Blogs Link */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
        <h4 className="text-lg font-medium mb-2">More Articles</h4>
        <p className="text-gray-600 mb-4">Read all my technical blogs and insights</p>
        <a 
          href="https://parttimecoder96.hashnode.dev/" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <BookOpen size={18} />
          Visit My Blog
        </a>
      </div>
    </div>
  );
};

export default Blogs;