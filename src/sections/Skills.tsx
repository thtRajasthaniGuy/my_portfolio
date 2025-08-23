import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React Native', icon: '⚛️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📦' },
    {name:'Redux',icon:'⚛️'}
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 block">Skills</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Technologies I work with
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                <span className="text-2xl group-hover:grayscale-0 filter grayscale">{skill.icon}</span>
              </div>
              <h3 className="font-medium text-sm tracking-wide">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;