import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: "Senior Software Developer",
      company: "AU Small Finance bank",
      period: "2025 - Present",
      //description: "Leading frontend development for mobile and web applications using React ecosystem."
    },
    {
      role: "Senior Software Developer",
      company: "InTimeTec",
      period: "2022 - 2025",
      //description: "Developed multiple client projects focusing on React.js and React Native applications."
    },
    {
      role: "Software Developer",
      company: "The NineHertz",
      period: "2021 - 2022",
      //description: "Developed multiple client projects focusing on React.js and React Native applications."
    },
    {
      role: "Junior Software Developer",
      company: "InTimeTec",
      period: "2019 - 2021",
      //description: "Developed multiple client projects focusing on React.js and React Native applications."
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6">Work Experience</h3>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">{job.role}</h4>
              <p className="text-blue-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 mb-3">{job.period}</p>
              {/* <p className="text-gray-700">{job.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;