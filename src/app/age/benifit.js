"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Cardetail from "../cardetail/page.jsx"
export default function Benefit() {
  const heading = "Explore Our Services";

  const services = [
    {
      title: "Airport Transport",
      desc:
        "Experience seamless airport transfers with Royal Motors' reliable car rental service, ensuring timely pickups and drop-offs.",
      imgSrc: "/images/airport.jpg",
      href: "/services/airport-transport",
    },
    {
      title: "Corporate Travels",
      desc:
        "Reliable and professional car rental services tailored for your corporate travel, meetings, and tours needs.",
      imgSrc: "/images/corporative.jpg", // make sure file exists in /public/images
      href: "/services/corporate-travels",
    },
    {
      title: "Special Events",
      desc:
        "Rent luxury cars for special events with Royal Motors, ensuring style, comfort, and reliability on your big day.",
      imgSrc: "/images/specialwedding.jpg",
      href: "/services/special-events",
      highlight: true,
    },
    {
      title: "Intercity Rides",
      desc:
        "Reliable intercity car rental service for safe and comfortable travel across cities of Pakistan with Royal Motors!",
      imgSrc: "/images/intercity.jpg",
      href: "/services/outstation-trips",
    },
    {
      title: "City to City Rides",
      desc:
        "Affordable city rides for errands, meetings, and daily commute with flexible hourly packages.",
      imgSrc: "/images/citytocity.jpg",
      href: "/services/city-rides",
    },
    {
      title: "Luxury Limousine",
      desc:
        "Experience Elegance and comfort with our luxury limousine service, designed for your most memorable journeys.",
      imgSrc: "/images/luxury.jpg",
      href: "/services/chauffeur-service",
    },
    {
      title: "Bullet-Proof Cars",
      desc:
        "Experience unmatched safety and luxury with our bulletproof car rental service, designed for secure travel across Pakistan.",
      imgSrc: "/images/bulletproof.jpg",
      href: "/services/chauffeur-service",
    },
   {
  title: "Professional Bouncers",
  desc:
    "Ensure maximum safety at your events with our highly trained bouncers, providing reliable protection and a secure environment across Pakistan.",
  imgSrc: "/images/bouncer.jpg",
  href: "/services/bouncer-service",
},

   {
  title: "Daily & Monthly Rentals",
  desc:
    "Flexible rental plans available on daily, weekly, and monthly basis to suit your personal and business needs.",
  imgSrc: "/images/mothlycar.jpg",
  href: "/services/daily-monthly-rentals",
}

  ];

  return (
    <>
    <Cardetail/>
     <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
          {heading}
        </h2>

        {/* 1 → 2 → 3 columns */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, idx) => (
            <article
              key={`${s.title}-${idx}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                s.highlight ? "border-2 border-[#ff3e00]" : "border border-slate-200"
              }`}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={s.imgSrc}
                  alt={s.title}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                  priority={idx === 0}
                />
              </div>

              <div className="flex grow flex-col p-6 md:p-7 lg:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
                  {s.desc}
                </p>

                <div className="mt-8 sm:mt-10 flex items-center gap-4 md:gap-5">
                  <Link href={s.href ?? "#"} prefetch>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#ff3e00] hover:bg-orange-700 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base md:text-lg inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <span className="flex items-center gap-2">
                        Book A Rental <FaArrowRight />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section></>
   
  );
}
