import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Dark mode icons
import { FiGlobe } from "react-icons/fi"; // Language switch icon

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Nav: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/src/assets/chirang56.png" // Update this path
            className="h-8 w-8 rounded-full"
            alt="My Logo"
          />
          <span className="text-2xl font-semibold"> Chiranjibi Gautam </span>
        </a>

        {/* Right Section */}
        <div className="flex items-center justify-center space-x-6">
          {/* Language Switch */}
          <div className="relative group">
            <button
              className="p-2 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Language"
            >
              <FiGlobe size={20} />
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded w-28">
              <ul className="text-gray-900 dark:text-white">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Español
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Français
                </li>
              </ul>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          
          
          {/* Menu Button (Mobile) */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close (X) icon
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent py-4 md:py-0 shadow-lg md:shadow-none`}
        >
          <a
            href="#home"
            className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#projects"
            className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      </div>
  </nav>
  );
};

export default Nav;
