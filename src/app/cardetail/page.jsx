"use client";
import Image from "next/image";
// ⬇️ Replace SteeringWheel with Car (or Gauge)
import { Shield, Headphones, BadgePercent, Coins, Car, RefreshCcw } from "lucide-react";

const featuresLeft = [
  {
    title: "Diverse Fleet",
    desc: "A wide range of cars for all needs.",
    icon: <Car className="w-5 h-5" />,        // ⬅️ changed
  },
  {
    title: "Affordable Rates",
    desc: "Competitive pricing with no hidden fees.",
    icon: <Coins className="w-5 h-5" />,
  },
  {
    title: "Flexible Rentals",
    desc: "Daily, weekly, and long-term options available.",
    icon: <RefreshCcw className="w-5 h-5" />,
  },
];

const featuresRight = [
  { title: "24/7 Support", desc: "Always available to assist you anytime.", icon: <Headphones className="w-5 h-5" /> },
  { title: "Safety First", desc: "All cars are inspected for your safety.", icon: <Shield className="w-5 h-5" /> },
  { title: "Loyalty Rewards", desc: "Earn exclusive discounts and special offers.", icon: <BadgePercent className="w-5 h-5" /> },
];

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="relative group rounded-xl bg-white/90 backdrop-blur px-5 py-5 shadow-sm border border-gray-100 transition hover:shadow-md">
      <div className="absolute -bottom-2 -left-2 h-6 w-6 rotate-45 bg-[#ff3e00] rounded-sm" />
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-md p-2 bg-gray-100 text-gray-700">{icon}</div>
        <div>
          <h4 className="text-gray-900 font-semibold">{title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[22ch]">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-rose-50 via-white to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <p className="text-sm font-semibold tracking-wider text-[#ff3e00] flex items-center justify-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-[#ff3e00]" /> WHY CHOOSE US
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">The Advantage of Renting with Us</h2>
          <p className="mt-3 text-gray-600">
            Enjoy hassle-free car rentals with flexible plans, affordable pricing, and a wide range of vehicles. Whether it’s a short
            trip or a long journey, we ensure comfort, reliability, and top-notch customer service every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 space-y-6">
            {featuresLeft.map((f) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>

          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-rose-100/60 blur-3xl" />
              <Image
                src="/images/toyota-landcruiser-2021-main-1631876903-removebg-preview.png2.png"
                width={820}
                height={420}
                alt="SUV car"
                priority
                className="h-auto w-full max-w-[820px] drop-shadow-2xl select-none"
              />
            </div>
          </div>

          <div className="order-3 space-y-6">
            {featuresRight.map((f) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
