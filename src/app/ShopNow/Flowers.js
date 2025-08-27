"use client";
import React from 'react'
import Link from 'next/link'
import bgImage from '../assets/images/desktop.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const Flowers = () => {
  const title = [
    { char: "I", color: "text-[#bb281c]" },
    { char: "T", color: "text-[#bb281c]" },
    { char: "T", color: "text-[#012832]" },
    { char: "E", color: "text-[#012832]" },
    { char: "F", color: "text-[#012832]" },
    { char: "A", color: "text-[#012832]" },
    { char: "Q", color: "text-[#012832]" },
  ];
 
  return (
   
    <div className="relative h-[70vh] w-full">
    {/* Background Image */}
    <div className="absolute inset-0">
      <div
        className="w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
 
    {/* Content */}
    <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pb-10 sm:pb-16 md:pb-20"
        style={{ WebkitTextStroke: "0.2px #971a32" }}
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight sm:leading-snug">
          {title.map((item, index) => (
            <span key={index} className={item.color}>
              {item.char}
            </span>
          ))}
        </h1>
 
        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl italic text-[#ffff] mb-6 sm:mb-8"
          style={{ WebkitTextStroke: "0.1px #FFFDD0" }}
        >
         CONSTRUCTION CHEMICALS & PAINTS
        </p>
      </motion.div>
 
      {/* Button */}
      <Link href="/bookshop">
        <button className="bg-[#a84618] text-white text-sm sm:text-base py-2 px-5 sm:px-6 hover:bg-[#852b02] rounded-full cursor-pointer transition duration-300 hover:animate-shakeX">
          <div className="flex items-center gap-2">
            Shop Now
            <FaArrowRight />
          </div>
        </button>
      </Link>
    </div>
  </div>
 
   
  );
};
export default Flowers;
