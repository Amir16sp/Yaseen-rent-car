"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

// Images
import Once from "../assets/images/heat-proof-paint-for-roof-befor-after-heatproof-in.png";
import Mekael from "../assets/images/water-proof-paint-for-wall-befor-after-water-proof.png";
import Your from "../assets/images/fire-proof-paint-for-wall-befor-after-fire-proof-i.png";
import Jannah from "../assets/images/smoke.png";
import Maza from "../assets/images/sound--proof--paint-for-home-befor-and-after-in-pa.png";
import ADAY from "../assets/images/stain-free--paint-for-home-befor-and-after-in-paki.png";
import OUR from "../assets/images/weather-sheild-coating---paint-for-home-befor-and-.png";


const Page = () => {
  const collections = [
    { age: "Heat Proof", image: Once, alt: "Once " },
    { age: "Water Proof", image: Mekael, alt: "Mekael" },
    { age: "Cracks Proof", image: Your, alt: "Your " },
    { age: "Fire Proof", image: Jannah, alt: "Jannah" },
    { age: "Sound Proof", image: Maza, alt: "Maza " },
    { age: "Stain Free", image: ADAY, alt: "ADAY" },
    { age: "Weather Sheild", image: OUR, alt: "OUR" },
  ];

  const repeatedCollections = [...collections, ...collections];
  const controls = useAnimation();
  const scrollRef = useRef();
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
      <div className="h-[85vh] bg-white ">
        <h2 className="text-3xl font-bold text-center pt-20  text-black drop-shadow-md">
         ITTEFAQ CONSTRUCTION CHEMICALS & PAINTS
        </h2>
<h1 className="text-5xl font-bold text-center  pb-20 text-blue-950 drop-shadow-md">7 in 1 Coating</h1>
        <div className="relative overflow-hidden" ref={scrollRef}>
          <motion.div animate={controls} className="flex gap-1 px-10 py-4">
            {repeatedCollections.map((collection, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[400px]"
              >
                <div className="flex flex-col">
                  <div className="rounded-full p-1 mb-3 overflow-hidden w-48 h-48 mx-auto relative flex items-center justify-center bg-white shadow-md">
                    <Image
                      src={collection.image}
                      alt={collection.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-xl font-medium text-center ">
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
