import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © {new Date().getFullYear()} <span className="text-primary">Nathiya J</span>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white me-4 md:me-6">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:email@example.com" className="hover:text-white">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
