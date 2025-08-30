import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React Native", icon: "📱" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux", icon: "🔄" },
    { name: "TypeScript", icon: "📘" },
    { name: "Zustand", icon: "🐻" }
  ];

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            <span className="text-3xl">{skill.icon}</span>
            <h4 className="font-medium text-lg text-gray-800">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;