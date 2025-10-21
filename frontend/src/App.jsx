import React, { useState, useEffect } from "react";
import UrlShortener from "./components/UrlShortener";
import heroImage from "./assets/hero.png";
import logo from "./assets/logo.png";

function App() {
  // Default = light mode
  const [darkMode, setDarkMode] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Connecting ideas, one link at a time.",
    "Short links, long reach — just like life’s connections.",
    "Every big journey starts with a small link.",
    "Simplify. Share. Shine.",
    "Your story deserves a shorter path.",
    "Tiny links, massive impact.",
    "Turning long chaos into short clarity.",
  ];

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme toggle to <html> and save in localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white dark:bg-gray-900 shadow-sm transition duration-300">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ByteLink Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
            ByteLink
          </h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:scale-105 transition-transform duration-300 shadow-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 transition-colors duration-500">
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            Shorten, Simplify & <span className="text-blue-600 dark:text-blue-400">Share Smarter</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
            Transform long, messy URLs into clean, memorable links — fast, secure, and effortless.
          </p>
          <p className="italic text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-all duration-500">
            “{quotes[quoteIndex]}”
          </p>
          <UrlShortener />
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] object-contain animate-float"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} ByteLink — Built for smarter sharing.
      </footer>
    </>
  );
}

export default App;
