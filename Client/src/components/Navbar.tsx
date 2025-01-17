import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold">
            Rex
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/features" className="hover:text-blue-400">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-400">
            Pricing
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About Us
          </Link>
        </div>

        {/* Login/Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          aria-label="Open Menu"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 space-y-2">
        <Link to="/" className="block px-4 py-2 hover:bg-gray-800 rounded">
          Home
        </Link>
        <Link to="/features" className="block px-4 py-2 hover:bg-gray-800 rounded">
          Features
        </Link>
        <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-800 rounded">
          Pricing
        </Link>
        <Link to="/about" className="block px-4 py-2 hover:bg-gray-800 rounded">
          About Us
        </Link>
        <Link
          to="/login"
          className="block px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

