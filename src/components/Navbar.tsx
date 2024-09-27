import React, { useState, ChangeEvent } from "react";
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
import CoverParticules from "../utils/cover-particles";
import logo from "../assets/FS-logo9.png"; // Asegúrate de que la ruta del logo sea correcta

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (menu: string) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen("");
  };

  return (
    <>
      <div className="fixed">
        <CoverParticules />
      </div>
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
            {["/", "/Women", "/Men", "/Children", "/About"].map(
              (path, index) => (
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
                              <button
                                onClick={() => scrollToSection("best-sellers")}
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Best Sellers
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => scrollToSection("categories")}
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Categories
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => scrollToSection("featured")}
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Featured
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => scrollToSection("footer")}
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Footer
                              </button>
                            </li>
                          </>
                        )}

                        {path === "/Women" && (
                          <>
                            <li>
                              <Link
                                to="/shop-women/boots"
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
                                to="/shop-women/sweatshirts"
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Sweatshirts
                              </Link>
                            </li>
                          </>
                        )}

                        {path === "/Men" && (
                          <>
                            <li>
                              <Link
                                to="/shop-men/boots"
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
                                to="/shop-men/sweatshirts"
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Sweatshirts
                              </Link>
                            </li>
                          </>
                        )}

                        {path === "/Children" && (
                          <>
                            <li>
                              <Link
                                to="/shop-children/toys"
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Toys
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop-children/clothes"
                                className={`block px-4 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Clothes
                              </Link>
                            </li>
                          </>
                        )}

                        {path === "/About" && (
                          <ul className="space-y-1">
                            <li>
                              <Link
                                to="/our-team"
                                className={`block px-3 py-2 rounded ${
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
                                to="/contact"
                                className={`block px-3 py-2 rounded ${
                                  darkMode
                                    ? "hover:bg-gray-600"
                                    : "hover:bg-gray-200"
                                }`}
                              >
                                Contact
                              </Link>
                            </li>
                          </ul>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              )
            )}
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
    </>
  );
};

export default Navbar;
