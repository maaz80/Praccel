import React, { useState, useEffect } from "react";
import PraccelLogo from "../components/images/Praccel.png";
import { FiChevronDown, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleItemClick = (item) => setActiveItem(item);

  const navItems = [
    "Home",
    "For School",
    "Performance",
    "Register",
    "Login",
    "About Us",
    "Contact Us",
  ];

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white z-50 px-0 xl:px-40 py-1 md:py-2 fixed w-full transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between xl:justify-around items-center">
        {/* LogO */}
        <div className="logo">
          <img src={PraccelLogo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navbar Items */}
        <ul className="hidden font-medium text-lg xl:flex space-x-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative group cursor-pointer hover:text-[var(--primary-blue)] transition duration-200 ${activeItem === item ? "text-[var(--primary-blue)]" : "text-black"
                }`}
              onClick={() => handleItemClick(item)}
            >
              {item === "Register" ? (
                <div
                  className="flex items-center duration-300 ease-in-out transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                  }}
                >
                  {item}
                  <FiChevronDown
                    className={`ml-1 transform ${dropdownOpen ? "rotate-180" : "rotate-0"} duration-300 ease-in-out`}
                  />
                </div>
              ) : (
                item
              )}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[var(--primary-blue)] transition-all duration-300 ${activeItem === item || "group-hover:w-full group-hover:opacity-100"
                  } ${activeItem === item ? "w-full" : "w-0 opacity-0"}`}
              ></span>

              {/* Dropdown Menu */}
              {item === "Register" && dropdownOpen && (
                <ul className="absolute top-8 left-0 bg-white shadow-md rounded-md text-base text-gray-800">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleItemClick("Register Option")}
                  >
                    Registeration Form
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FiX className="w-6 h-6 text-black transition-transform duration-300" />
          ) : (
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          style={{ backgroundColor: "rgba(11, 87, 255, 0.85)" }}
          className="flex flex-col items-start text-xl px-6 space-y-4 text-white py-4 shadow-md xl:hidden transform transition-all duration-300 ease-in-out"
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer transition duration-200 ${activeItem === item ? " font-semibold underline transition duration-200 ease-in-out" : ""
                }`}
              onClick={() => handleItemClick(item)}
            >
              {item === "Register" ? (
                <div
                  className="flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                  }}
                >
                  {item} <FiChevronDown
                    className={`ml-1 transform ${dropdownOpen ? "rotate-180" : "rotate-0"} duration-300 ease-in-out`}
                  />
                </div>
              ) : (
                item
              )}

              {/* Mobile Dropdown */}
              {item === "Register" && dropdownOpen && (
                <ul className="pl-4 pt-2 text-base">
                  <li
                    className="py-1 bg-blue-950 w-80 no-underline px-2"
                    onClick={() => handleItemClick("Register Option")}
                  >
                    Registeration Form
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
