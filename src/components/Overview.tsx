import React from 'react';

const Overview = () => {
  return (
    <div className="bg-white border-2 border-black p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-mono">About Me</h3>
      <div className="prose max-w-none text-gray-800 leading-relaxed space-y-4 font-mono">
        <p>
         "I'm a Senior Software Developer with 6 years of experience specializing in the React ecosystem. My career has been focused on building robust, scalable applications, with a deep expertise in mobile development using React Native.
        </p>
        <p>
          I've also delivered impactful frontend solutions with React.js, and I'm a hands-on developer who enjoys exploring full-stack concepts,  including building projects for clients using Node.js and MongoDB.
        </p>
        <p>
         When I'm not writing code, I'm often found sharing what I've learned by writing technical blogs. Outside of tech, I love to unwind by watching movies and exploring new places through traveling.
        </p>
      </div>
    </div>
  );
};

export default Overview;