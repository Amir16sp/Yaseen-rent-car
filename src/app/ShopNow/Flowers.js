"use client";
import React from "react";
import Link from "next/link";
import bgImage from "../assets/images/redmg.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { color, motion } from "framer-motion";

const Flowers = () => {
  const title = [
    {char: "Y", color: "text-[#ff3e00]"},

    {char: "a", color: "text-[#ff3e00]"},
    { char: "s", color: "text-white" },        // White pops on dark overlay
    { char: "e", color: "text-white" },
    { char: "e", color: "text-white" },
    {char: "n", color: "text-[#ff3e00]"},  // Balance gold-white contrast
  ];

  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pb-10 sm:pb-16 md:pb-20"
          style={{ WebkitTextStroke: "0.5px #000" }} // black stroke for readability
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 leading-tight sm:leading-snug tracking-wide">
            {title.map((item, index) => (
              <span key={index} className={item.color}>
                {item.char}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p
            className="text-xl sm:text-2xl md:text-3xl italic text-gray-100 drop-shadow-lg mb-6 sm:mb-8"
            style={{ WebkitTextStroke: "0.3px #FFD700" }} // gold stroke
          >
            Rent a Car  Companies!
          </p>
        </motion.div>

        {/* Button */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/bookshop" prefetch>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff3e00] px-8 py-4 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Book A Rental
                <FaArrowRight />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flowers;
