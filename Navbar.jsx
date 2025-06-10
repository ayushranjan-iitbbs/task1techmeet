import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-indigo-50 to-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
         
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-700 hover:text-indigo-800 transition"
        >
          ⚡ AI Predictor
        </Link>

        
        <button
          className="md:hidden text-indigo-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:space-x-6 text-gray-800 font-medium items-center">
          <li><Link to="/" className="px-4 py-2 hover:text-indigo-700 transition">Home</Link></li>
          <li><Link to="/about" className="px-4 py-2 hover:text-indigo-700 transition">Developer</Link></li>
          <li><Link to="/predict" className="px-4 py-2 hover:text-indigo-700 transition">Predictor</Link></li>
          <li>
            <Link
              to="/login"
              className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white py-6 px-6 space-y-4 text-gray-800 font-medium z-50 md:hidden">
            <Link
              to="/"
              className="block hover:text-indigo-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-indigo-700"
              onClick={() => setMenuOpen(false)}
            >
              Developer
            </Link>
            <Link
              to="/predict"
              className="block hover:text-indigo-700"
              onClick={() => setMenuOpen(false)}
            >
              Predictor
            </Link>
            <Link
              to="/login"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
