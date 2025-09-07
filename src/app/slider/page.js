"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";


// Images
import Once from "../assets/images/1.jpg";
import Mekael from "../assets/images/3.jpg";
import Your from "../assets/images/4.jpg";
import Jannah from "../assets/images/6.jpg";
import Maza from "../assets/images/5.jpg";
import ADAY from "../assets/images/7.jpg";
import MG from "../assets/images/8.jpg";
import TOYOTA from "../assets/images/9.jpg";
import Alto from "../assets/images/10.jpg";
import WEGON from "../assets/images/11.jpg";
import Sonata from "../assets/images/12.jpg";

const Page = () => {
  const collections = [
    { age: "", image: Once, alt: "Once" },
    { age: "", image: Mekael, alt: "Mekael" },
    { age: "", image: Your, alt: "Your" },
    { age: "", image: Jannah, alt: "Jannah" },
    { age: "", image: Maza, alt: "Maza" },
    { age: "", image: ADAY, alt: "ADAY" },
    { age: "", image: MG, alt: "MG" },
    { age: "", image: WEGON, alt: "WEGON" },
    { age: "", image: Sonata, alt: "Sonata" },
  ];
   const scrollRef = useRef();
 
  const repeatedCollections = [...collections, ...collections];
  const controls = useAnimation();
  
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const offsetWidth = scrollRef.current?.offsetWidth || 0;
    const actualScroll = scrollWidth - offsetWidth;

    setTotalWidth(actualScroll);

    controls.start({
      x: [0, -scrollWidth / 2],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);
/**
 * @typedef {Object} Brand
 * @property {string} name
 * @property {string} logo      // /public path
 * @property {number} width     // intrinsic width for next/image
 * @property {number} height    // intrinsic height for next/image
 * @property {string} [href]    // optional link
 */

const BRANDS = [
  { name: "Honda",   logo: "/images/download__1_logo-removebg-preview.png",   width: 128, height: 80, href: "#" },
  { name: "Changan", logo: "/images/download_changan_1_-removebg-preview.png", width: 128, height: 80, href: "#" },
  { name: "Hyundai", logo: "/images/download11__1_-removebg-preview.png", width: 128, height: 80, href: "#" },
  { name: "Toyota",  logo: "/images/download1122__1_-removebg-preview.png",  width: 128, height: 80, href: "#" },
  { name: "Suzuki",  logo: "/images/downloadsk8877__1_-removebg-preview.png",  width: 128, height: 80, href: "#" },
];
  return (
    <div>
      
      <div className="min-h-screen bg-[#e9eaed]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center pt-10 text-black drop-shadow-md">
          From Budget to Luxury — Every Car for Every Need
        </h2>
        <h1 className="text-3xl sm:text-5xl font-bold text-center pb-10 text-orange-500 drop-shadow-md">
          Yaseen Rent a Car
        </h1>

        <div className="relative overflow-hidden" ref={scrollRef}>
          <motion.div animate={controls} className="flex gap-4 sm:gap-6 px-4 sm:px-10 py-4">
            {repeatedCollections.map((collection, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
              >
                <div className="flex flex-col">
                  {/* ✅ responsive box without overflow */}
                  <div className="relative w-full h-40 sm:h-52 md:h-60 lg:h-64 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={collection.image}
                      alt={collection.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-center mt-2">
                    {collection.age}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
         <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Browse By <span className="text-orange-500">Categories</span> You
        </h2>

        {/* Logo row */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
          {BRANDS.map((b) => {
            const content = (
              <>
                <div className="transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src={b.logo}
                    width={b.width}
                    height={b.height}
                    alt={`${b.name} logo`}
                    className="h-16 w-auto object-contain select-none"
                    priority
                  />
                </div>
                <p className="mt-2 text-sm font-semibold tracking-wide text-neutral-800 opacity-90">
                  {b.name.toUpperCase()}
                </p>
              </>
            );

            return (
              <div
                key={b.name}
                className="group flex flex-col items-center text-center"
              >
                {b.href ? (
                  <a href={b.href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
      </div>

    </div>
  );
};

export default Page;
