import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // List of pages
  const list = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PRICING", link: "/pricing" },
    { name: "CONTACT", link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-primary w-full fixed z-50 shadow-md px-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-3xl font-heading font-bold">
          <span className="text-white">Gym</span>
          <span className="text-accent">Bro</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex flex-1 justify-center items-center gap-8">
          {list.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `text-white font-medium text-lg transition-colors duration-300
                ${isActive ? "text-accent border-b-2 border-accent" : "hover:text-accent"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex">
          <NavLink
            to="/contact"
            className="text-white bg-accent px-4 py-2 rounded-lg font-medium hover:opacity-90 shadow-md"
          >
            JOIN NOW
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden bg-primary w-full shadow-lg">
          <div className="flex flex-col items-center py-4">
            {list.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `w-full text-center py-3 text-white font-medium border-b border-white transition
                  ${isActive ? "text-accent border-b-accent" : "hover:text-accent hover:border-b-accent"}`
                }
                onClick={() => setIsOpen(false)} // close menu when clicked
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile CTA Button */}
            <NavLink
              to="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 mt-4"
              onClick={() => setIsOpen(false)}
            >
              JOIN NOW
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
