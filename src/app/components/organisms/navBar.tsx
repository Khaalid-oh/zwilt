"use client";
import React, { useState } from "react";
import ZwiltLogo from "../atoms/zwilt-logo";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { index: 0, label: "Find Work", path: "/" },
  { index: 1, label: "Find Talent", path: "/" },
  { index: 2, label: "Article", path: "/" },
  { index: 3, label: "About Us", path: "/" },
  { index: 4, label: "Contact Us", path: "/" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-light-purple w-[95%] md:w-[90%] h-[60px] flex items-center pl-8 pr-4 rounded-2xl text-white justify-between">
      <ZwiltLogo />
      <div className="hidden md:flex gap-10">
        {menuItems.map((links) => (
          <div key={links.index}>
            <Link href={links.path}>{links.label}</Link>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/">Log In</Link>
        <Link
          className="text-gray-900 bg-white p-[10px] px-5 rounded-2xl"
          href="/"
        >
          Join Now
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-white" />
          ) : (
            <FaBars className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-light-purple flex flex-col items-center justify-center space-y-4 z-50">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes className="w-8 h-8 text-white" />
          </button>
          {menuItems.map((links) => (
            <div key={links.index} className="text-2xl">
              <Link href={links.path} onClick={toggleMenu}>
                {links.label}
              </Link>
            </div>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4">
            <Link href="/" onClick={toggleMenu}>
              Log In
            </Link>
            <Link
              className="text-gray-900 bg-white p-[10px] px-5 rounded-2xl"
              href="/"
              onClick={toggleMenu}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
