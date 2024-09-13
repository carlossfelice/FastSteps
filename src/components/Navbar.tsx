import { Link } from "react-router-dom";
import logo from "../assets/FS-logo10.jpg";
export const Navbar = () => {
  return (
    <nav className="bg-gray-300 h-24 flex items-center px-4 sm:px-8">
      <Link to="/" className="flex-shrink-0 -ml-8">
        <img src={logo} alt="Logo" className="h-24 rounded-lg" />
      </Link>

      <div className="flex-grow"></div>
      <ul className="flex space-x-6 text-[18px]">
        <li>
          <Link to="/" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Women" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Women
          </Link>
        </li>
        <li>
          <Link to="/Men" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Men
          </Link>
        </li>
        <li>
          <Link to="/Children" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Children
          </Link>
        </li>
        <li>
          <Link to="/About" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Cart" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/Profile" className="relative px-2 py-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
