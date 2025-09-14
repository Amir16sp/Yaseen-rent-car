"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function AnimatedHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/images/BBB7Oqb.jpg",
      title: " One Way Drop-off Car",
      subtitle: "Rental",
      description:
        "Going city to city? Book your ride without the hassle of a return. Flexible one-way drop services designed for your convenience.",
      badge: "No Return? No Problem.",
    },
    {
      id: 1,
      image: "/images/Land_Cruiser_300_-_PNG.png",
      title: "Premium City Tours",
      subtitle: "Experience",
      description:
        "Discover the beauty of urban landscapes with our premium vehicle fleet. Comfortable rides for sightseeing and business trips.",
      badge: "Luxury Fleet Available.",
    },
    {
      id: 2,
      image: "/images/2.png",
      title: "Airport Transfer",
      subtitle: "Service",
      description:
        "Reliable and punctual airport transfers with professional drivers. Start your journey stress-free with our premium service.",
      badge: "24/7 Available Service.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e9eaed]">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeSlide
                ? "opacity-100 translate-x-0"
                : index < activeSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
          >
            <img
              src={slide.image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Badge */}
        <div className="text-center pt-6 sm:pt-10 mb-6 sm:mb-10 px-4">
          <div
            key={`badge-${activeSlide}`}
            className="inline-flex items-center text-white sm:text-base animate-fade-in-slide"
          >
            <Star className="w-6 h-6 mr-2 text-[#ff3e00]" />
            <span>{slides[activeSlide].badge}</span>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              key={`title-${activeSlide}`}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-in-left"
            >
              {slides[activeSlide].title}
              <br />
              <span className="text-[#ff3e00]">{slides[activeSlide].subtitle}</span>
            </h1>

            <p
              key={`desc-${activeSlide}`}
              className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-in-right"
            >
              {slides[activeSlide].description}
            </p>

            {/* CTA */}
            <div className="mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/bookshop" prefetch>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff3e00] px-8 py-4 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Book A Rental <FaArrowRight />
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeSlide
                      ? "bg-[#ff3e00] scale-125"
                      : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress */}
            <div className="w-full max-w-xs mx-auto h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#ff3e00] rounded-full transition-all duration-300 ease-linear"
                style={{
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-slide {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-slide { animation: fade-in-slide 0.6s ease-out forwards; }

        @media (max-width: 640px) {
          .animate-slide-in-left,
          .animate-slide-in-right { animation-duration: 0.6s; }
        }
      `}</style>
    </div>
  );
}
