"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FooterEnd from "../Footer/FooterEnd"
import bgImageDesktop from "../assets/images/agreementrecraft.png";
import bgImageMobile from "../assets/images/agreementrecraft.png";
import Flowers from "../ShopNow/Flowers";
import Freebies from "../freebies/freebies"
import Circle from "../slider/page"

const textAnimation = {
  initial: {
    opacity: 0,
    letterSpacing: "-0.5em",
    y: -100,
  },
  animate: {
    opacity: 1,
    letterSpacing: "0em",
    y: 0,
  },
  transition: {
    duration: 0.7,
    ease: [0.215, 0.61, 0.355, 1.0],
  },
};

const bookshopTitle = [

];

export default function Page() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[100vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute inset-0  flex items-center justify-center">
          <motion.h1
            className="text-7xl font-bold flex bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-400"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
            style={{ WebkitTextStroke: "0.2px #FBDFB0" }}
          >
            {bookshopTitle.map((item, idx) => (
              <span key={idx}>
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Mobile Background */}
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
            {bookshopTitle.map((item, idx) => (
              <span key={idx} style={{ WebkitTextStroke: "0.2px #FBDFB0" }}>
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>
<Freebies/>
      <Flowers />
      <Circle />
      <FooterEnd />
    </>
  );
}
