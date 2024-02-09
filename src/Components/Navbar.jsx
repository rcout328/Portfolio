import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          Portfolio
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 border-t border-gray-700">
            <ul className="text-center py-4">
              <li>
                <Link
                  to="/"
                  className="block py-3 text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="block py-3 text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-3 text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-3 text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/project" className="text-white hover:text-gray-300">
            Project
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
