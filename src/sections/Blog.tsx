import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      title: 'Building Scalable React Applications: A Complete Guide',
      excerpt: 'Learn the best practices and patterns for building large-scale React applications that can grow with your team and user base.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices']
    },
    {
      title: 'The Future of Web Development: AI Integration',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build web applications and what developers need to know.',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['AI', 'Web Development', 'Future Tech']
    },
    {
      title: 'TypeScript Tips for Better Code Quality',
      excerpt: 'Advanced TypeScript techniques and patterns that will help you write more maintainable and robust applications.',
      date: '2024-01-02',
      readTime: '5 min read',
      tags: ['TypeScript', 'Code Quality', 'Tips']
    },
    {
      title: 'Optimizing Performance in Node.js Applications',
      excerpt: 'Comprehensive strategies for improving the performance of your Node.js applications, from database optimization to caching.',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Node.js', 'Performance', 'Backend']
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">Writing</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Latest Articles
            </h2>
          </div>
          <a 
            href="https://hashnode.com" 
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
          >
            Read more on Hashnode
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 tracking-wide">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 leading-tight group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-16 md:hidden">
          <a 
            href="https://hashnode.com" 
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group"
          >
            Read all articles
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;