import React, { useEffect, useState } from "react";
import CRlogo from "../assets/CRlogo.png";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-20 md:px-10 px-4 flex items-center dark:bg-gray-800 bg-teal-600 justify-between transition duration-300 ease-in-out">
      <div className="flex items-center">
        <span className="h-full max-w-16">
          <img src={CRlogo} className="h-full" alt="Logo" />
        </span>
        <span className="font-bold text-white ml-2">CONSEQUAT REIMAGINED</span>
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-8 text-white list-none">
          <Link to='/' ><li className="text-left hover:underline cursor-pointer">HOME</li></Link>
          <Link to='/about'><li className="text-left hover:underline cursor-pointer">ABOUT</li></Link>
          <Link to='/team'><li className="text-left hover:underline cursor-pointer">TEAM</li></Link>
          <Link to='/contact'><li className="text-left hover:underline cursor-pointer">CONTACT US</li></Link>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div
          onClick={toggleDarkMode}
          className="rounded px-2 py-1 text-white cursor-pointer"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>

        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-teal-600 dark:bg-gray-800 text-white flex flex-col gap-4 p-4">
          <ul className="list-none text-center">
          <Link to='/' ><li className="py-2 hover:underline cursor-pointer">HOME</li></Link>
          <Link to='/about'><li className="py-2 hover:underline cursor-pointer">ABOUT</li></Link>
          <Link to='/team'><li className="py-2 hover:underline cursor-pointer">TEAM</li></Link>
          <Link to='/contact'><li className="py-2 hover:underline cursor-pointer">CONTACT US</li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
