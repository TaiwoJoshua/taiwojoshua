import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [mNav, setMNav] = useState(false);

  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    if (currentTheme === "dark") {
      html.classList.add("dark");
      themeToggle.classList.add("dark");
      mobileThemeToggle.classList.add("dark");
    }

    function updateProgressBar() {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      document.getElementById("progressBar").style.width = scrollPercent + "%";
    }

    window.addEventListener("scroll", updateProgressBar);

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    const html = document.documentElement;

    html.classList.toggle("dark");
    themeToggle.classList.toggle("dark");
    mobileThemeToggle.classList.toggle("dark");

    const theme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Joshua Taiwo
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <a
                href="#home"
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#skills"
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-sun text-yellow-500 text-sm"></i>
              <div
                id="theme-toggle"
                className="theme-toggle"
                onClick={toggleTheme}
              ></div>
              <i className="fas fa-moon text-blue-400 text-sm"></i>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <div
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="theme-toggle scale-75"
            ></div>
            <button
              id="mobile-menu-btn"
              onClick={() => setMNav((old) => !old)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {!mNav && <i className="fas fa-bars text-xl"></i>}
              {mNav && <i className="fas fa-times text-xl"></i>}
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${
          mNav ? "" : "hidden"
        } bg-white dark:bg-gray-900 border-t dark:border-gray-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </div>

      <div
        id="progressBar"
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-600 z-100 duration-100 ease-in-out transition-[width]"
        style={{ width: "0%" }}
      ></div>
    </nav>
  );
}
