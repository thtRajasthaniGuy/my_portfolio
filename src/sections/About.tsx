import React from 'react';

const About = () => {

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">About</span>
          <h2 className="text-4xl md:text-6xl font-light mb-12 leading-tight tracking-tight">
            Building digital solutions with precision and creativity
          </h2>
        </div>
        <div className="grid md:grid-cols-1 gap-16">
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital products that blend functionality with elegant design.
            </p>
            <p>
              My expertise spans modern web technologies, from React and TypeScript 
              on the frontend to Node.js and Python on the backend. I believe in 
              writing clean, maintainable code and creating intuitive user experiences.
            </p>
            <p>
              When I'm not coding, I contribute to open source projects, write technical 
              articles, and mentor aspiring developers in the community.
            </p>
          </div>
          {/* <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-light mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;