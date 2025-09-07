// app/rent-a-car/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const metadata = {
  title: "Rent a Car Service with Driver | Yaseen",
  description:
    "Expert drivers, well-maintained cars, and quick service across Lahore & Islamabad.",
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export default function RentACarPage() {
  return (
    <main className="min-h-screen bg-[#e9eaed]">
      {/* Hero */}
      <section className="w-full bg-[#e9eaed] py-12 sm:py-14 md:py-16 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            className="text-[30px] leading-tight sm:text-4xl md:text-6xl font-bold text-gray-900"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp(0)}
          >
            Rent a Car in Lahore With Yaseen Car!
          </motion.h1>

          <motion.p
            className="mt-3 text-2xl sm:text-3xl font-semibold text-[#ff3e00]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0.1)}
          >
            Get the best rent a car deal for your next trip
          </motion.p>

          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-black leading-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0.2)}
          >
            If you want the best{" "}
            <span className="font-semibold italic">rent a car in Lahore</span>{" "}
            Pakistan and searching best{" "}
            <span className="font-semibold italic">rent a car near me</span>. Your
            search ends here, as we provide the best car hire for travel and the
            best driver to service you who is familiar with all the routes of
            Lahore Pakistan, and the best food available in Lahore and all around
            Pakistan. Whether your business trip, arrival or departure to Airport,
            or a wedding ceremony Yaseen cars will provide you with the most
            competitive and quality
            <span className="font-semibold italic">car rent services</span>.
          </motion.p>
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="w-full bg-[#e9eaed] py-10 sm:py-14 md:py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0)}
          >
            Our Corporate Profile
          </motion.h2>

          <motion.ul
            className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 text-gray-700 leading-8 text-base sm:text-lg md:text-xl list-disc list-inside"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.15)}
          >
            <li>
              Yaseen Car is operating in the vehicle rental industry of Pakistan.
              Yaseen <span className="font-semibold italic">rent a car</span> is a
              rental car supplier positioned to serve the commercial and leisure
              segments of the travel industry of Pakistan. The company is a
              vehicle rental operator in all areas of Pakistan. Yaseen cars is the
              leading Car rental for the last 25 years in the transport industry
              of Pakistan.
            </li>

            <li>
              We are a customer-focused organization and consider this for the
              success of our organization we give care to our customers through
              our expert team members and provide them the service more than their
              expectation.
            </li>

            <li>
              We invest at our people training and development so that our
              customers get the satisfactory car rent service from our trained
              team members.
            </li>
          </motion.ul>
        </div>
      </section>

      {/* Service with Driver */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(0)}
        >
          <div className="font-bold tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl">
            Rent a Car Service with driver
          </div>
          <div className="mt-4 inline-block h-0.5 w-32 sm:w-40 bg-[#c8a74a]" />
        </motion.div>

        <div className="mt-8 md:mt-10 grid items-center gap-8 sm:gap-10 md:grid-cols-2">
          {/* Left copy */}
          <motion.div
            className="text-black text-base sm:text-lg md:text-xl leading-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0.1)}
          >
            <p className="mb-5">
              Yaseen <span className="font-semibold">rent a car Lahore</span> is
              committed to providing reliable{" "}
              <span className="font-semibold">car rental service</span> with
              expert drivers. We offer well-maintained, air-conditioned cars and
              professional chauffeurs who know routes across Pakistan—plus the
              best places to stay and eat—so your journey stays smooth.
            </p>
            <p className="mb-5">
              Our goal is to deliver the best{" "}
              <span className="font-semibold">car rental</span> experience for
              every client. To ensure punctual service, we operate two offices in
              Lahore and one in Islamabad. In Lahore, you’ll find us in DHA Phase
              04 and near Allama Iqbal International Airport.
            </p>

            <ul className="mt-6 space-y-3 text-lg sm:text-xl">
              {[
                "Clean, well-conditioned fleet",
                "Skilled, route-aware drivers",
                "Quick response — within ~20 minutes (city limits)",
                "Offices in DHA & near Lahore Airport",
              ].map((txt, i) => (
                <motion.li
                  key={txt}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff3e00]" />
                  <span>{txt}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(0.2)}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-md"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/Rent-a-Car-Lahore-768x415.jpg"
                alt="Yaseen Rent a Car"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
