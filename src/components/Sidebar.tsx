import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen pt-24 px-4 hidden md:block">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        <Link to="/about" className="hover:bg-gray-700 p-2 rounded">
          About
        </Link>
        <Link to="/contact" className="hover:bg-gray-700 p-2 rounded">
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
