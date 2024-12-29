import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Desktop & Tablet Navbar */}
      <nav className="hidden md:flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="text-xl font-bold">BrandName</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className="md:hidden bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">BrandName</div>
        <button
          onClick={toggleSidebar}
          className="focus:outline-none text-white hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-blue-600 text-white p-6 shadow-lg md:hidden">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none text-white hover:text-gray-200 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
