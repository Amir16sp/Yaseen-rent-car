// app/components/CoverageSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const CITIES = [
  { name: "Lahore ", img: "/images/images (5).jpeg" },
  { name: "Islamabad ", img: "/images/download (1).jpeg" },
  { name: "Multan ", img: "/images/download (2).jpeg" },
  { name: "Karachi", img: "/images/download (3).jpeg" },
  { name: "Okara", img: "/images/images.jpeg" },
  { name: "Sahiwal", img: "/images/images (1).jpeg1.jpeg" },
  { name: "Faislabad", img: "/images/images (1).jpeg2.jpeg" },
  { name: "Pashawar", img: "/images/download.jpeg" },
   { name: "Gujranwala", img: "/images/gujranwala.jpg" },
    { name: "Swat", img: "/images/sawat.jpg" },
     { name: "Lexus Hunza", img: "/images/laxusHanza.jpg" },
      { name: "Sialkot", img: "/images/sialkot.jpg" },
];

export default function CoverageSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
          Nationwide Service Coverage
        </h2>

        {/* Grid 4 x 2 on desktop */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {CITIES.map((c, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition"
            >
              {/* Image with fixed aspect ratio */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform"
                />
              </div>
              {/* Caption */}
              <div className="p-3 text-center">
                <p className="text-sm sm:text-base font-semibold text-slate-800">
                  {c.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-10 flex justify-center">
        <Link href="/bookshop" prefetch>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ff3e00] hover:bg-orange-700 text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg md:text-xl inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <span className="flex items-center gap-2">
                Book A Rental
                <FaArrowRight />
              </span>
            </motion.button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
