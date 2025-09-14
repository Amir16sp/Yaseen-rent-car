"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FooterEnd from "../Footer/FooterEnd";
import Flowers from "../ShopNow/Flowers";
import Story from "../OurStory/Story";
import Circle from "../slider/page"
import bgImageDesktop from "../assets/images/blogyaseen.png";
import React from "react";
import BlogFeatureCard from "../about/blog";

// Animation config
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


const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1300); // delay in ms before animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute bottom-0 text-[#ff3e00] flex items-center justify-center inset-0 ">
          <motion.h1
            className="text-7xl font-bold flex"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >


          </motion.h1>
        </div>
      </div>

      {/* Mobile Background */}

      <BlogFeatureCard
        title="Discover Pakistan’s Rivers with Yaseen Rent a Car"
        excerpt="Introduction: Pakistan is a land of snowy peaks, flowing rivers, and endless beauty. These rivers aren’t just water—they’re the heartbeat of our culture and adventure.

             With Yaseen Rent a Car, your journey to Pakistan’s stunning rivers becomes comfortable, reliable, and unforgettable. Whether it’s a peaceful escape or an adventurous road trip, we make every mile as beautiful as the destination."
        href="/blog/rivers-of-pakistan"
        image="/images/best-river-in-pakistan-and-car.png"
        site="www.yaseenrentcar.com"
      />

      <BlogFeatureCard
        title="Discover Northern Areas and Its Culture with Yaseen Rent a Car"
        excerpt="Introduction: Pakistan is truly blessed with breathtaking natural wonders, and Northern Areas stands at the heart of it all. Surrounded by snow-capped peaks and rich traditions, Hunza attracts thousands of travelers each year who come to explore its stunning landscapes and vibrant culture.

           With Yaseen Rent a Car, your journey to Hunza becomes more than just travel—it’s an experience of comfort, adventure, and unforgettable memories."
        href="/blog/rivers-of-pakistan"
        image="/images/hanzayaseen.png"
        site="www.yaseenrentcar.com"
        overlayTitle = "Northern Areas OF PAKISTAN"
      />
      <BlogFeatureCard
        title="Discover Historical Areas  with Yaseen Rent a Car"
        excerpt="Introduction: Pakistan is home to some of the world’s most remarkable historical sites—from the ancient city of Mohenjo-Daro to the majestic forts of Lahore and Rohtas. Each landmark tells a story of rich culture, heritage, and timeless beauty.

With Yaseen Rent a Car, exploring these wonders becomes easy and comfortable. Whether you’re planning a family trip, a cultural tour, or a history-inspired road journey, we make sure your travel is as memorable as the destinations themselves."
        href="/blog/rivers-of-pakistan"
        image="/images/historical-places.png"
        site="www.yaseenrentcar.com"
        overlayTitle = " Historical Areas OF PAKISTAN"
      />
      <BlogFeatureCard
        title="Discover Best Restaurants In Pakistan   with Yaseen Rent a Car"
        excerpt="Introduction: From the flavorful streets of Lahore to the modern dining experiences of Karachi and Islamabad, Pakistan is a paradise for food lovers. Every city offers a unique taste of culture through its delicious cuisine and vibrant food spots.

With Yaseen Rent a Car, exploring Pakistan’s best restaurants becomes easy, comfortable, and stress-free. Drive with us, and let every meal be part of an unforgettable journey."
        href="/blog/rivers-of-pakistan"
        image="/images/best-restaurants-in-pakistan.png"
        site="www.yaseenrentcar.com"
        overlayTitle = " Best Restaurants In Pakistan"
      />
      <Flowers />
      <Circle />
      <FooterEnd />
    </>
  );
};

export default Page;
