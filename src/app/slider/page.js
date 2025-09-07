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

  return (
    <div>
      <div className="min-h-screen bg-[#e9eaed]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center pt-10 text-black drop-shadow-md">
          From Budget to Luxury — Every Car for Every Need
        </h2>
        <h1 className="text-3xl sm:text-5xl font-bold text-center pb-10 text-[#ff3e00] drop-shadow-md">
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
      </div>
    </div>
  );
};

export default Page;
