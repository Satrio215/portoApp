import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 sticky top-0 z-50 shadow-md backdrop-blur-md transition-all duration-300 bg-black">
      <div className="flex justify-between items-center px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src="/asset/myLogo.png" alt="Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 text-white lg:static absolute top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="lg:inline-block block text-center py-2">
            <a href="#about" className="hover:text-gray-400">About Me</a>
          </li>
          <li className="lg:inline-block block text-center py-2">
            <a href="#projects" className="hover:text-gray-400">Project's</a>
          </li>
          <li className="lg:inline-block block text-center py-2">
            <a href="#skills" className="hover:text-gray-400">Skill's</a>
          </li>
          <li className="lg:inline-block block text-center py-2">
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
