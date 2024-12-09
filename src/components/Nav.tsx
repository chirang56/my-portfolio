import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              Chiranjibi Gautam
            </a>
          </div>
          {/* Desktop Menu (Always visible) */}
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
