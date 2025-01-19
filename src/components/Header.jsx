import React from "react";


const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 md:p-8 bg-[#030712] text-white">
      <a
        className="inline-flex items-center rounded-md text-xl text-white focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-3xl"
        href="/"
      >
        <span className="mr-1 font-brand-primary">Aadarsh</span>
        <span className="font-brand-primary font-bold">Prajapati</span>
      </a>
      <nav className="flex gap-4 sm:gap-8">
        <a
          href="#about"
          className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
