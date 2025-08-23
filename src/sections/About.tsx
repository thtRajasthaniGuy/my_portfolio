import React from "react";

const About = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">
            About
          </span>
          <h2 className="text-4xl md:text-6xl font-light mb-12 leading-tight tracking-tight">
            Building digital solutions with precision and creativity
          </h2>
        </div>
        <div className="grid md:grid-cols-1 gap-16">
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              Hi, I’m Govind Maheshwari, a Frontend-focused Software Developer
              with 6 years of experience building scalable web and mobile
              applications.
            </p>
            <p>
              I specialize in React.js and React Native, crafting smooth,
              modern, and user-friendly interfaces. On the backend, I work with
              Node.js and MongoDB to create reliable APIs and database
              solutions. 💡 I enjoy turning complex ideas into simple, elegant
              user experiences and writing clean, maintainable code that scales
              with projects.
            </p>
            <p>
              Outside of work, I enjoy traveling, and experiencing new
              adventures that spark creativity.
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
