import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({link}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Kiri: Nama Toko */}
        <div className="text-2xl font-bold">
          <Link to="/">Toko Dian</Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {link.map((link,index) => (
            <Link key={index} to={link.path} className="hover:text-blue-300">
              {link.name}
            </Link>        
          ))}

        </div>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          {link.map((link) => (
            <Link to={link.path} className="block px-4 py-2 hover:bg-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>        
          ))}          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
