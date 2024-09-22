import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
  FaSun,
  FaMoon,
} from "react-icons/fa";
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
    <nav
      className={`h-24 flex items-center justify-between px-4 sm:px-8 shadow-lg z-50 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-800"
      }`}
    >
      {/* Logo and Menu */}
      <div className="flex items-center flex-grow relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img src={logo} alt="Logo" className="h-24 rounded-lg " />
        </Link>

        {/* Hamburger Icon on Small Screens */}
        <div className="sm:hidden flex-grow text-right z-50">
          <button
            onClick={toggleMenu}
            className={`text-2xl ${
              darkMode ? "text-gray-200" : "text-gray-800"
            } hover:text-gray-600 transition-colors`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full ${
            darkMode ? "bg-gray-800" : "bg-gray-300"
          } sm:flex sm:relative sm:${
            darkMode ? "bg-gray-800" : "bg-transparent"
          } sm:top-0 sm:justify-start sm:space-x-6 text-lg font-medium transition-all duration-300 ease-in-out z-50`}
        >
          {["/", "/Women", "/Men", "/Children", "/About"].map((path, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() =>
                handleMouseEnter(
                  ["/", "/Women", "/Men", "/Children", "/About"][index]
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={path}
                className={`block px-4 py-2 sm:px-2 sm:py-1 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                } hover:${
                  darkMode ? "text-gray-100" : "text-black"
                } transition-colors`}
              >
                {["Home", "Women", "Men", "Children", "About Us"][index]}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              {/* Dropdown Menu */}
              {dropdownOpen === path && (
                <div
                  className={`absolute left-0 top-full  ${
                    darkMode
                      ? "bg-gray-700 text-gray-200"
                      : "bg-white text-gray-800"
                  } shadow-lg rounded-lg w-48 sm:w-64 z-50`}
                >
                  <ul className="space-y-2 p-2">
                    {/* Dropdown items */}
                    {path === "/" && (
                      <>
                        <li>
                          <Link
                            to="/featured"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Featured
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            View All Men
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/new-arrivals"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/best-sellers"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Best Sellers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/footwear"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Footwear Up to $150,000
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/most-searched"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Most Searched
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/icons"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Icons
                          </Link>
                        </li>
                      </>
                    )}
                    {path === "/Women" && (
                      <>
                        <li>
                          <Link
                            to="/womens-footwear"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            All Women’s Footwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-jordan"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Jordan
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-airmax"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Max
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-airforce"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Force 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-dunk"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Dunk
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-boots"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-running"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Running
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-gym"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Gym & Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-nike-sb"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Nike SB
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/women-opportunities"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Footwear Opportunities
                          </Link>
                        </li>
                      </>
                    )}
                    {path === "/Men" && (
                      <>
                        <li>
                          <Link
                            to="/mens-footwear"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            All Men’s Footwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-jordan"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Jordan
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-airmax"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Max
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-airforce"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Force 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-dunk"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Dunk
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-boots"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-running"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Running
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-gym"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Gym & Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-nike-sb"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Nike SB
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/men-opportunities"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Footwear Opportunities
                          </Link>
                        </li>
                      </>
                    )}
                    {path === "/Children" && (
                      <>
                        <li>
                          <Link
                            to="/children-footwear"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            All Children’s Footwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-jordan"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Jordan
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-airmax"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Max
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-airforce"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Air Force 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-dunk"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Dunk
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-boots"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-running"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Running
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-gym"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Gym & Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-nike-sb"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Nike SB
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/children-opportunities"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Footwear Opportunities
                          </Link>
                        </li>
                      </>
                    )}
                    {path === "/About" && (
                      <>
                        <li>
                          <Link
                            to="/our-story"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/team"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/faqs"
                            className={`block px-4 py-2 rounded ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            FAQs
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Icons and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={`px-3 py-1 rounded ${
              darkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200 text-gray-800"
            } focus:outline-none`}
          />
          <FaSearch className="absolute right-3 top-2 text-lg" />
        </div>

        {/* User Icon */}
        <Link
          to="/profile"
          className={`${
            darkMode ? "text-gray-200" : "text-gray-800"
          } hover:text-gray-600 transition-colors`}
        >
          <FaUser className="text-2xl" />
        </Link>

        {/* Shopping Cart Icon */}
        <Link
          to="/cart"
          className={`${
            darkMode ? "text-gray-200" : "text-gray-800"
          } hover:text-gray-600 transition-colors`}
        >
          <FaShoppingCart className="text-2xl" />
        </Link>

        {/* Wishlist Icon */}
        <Link
          to="/wishlist"
          className={`${
            darkMode ? "text-gray-200" : "text-gray-800"
          } hover:text-gray-600 transition-colors`}
        >
          <FaHeart className="text-2xl" />
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="focus:outline-none"
        >
          {darkMode ? (
            <FaSun className="text-2xl text-yellow-500" />
          ) : (
            <FaMoon className="text-2xl text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};
