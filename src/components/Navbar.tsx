import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaHeart, FaSearch, FaUser, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/FS-logo10.jpg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleMouseEnter = (menu: string) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen("");
  };

  return (
    <nav className={`h-24 flex items-center justify-between px-4 sm:px-8 shadow-lg z-50 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
      {/* Logo and Menu */}
      <div className="flex items-center flex-grow relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img src={logo} alt="Logo" className="h-24 rounded-lg " />
        </Link>

        {/* Hamburger Icon on Small Screens */}
        <div className="sm:hidden flex-grow text-right z-50">
          <button onClick={toggleMenu} className={`text-2xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} sm:flex sm:relative sm:${darkMode ? 'bg-gray-800' : 'bg-transparent'} sm:top-0 sm:justify-start sm:space-x-6 text-lg font-medium transition-all duration-300 ease-in-out z-50`}
        >
          {['/', '/Women', '/Men', '/Children', '/About'].map((path, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(['/', '/Women', '/Men', '/Children', '/About'][index])}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={path}
                className={`block px-4 py-2 sm:px-2 sm:py-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:${darkMode ? 'text-gray-100' : 'text-black'} transition-colors`}
              >
                {['Home', 'Women', 'Men', 'Children', 'About Us'][index]}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              {/* Dropdown Menu */}
              {dropdownOpen === path && (
                <div className={`absolute left-0 top-full mt-1 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'} shadow-lg rounded-lg w-48 sm:w-64 z-50`}>
                  <ul className="space-y-2 p-2">
                    {/* Dropdown items */}
                    {path === '/' && (
                      <>
                        <li><Link to="/featured" className="block px-4 py-2 hover:bg-gray-200 rounded">Featured</Link></li>
                        <li><Link to="/men" className="block px-4 py-2 hover:bg-gray-200 rounded">View All Men</Link></li>
                        <li><Link to="/new-arrivals" className="block px-4 py-2 hover:bg-gray-200 rounded">New Arrivals</Link></li>
                        <li><Link to="/best-sellers" className="block px-4 py-2 hover:bg-gray-200 rounded">Best Sellers</Link></li>
                        <li><Link to="/footwear" className="block px-4 py-2 hover:bg-gray-200 rounded">Footwear Up to $150,000</Link></li>
                        <li><Link to="/most-searched" className="block px-4 py-2 hover:bg-gray-200 rounded">Most Searched</Link></li>
                        <li><Link to="/icons" className="block px-4 py-2 hover:bg-gray-200 rounded">Icons</Link></li>
                      </>
                    )}
                    {path === '/Women' && (
                      <>
                        <li><Link to="/womens-footwear" className="block px-4 py-2 hover:bg-gray-200 rounded">All Women’s Footwear</Link></li>
                        <li><Link to="/women-jordan" className="block px-4 py-2 hover:bg-gray-200 rounded">Jordan</Link></li>
                        <li><Link to="/women-airmax" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Max</Link></li>
                        <li><Link to="/women-airforce" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Force 1</Link></li>
                        <li><Link to="/women-dunk" className="block px-4 py-2 hover:bg-gray-200 rounded">Dunk</Link></li>
                        <li><Link to="/women-boots" className="block px-4 py-2 hover:bg-gray-200 rounded">Boots</Link></li>
                        <li><Link to="/women-running" className="block px-4 py-2 hover:bg-gray-200 rounded">Running</Link></li>
                        <li><Link to="/women-gym" className="block px-4 py-2 hover:bg-gray-200 rounded">Gym & Training</Link></li>
                        <li><Link to="/women-nike-sb" className="block px-4 py-2 hover:bg-gray-200 rounded">Nike SB</Link></li>
                        <li><Link to="/women-opportunities" className="block px-4 py-2 hover:bg-gray-200 rounded">Footwear Opportunities</Link></li>
                      </>
                    )}
                    {path === '/Men' && (
                      <>
                        <li><Link to="/mens-footwear" className="block px-4 py-2 hover:bg-gray-200 rounded">All Men’s Footwear</Link></li>
                        <li><Link to="/men-jordan" className="block px-4 py-2 hover:bg-gray-200 rounded">Jordan</Link></li>
                        <li><Link to="/men-airmax" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Max</Link></li>
                        <li><Link to="/men-airforce" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Force 1</Link></li>
                        <li><Link to="/men-dunk" className="block px-4 py-2 hover:bg-gray-200 rounded">Dunk</Link></li>
                        <li><Link to="/men-boots" className="block px-4 py-2 hover:bg-gray-200 rounded">Boots</Link></li>
                        <li><Link to="/men-running" className="block px-4 py-2 hover:bg-gray-200 rounded">Running</Link></li>
                        <li><Link to="/men-gym" className="block px-4 py-2 hover:bg-gray-200 rounded">Gym & Training</Link></li>
                        <li><Link to="/men-nike-sb" className="block px-4 py-2 hover:bg-gray-200 rounded">Nike SB</Link></li>
                        <li><Link to="/men-opportunities" className="block px-4 py-2 hover:bg-gray-200 rounded">Footwear Opportunities</Link></li>
                      </>
                    )}
                    {path === '/Children' && (
                      <>
                        <li><Link to="/children-footwear" className="block px-4 py-2 hover:bg-gray-200 rounded">All Children’s Footwear</Link></li>
                        <li><Link to="/children-jordan" className="block px-4 py-2 hover:bg-gray-200 rounded">Jordan</Link></li>
                        <li><Link to="/children-airmax" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Max</Link></li>
                        <li><Link to="/children-airforce" className="block px-4 py-2 hover:bg-gray-200 rounded">Air Force 1</Link></li>
                        <li><Link to="/children-dunk" className="block px-4 py-2 hover:bg-gray-200 rounded">Dunk</Link></li>
                        <li><Link to="/children-boots" className="block px-4 py-2 hover:bg-gray-200 rounded">Boots</Link></li>
                        <li><Link to="/children-running" className="block px-4 py-2 hover:bg-gray-200 rounded">Running</Link></li>
                        <li><Link to="/children-gym" className="block px-4 py-2 hover:bg-gray-200 rounded">Gym & Training</Link></li>
                        <li><Link to="/children-nike-sb" className="block px-4 py-2 hover:bg-gray-200 rounded">Nike SB</Link></li>
                        <li><Link to="/children-opportunities" className="block px-4 py-2 hover:bg-gray-200 rounded">Footwear Opportunities</Link></li>
                      </>
                    )}
                    {path === '/About' && (
                      <>
                        <li><Link to="/our-story" className="block px-4 py-2 hover:bg-gray-200 rounded">Our Story</Link></li>
                        <li><Link to="/team" className="block px-4 py-2 hover:bg-gray-200 rounded">Our Team</Link></li>
                        <li><Link to="/careers" className="block px-4 py-2 hover:bg-gray-200 rounded">Careers</Link></li>
                        <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-200 rounded">Contact</Link></li>
                        <li><Link to="/faqs" className="block px-4 py-2 hover:bg-gray-200 rounded">FAQs</Link></li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 z-50">
        {/* Search Bar */}
        <div className={`relative hidden sm:flex items-center border rounded-lg shadow-md ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'}`}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className={`px-4 py-2 rounded-lg w-48 md:w-64 lg:w-80 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}
          />
          <FaSearch className={`absolute right-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>

        {/* Search Icon on Small Screens */}
        <button className={`shidden ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors text-lg`}>
          <FaSearch />
        </button>

        {/* Cart Icon */}
        <Link to="/cart" className={`hidden sm:block text-xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors`}>
          <FaShoppingCart />
        </Link>

        {/* Favorites Icon */}
        <Link to="/favorites" className={`hidden sm:block text-xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors`}>
          <FaHeart />
        </Link>

        {/* Profile Icon */}
        <Link to="/profile" className={`text-xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors`}>
          <FaUser />
        </Link>

        {/* Dark Mode Toggle Icon */}
        <button onClick={() => setDarkMode(!darkMode)} className={`hidden sm:block text-xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-gray-600 transition-colors`}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
