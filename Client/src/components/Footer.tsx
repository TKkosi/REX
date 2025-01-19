import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and About */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">REX</h2>
            <p className="mt-4 text-gray-400">
              Empowering businesses with advanced social media analytics. Monitor, track, and grow your digital presence effortlessly.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/product"
                  className="hover:underline hover:text-gray-200"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:underline hover:text-gray-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/use-cases"
                  className="hover:underline hover:text-gray-200"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:underline hover:text-gray-200"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Socials */}
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="mt-4 text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@rexanalytics.com"
                className="hover:underline text-gray-200"
              >
                support@rexanalytics.com
              </a>
            </p>
            <p className="mt-2 text-gray-400">Phone: +1 (800) 123-4567</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="mt-4 flex flex-wrap justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 REX. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
