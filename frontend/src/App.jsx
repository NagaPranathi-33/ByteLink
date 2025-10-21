import React from "react";
import UrlShortener from "./components/UrlShortener";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
          ByteLink
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
          Transform long URLs into clean, shareable links with ByteLink’s fast
          and secure shortening service.
        </p>

        <UrlShortener />
      </div>

      {/* Right Section */}
      <div
        className="hidden md:block md:w-1/2 h-96 bg-contain bg-center bg-no-repeat mt-10 md:mt-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </div>
  );
}

export default App;
