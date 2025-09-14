"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Logo from "../assets/images/carlogo.png";
import { motion, AnimatePresence } from "framer-motion";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleExpandMobile = (name) => {
    setExpandedMenu((prev) => (prev === name ? null : name));
  };

  const items = [
    { name: "BOOK NOW", link: "/bookshop", color: "text-white" },
      { name: "About", link: "/age", color: "text-white" },
    { name: "Blog", link: "/about", color: "text-white" },
  
  
    { name: "Rental Agreement", link: "/freebies", color: "text-white" },
    { name: "CONTACT US", link: "/contact", color: "text-white" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 h-18 flex items-center">
      <div className="w-full px-3 lg:px-10 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={110} height={45} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center font-light text-white h-full">
          <ul className="flex items-center space-x-4 h-full">
            {items.map((item) => (
              <li key={item.name} className="relative px-2 text-base">
                {item.subItems ? (
                  <div
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setExpandedMenu(item.name)}
                    onMouseLeave={() => setExpandedMenu(null)}
                  >
                    <div className="hover:underline cursor-pointer flex items-center gap-1">
                      {item.name}
                      <span className="text-xs">▼</span>
                    </div>
                    {expandedMenu === item.name && (
                      <ul className="absolute left-0 top-full -mt-1 w-48 bg-[#a84618] text-white shadow-lg rounded-md z-50">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.link}
                              className="block px-4 py-2 hover:bg-[#852b02]"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="hover:underline transition-all duration-300 font-medium flex items-center gap-1"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger + Animated Menu */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-red-600"
          >
            <GiHamburgerMenu />
          </button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-7 right-0 w-64 bg-[#b8d680] z-50 shadow-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <Image src={Logo} alt="Logo" width={80} height={40} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl text-black"
                  >
                    ✕
                  </button>
                </div>

                <ul className="space-y-4 text-black font-medium">
                  {items.map((item) => (
                    <li key={item.name}>
                      {item.subItems ? (
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleExpandMobile(item.name)}
                        >
                          <span className="hover:text-yellow-400">
                            {item.name}
                          </span>
                          {expandedMenu === item.name ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          className="block hover:text-yellow-400 transition duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.subItems && expandedMenu === item.name && (
                        <ul className="ml-4 mt-2 space-y-2 text-sm font-normal text-black">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.link}
                                className="block hover:text-yellow-300"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
