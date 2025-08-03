import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: React.FC = () => {
  const { theme } = useTheme();

  const themeClasses =
    theme === "theme1"
      ? "bg-white text-black"
      : theme === "theme2"
      ? "bg-gray-800 text-white"
      : "bg-yellow-400 text-black";

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-500 ${themeClasses}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide">
          Multi-Theme Switcher
        </h1>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <ThemeSwitcher />
        </nav>
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
