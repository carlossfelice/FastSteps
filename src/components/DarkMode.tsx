// DarkModeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface DarkModeToggleProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ setDarkMode, darkMode }) => {
  return (
    <button onClick={() => setDarkMode(prev => !prev)} className="focus:outline-none">
      {darkMode ? (
        <FaSun className="text-2xl text-yellow-500" />
      ) : (
        <FaMoon className="text-2xl text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
