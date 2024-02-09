import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          Portfolio
        </Link>
        <div className="flex space-x-4">
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
