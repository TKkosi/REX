import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    // <nav className="bg-gray-900 text-white px-6 py-4">
    //   <div className="container mx-auto flex items-center justify-between">
    //     {/* Logo */}
    //     <div className="flex items-center space-x-2">
    //       <Link to="/" className="text-2xl font-bold">
    //         Rex
    //       </Link>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="hidden md:flex space-x-6">
    //       <Link to="/" className="hover:text-blue-400">
    //         Home
    //       </Link>
    //       <Link to="/features" className="hover:text-blue-400">
    //         Features
    //       </Link>
    //       <Link to="/pricing" className="hover:text-blue-400">
    //         Pricing
    //       </Link>
    //       <Link to="/about" className="hover:text-blue-400">
    //         About Us
    //       </Link>
    //     </div>

    //     {/* Login/Sign Up Buttons */}
    //     <div className="hidden md:flex space-x-4">
    //       <Link
    //         to="/login"
    //         className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
    //       >
    //         Log In
    //       </Link>
    //       <Link
    //         to="/signup"
    //         className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
    //       >
    //         Sign Up
    //       </Link>
    //     </div>

    //     {/* Mobile Menu Button */}
    //     <button
    //       className="md:hidden text-gray-400 hover:text-white focus:outline-none"
    //       aria-label="Open Menu"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M4 6h16M4 12h16M4 18h16"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className="md:hidden mt-4 space-y-2">
    //     <Link to="/" className="block px-4 py-2 hover:bg-gray-800 rounded">
    //       Home
    //     </Link>
    //     <Link to="/features" className="block px-4 py-2 hover:bg-gray-800 rounded">
    //       Features
    //     </Link>
    //     <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-800 rounded">
    //       Pricing
    //     </Link>
    //     <Link to="/about" className="block px-4 py-2 hover:bg-gray-800 rounded">
    //       About Us
    //     </Link>
    //     <Link
    //       to="/login"
    //       className="block px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
    //     >
    //       Log In
    //     </Link>
    //     <Link
    //       to="/signup"
    //       className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
    //     >
    //       Sign Up
    //     </Link>
    //   </div>
    // </nav>

    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            REX
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              Product
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link
                to="/product/features"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Features
              </Link>
              <Link
                to="/product/integrations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Integrations
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              AI Solutions
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link
                to="/ai/predictions"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Predictions
              </Link>
              <Link
                to="/ai/analytics"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Analytics
              </Link>
            </div>
          </div>
          <Link to="/use-cases" className="text-gray-600 hover:text-gray-800">
            Use Cases
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              Resources
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link
                to="/resources/blog"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Blog
              </Link>
              <Link
                to="/resources/help"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Help Center
              </Link>
            </div>
          </div>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 border px-2 py-1 rounded text-gray-600">
            <span>EN</span>
          </div>
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

