import React from 'react';

const Navigation = ({ activeTab, setActiveTab }:any) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 sm:px-6 border-b-2 font-medium text-sm transition-colors whitespace-nowrap font-mono ${
                activeTab === tab.id
                  ? 'border-black text-black bg-gray-100'
                  : 'border-transparent text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;