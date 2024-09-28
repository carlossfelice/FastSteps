import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import logo from "../assets/FS-logo10.jpg";
import CoverParticules from "../utils/cover-particles";

interface DropdownItem {
  label: string;
  href?: string;   // Asegúrate de que esté presente
  dropdownItems?: Array<{
    label: string;
    href?: string;
  }>;
}

interface MenuItem {
  to: string;
  label: string;
  isScroll: boolean;
  dropdownItems?: DropdownItem[];
}

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [subDropdownOpen, setSubDropdownOpen] = useState("");
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = (menu: string) => setDropdownOpen(menu);
  const handleMouseLeave = () => {
    setDropdownOpen("");
    setSubDropdownOpen("");
  };
  const handleSubMouseEnter = (submenu: string) => setSubDropdownOpen(submenu);
  const handleSubMouseLeave = () => setSubDropdownOpen("");

  const commonSections: DropdownItem[] = [
    {
      label: "Discount",
      dropdownItems: [
        { label: "20% Off", href: "shop-women/20-off" },
        { label: "30% Off", href: "shop-women/30-off" },
        { label: "40% Off", href: "shop-women/40-off" },
        { label: "50% Off", href: "shop-women/50-off" },
      ],
    },
    {
      label: "Categories",
      dropdownItems: [
        { label: "Footwear", href: "Footwear" },
        { label: "Clothing", href: "Clothing" },
        { label: "Accessories", href: "Accessories" },
      ],
    },
    {
      label: "Types",
      dropdownItems: [
        { label: "Casual", href: "casual" },
        { label: "Formal", href: "formal" },
      ],
    },
    {
      label: "Surface",
      dropdownItems: [
        { label: "Cotton", href: "cotton" },
        { label: "Polyester", href: "polyester" },
      ],
    },
  ];

  const menuItems: MenuItem[] = [
    { to: "/", label: "Home", isScroll: false },
    { to: "/women", label: "Women", isScroll: false, dropdownItems: commonSections },
    { to: "/men", label: "Men", isScroll: false, dropdownItems: commonSections },
    { to: "/child", label: "Child", isScroll: false, dropdownItems: commonSections },
  ];

  return (
    <>
      <div className="fixed">
        <CoverParticules />
      </div>
      <nav
        className={`h-24 flex items-center justify-between px-4 sm:px-8 shadow-lg z-50 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-800"
        } transition-all duration-300`}
      >
        <div className="flex items-center flex-grow relative">
          <Link to="/" className="flex-shrink-0 z-50" aria-label="Logo">
            <img src={logo} alt="Logo" className="h-24 rounded-lg" />
          </Link>

          <div className="sm:hidden flex-grow text-right z-50">
            <button
              onClick={toggleMenu}
              className={`text-2xl ${
                darkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-gray-600 transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full ${
              darkMode ? "bg-gray-800" : "bg-gray-300"
            } sm:flex sm:relative sm:bg-transparent sm:top-0 sm:justify-start sm:space-x-6 text-lg font-medium transition-all duration-300 z-50`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.to)}
                onMouseLeave={handleMouseLeave}
              >
                {!item.isScroll ? (
                  <Link
                    to={item.to}
                    className={`block px-4 py-2 sm:px-2 sm:py-1 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } hover:${darkMode ? "text-gray-100" : "text-black"} ${
                      location.pathname === item.to ? "font-bold" : ""
                    } transition-colors`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.to)}
                    className={`block px-4 py-2 sm:px-2 sm:py-1 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } hover:${darkMode ? "text-gray-100" : "text-black"} ${
                      location.pathname === item.to ? "font-bold" : ""
                    } transition-colors`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                )}

                {dropdownOpen === item.to && item.dropdownItems && (
                  <div
                    className={`absolute left-0 top-full ${
                      darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                    } shadow-lg rounded-lg w-48 sm:w-64 z-50`}
                  >
                    <ul className="space-y-2 p-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li
                          key={dropdownIndex}
                          className="relative group"
                          onMouseEnter={() =>
                            dropdownItem.dropdownItems &&
                            handleSubMouseEnter(dropdownItem.label)
                          }
                          onMouseLeave={handleSubMouseLeave}
                        >
                          <Link
                            to={`/women/${dropdownItem.href}`}
                            className={`block px-4 py-2 rounded ${
                              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                            }`}
                            aria-label={dropdownItem.label}
                          >
                            {dropdownItem.label}
                          </Link>

                          {/* Submenu */}
                          {subDropdownOpen === dropdownItem.label && dropdownItem.dropdownItems && (
                            <div
                              className={`absolute left-full top-0 ${
                                darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                              } shadow-lg rounded-lg w-48 z-50`}
                            >
                              <ul className="space-y-2 p-2">
                                {dropdownItem.dropdownItems.map((subDropdownItem, subDropdownIndex) => (
                                  <li key={subDropdownIndex}>
                                    <Link
                                      to={`/women/${subDropdownItem.href}`}
                                      className={`block px-4 py-2 rounded ${
                                        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                                      }`}
                                      aria-label={subDropdownItem.label}
                                    >
                                      {subDropdownItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex items-center space-x-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded ${darkMode ? "bg-gray-800" : "bg-gray-300"} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/cart" className="relative" aria-label="Cart">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <Link to="/profile" className="relative" aria-label="Profile">
            <FaUser className="text-2xl" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
