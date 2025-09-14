"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Footer from "../Footer/FooterEnd";
import bgImageDesktop from "../assets/images/yaseenphon.png";
import bgImageMobile from "../assets/images/yaseenphon.png";
import Flowers from "../ShopNow/Flowers";
import ContactUs from "./contactus";
import Circle from "../slider/page";

const textAnimation = {
  initial: { opacity: 0, letterSpacing: "-0.5em", y: -100 },
  animate: { opacity: 1, letterSpacing: "0em", y: 0 },
  transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
};

const FourYearsTitle = [
  { char: "C", color: "text-white-300" },
  { char: "o", color: "text-white-300" },
  { char: "n", color: "text-white-300" },
  { char: "t", color: "text-white-300" },
  { char: "a", color: "text-white-300" },
  { char: "c", color: "text-white-300" },
  { char: "t", color: "text-white-300" },
];

const Contact = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Background */}
      <div className="relative hidden md:block h-[80vh]">
        <Image
          src={bgImageDesktop}
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1280px) 100vw, 100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-7xl font-bold flex text-[#ff3e00]"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
            {FourYearsTitle.map((item, index) => (
              <span
                key={index}
                className={`${item.color} text-7xl`}
                style={{ WebkitTextStroke: "0.2px #FBDFB0" }}
              >
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Mobile Background */}
      <div className="relative block md:hidden h-[50vh]">
        <Image
          src={bgImageMobile}
          alt="Contact background mobile"
          fill
          className="object-cover object-center"
          sizes="100vw"
          // priority hata sakte hain agar above-the-fold na ho
        />
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-[#ff3e00] text-center"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
            {FourYearsTitle.map((item, index) => (
              <span
                key={index}
                className={`${item.color} text-4xl`}
                style={{ WebkitTextStroke: "0.2px #FBDFB0" }}
              >
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      <ContactUs />
      <Flowers />
      <Circle />
      <Footer />
    </>
  );
};

export default Contact;
