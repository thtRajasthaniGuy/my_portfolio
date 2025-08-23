import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 font-light">
            © {(new Date().getFullYear())} Govind Kumar Bagla. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;