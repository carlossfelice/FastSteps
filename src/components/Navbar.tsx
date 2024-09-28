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
  href?: string;
  id?: string;
  dropdownItems?: DropdownItem[];
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

  const handleMouseEnter = (menu: string) => setDropdownOpen(menu);
  const handleMouseLeave = () => {
    setDropdownOpen("");
    setSubDropdownOpen("");
  };
  const handleSubMouseEnter = (submenu: string) => setSubDropdownOpen(submenu);
  const handleSubMouseLeave = () => setSubDropdownOpen("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const home = (): DropdownItem[] => [
  //   { label: "Introduction", id: "hero" },
  //   { label: "Best Sellers", id: "best-sellers" },
  //   { label: "Categories", id: "categories" },
  //   { label: "Featured", id: "featured" },
  //   { label: "Testimonials", id: "testimonials" },
  // ];

  const about = (): DropdownItem[] => [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/about/our-team" },
    { label: "Contact", href: "/about/contact" },
  ];

  const createSections = (prefix: string): DropdownItem[] => [
    {
      label: "Discount",
      dropdownItems: [
        { label: "20% Off", href: `${prefix}/shop-${prefix}/20-off` },
        { label: "30% Off", href: `${prefix}/shop-${prefix}/30-off` },
        { label: "40% Off", href: `${prefix}/shop-${prefix}/40-off` },
        { label: "50% Off", href: `${prefix}/shop-${prefix}/50-off` },
      ],
    },
    {
      label: "Categories",
      dropdownItems: [
        { label: "Footwear", href: `${prefix}/footwear` },
        { label: "Clothing", href: `${prefix}/clothing` },
        { label: "Accessories", href: `${prefix}/accessories` },
      ],
    },
    {
      label: "Types",
      dropdownItems: [
        { label: "Casual", href: `${prefix}/casual` },
        { label: "Formal", href: `${prefix}/formal` },
      ],
    },
    {
      label: "Surface",
      dropdownItems: [
        { label: "Cotton", href: `${prefix}/cotton` },
        { label: "Polyester", href: `${prefix}/polyester` },
      ],
    },
  ];

  const menuItems: MenuItem[] = [
    {
      to: "/",
      label: "Home",
      isScroll: true,
    },
    {
      to: "/women",
      label: "Women",
      isScroll: false,
      dropdownItems: createSections("women"),
    },
    {
      to: "/men",
      label: "Men",
      isScroll: false,
      dropdownItems: createSections("men"),
    },
    {
      to: "/children",
      label: "Children",
      isScroll: false,
      dropdownItems: createSections("children"),
    },
    {
      to: "/about",
      label: "About Us",
      isScroll: false,
      dropdownItems: about(),
    },
  ];

  return (
    <>
      <div className="fixed">
        <CoverParticules />
      </div>
      <nav
        className={`h-24 flex items-center justify-between px-4 sm:px-8 shadow-lg z-50 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-800"
        } transition-all duration-300 shadow-md`}
      >
        <div className="flex items-center flex-grow relative">
          <Link to="/" className="flex-shrink-0 z-50" aria-label="Logo">
            <img
              src={logo}
              alt="Logo"
              className="h-24 rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
          </Link>

          <div className="sm:hidden flex-grow text-right z-50">
            <button
              onClick={toggleMenu}
              className={`text-2xl transition-colors duration-300 ${
                darkMode
                  ? "text-gray-200 hover:text-gray-300"
                  : "text-gray-800 hover:text-gray-600"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full p-4 rounded-lg transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-gray-300"
            } sm:flex sm:relative sm:bg-transparent sm:top-0 sm:justify-start sm:space-x-6 text-lg font-medium z-50`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.to)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.to}
                  onClick={() => {
                    if (item.isScroll && item.dropdownItems) {
                      scrollToSection(item.dropdownItems[0].id as string);
                    }
                    // Si es "About Us" no se desplaza suavemente
                    if (!item.isScroll) {
                      setIsOpen(false); // Cerrar menú al hacer clic
                    }
                  }}
                  className={`block px-4 py-2 sm:px-2 sm:py-1 rounded transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-200 hover:text-gray-100"
                      : "text-gray-800 hover:text-black"
                  } ${location.pathname === item.to ? "font-bold" : ""}`}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>

                {dropdownOpen === item.to && item.dropdownItems && (
                  <div
                    className={`absolute left-0 top-full rounded-lg shadow-lg transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-white text-gray-800"
                    } w-48 sm:w-64 z-50`}
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
                            to={dropdownItem.href as string}
                            onClick={() => {
                              if (dropdownItem.id) {
                                scrollToSection(dropdownItem.id);
                              }
                              setIsOpen(false); // Cerrar el menú al hacer clic
                            }}
                            className={`block px-4 py-2 rounded transition-colors duration-300 ${
                              darkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-200"
                            }`}
                            aria-label={dropdownItem.label}
                          >
                            {dropdownItem.label}
                          </Link>

                          {subDropdownOpen === dropdownItem.label &&
                            dropdownItem.dropdownItems && (
                              <div
                                className={`absolute left-full top-0 mt-2 rounded-lg shadow-lg transition-all duration-300 ${
                                  darkMode
                                    ? "bg-gray-700 text-gray-200"
                                    : "bg-white text-gray-800"
                                } w-48 z-50`}
                              >
                                <ul className="space-y-2 p-2">
                                  {dropdownItem.dropdownItems.map(
                                    (subDropdownItem, subDropdownIndex) => (
                                      <li key={subDropdownIndex}>
                                        <Link
                                          to={subDropdownItem.href as string} // También directo aquí
                                          className={`block px-4 py-2 rounded transition-colors duration-300 ${
                                            darkMode
                                              ? "hover:bg-gray-600"
                                              : "hover:bg-gray-200"
                                          }`}
                                          aria-label={subDropdownItem.label}
                                        >
                                          {subDropdownItem.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
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

        <div className="flex items-center.fle z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 transition-colors duration-300 ${
              darkMode
                ? "text-gray-200 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>

          <Link
            to="/cart"
            className={`relative p-2 transition-colors duration-300 ${
              darkMode
                ? "text-gray-200 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
            aria-label="Cart"
          >
            <FaShoppingCart className="text-2xl" />
          </Link>

          <Link
            to="/profile"
            className={`relative p-2 transition-colors duration-300 ${
              darkMode
                ? "text-gray-200 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
            aria-label="Profile"
          >
            <FaUser className="text-2xl" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
