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
import CoverParticules from "../utils/cover-particles";

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
      <>
        <div className="fixed">
          <CoverParticules />
        </div>
        <nav
          className={`h-24 flex items-center justify-between px-4 sm:px-8 shadow-lg z-50 w-full ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-800"
          }`}
        >
          {/* Logo and Menu */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg "
              />
            </Link>

            {/* Hamburger Icon on Small Screens */}
            <div className="sm:hidden flex-grow text-right">
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
                        className={`absolute left-0 top-full sm:w-64  ${
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-white text-gray-800"
                        } shadow-lg rounded-lg z-50`}
                      >
                        <ul className="space-y-2 p-2">
                          {/* Dropdown items */}

                          {path === "/" && (
                            <>
                              <li>
                                <button
                                  onClick={() =>
                                    scrollToSection("best-sellers")
                                  }
                                  className={`block px-4 py-2 hover:bg-gray-200 rounded ${
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
                              <ul className="space-y-2">
                                <li>
                                  <Link
                                    to="/shop-mujer/20-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    20% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-mujer/30-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    30% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-mujer/40-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    40% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-women/50-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    50% OFF
                                  </Link>
                                </li>
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
                                <li>
                                  <Link
                                    to="/shop-women/leggings"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Leggings
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-women/tshirts"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-women/indoor-court"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Indoor Court
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-women/natural-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Natural Grass
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-women/synthetic-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Synthetic Grass
                                  </Link>
                                </li>
                              </ul>
                            </>
                          )}

                          {path === "/Men" && (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <Link
                                    to="/shop-men/20-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    20% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/30-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    30% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/40-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    40% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/50-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    50% OFF
                                  </Link>
                                </li>
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
                                <li>
                                  <Link
                                    to="/shop-men/leggings"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Leggings
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/tshirts"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/indoor-court"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Indoor Court
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/natural-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Natural Grass
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-men/synthetic-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Synthetic Grass
                                  </Link>
                                </li>
                              </ul>
                            </>
                          )}
                          {path === "/Children" && (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <Link
                                    to="/shop-children/20-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    20% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/30-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    30% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/40-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    40% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/50-off"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    50% OFF
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/boots"
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
                                    to="/shop-children/sweatshirts"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Sweatshirts
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/leggings"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Leggings
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/tshirts"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/indoor-court"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Indoor Court
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/natural-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Natural Grass
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/shop-children/synthetic-grass"
                                    className={`block px-4 py-2 rounded ${
                                      darkMode
                                        ? "hover:bg-gray-600"
                                        : "hover:bg-gray-200"
                                    }`}
                                  >
                                    Synthetic Grass
                                  </Link>
                                </li>
                              </ul>
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
          <div className="hidden sm:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`px-3 py-1 rounded-lg ${
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
    </>
  );
};
