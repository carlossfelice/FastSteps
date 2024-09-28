import React, { useEffect, useState } from 'react';
import logo from "../assets/FS-logo10.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setDarkMode(storedMode === 'true');
  }, []);

  return (
    <footer className={`py-10 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={logo}
              alt="FS Logo"
              className="w-40 h-24 mb-4 rounded-lg object-cover shadow-lg"
            />
            <p className="text-sm">
              The Comfort Technology Company.
            </p>
            <p className="text-sm mt-2">
              Bringing innovation to your everyday comfort.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipments" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Shipping
                </a>
              </li>
              <li>
                <a href="/payments" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Payments & Security
                </a>
              </li>
              <li>
                <a href="/regret-button" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="/exchanges-returns" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Exchanges & Returns
                </a>
              </li>
              <li>
                <a href="/size-guides" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Size Guides
                </a>
              </li>
              <li>
                <a href="/technologies" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Technologies
                </a>
              </li>
              <li>
                <a href="/about-us" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/women" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Women
                </a>
              </li>
              <li>
                <a href="/men" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Men
                </a>
              </li>
              <li>
                <a href="/children" className={`hover:text-primary transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Children
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>
            Email: <a href="mailto:Fast-steps@gmail.com" className="text-primary hover:underline">fast-steps@gmail.com</a> | Phone: <a href="tel:+123456789" className="text-primary hover:underline">+123-456-789</a>
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary hover:text-slate-400 transition-colors duration-200 rounded-full p-3  dark:bg-gray-800"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary hover:text-slate-400 transition-colors duration-200 rounded-full p-3 dark:bg-gray-800"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary hover:text-slate-400 transition-colors duration-200 rounded-full p-3  dark:bg-gray-800"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            © 2023 FS. All rights reserved | Designed & Developed by Innovate Group | Shopify Plus Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
