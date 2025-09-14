"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function BlogFeatureCard({
  title,
  excerpt,
  href = "/bookshop",
  image,                          // e.g. "/images/rivers.jpg" from /public
  site = "www.yaseenrentcars.com",
  overlayTitle = "RIVERS OF\nPAKISTAN",
  reverse = false,                // set true for image on right
}) {
  const [line1, line2] = overlayTitle.split("\n");

  return (
    <article className="w-full">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[minmax(0,520px)_1fr] p-6 md:p-12">
        {/* Image */}
        <div className={`relative overflow-hidden rounded-xl bg-gray-100 shadow-sm ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="relative aspect-[16/9] md:aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width:768px) 520px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay labels */}
          <div className="absolute top-1">
            <div className="bg-white/30 px-4 py-3">
              <p className="text-3xl font-extrabold tracking-wide leading-none md:text-4xl">
                {line1}<br />{line2}
              </p>
            </div>
            <div className="mt-3 inline-block bg-white/95 px-4 py-2">
              <p className="text-sm font-medium tracking-wide text-gray-700">
                {site}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center ${reverse ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">{title}</h2>
          <p className="mt-4 max-w-prose text-base leading-7 text-gray-600">{excerpt}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={href} prefetch>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-4 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Book A Rental <FaArrowRight />
                </span>
              </motion.button>
            </Link>
          </div>

          <hr className="mt-8 border-gray-200" />
        </div>
      </div>
    </article>
  );
}
