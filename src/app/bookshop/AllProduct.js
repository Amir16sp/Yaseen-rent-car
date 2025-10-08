"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Users, Gauge, Cog, ArrowRight } from "lucide-react";

// IMAGES
import LandCruiser from "../assets/images/Land-Cruiser-V8.jpg";
import Prado from "../assets/images/Prado.jpg";
import Fortuner from "../assets/images/fortuner-car.jpg";
import Hilux from "../assets/images/hilux.jpg";
import Civic from "../assets/images/Honda-Civic.jpg";
import City from "../assets/images/honda-city.jpg";
import Corolla from "../assets/images/toyota-corolla.jpg";
import Yaris from "../assets/images/Toyota-Yaris.jpg";
import BRV from "../assets/images/honda-brv.png";
import Sonata from "../assets/images/hyundai_sonata.png";
import KIA from "../assets/images/kia.png";
import Haval from "../assets/images/haval.png";
import Audi from "../assets/images/audi.png";
import WagonR from "../assets/images/suzuki-wagonr.png";
import Alto from "../assets/images/alto.png";
import Coaster from "../assets/images/coaster.png";
import Caben from "../assets/images/1grandcabin.png";
import Changan from "../assets/images/changan_karwan.png";
import MG from "../assets/images/MG-.webp";
import Rangerover from "../assets/images/rangrover.webp";
import BMW from "../assets/images/bmw-k.png";
import Mercedes from "../assets/images/marcadese.webp";
import RollsRoyce from "../assets/images/Rolls-Royce.webp";
import GWegon from "../assets/images/Marcedes-G-Wagon.png";
import Limo from "../assets/images/limo-ramy.png";

// ================== DATA ==================
const cars = [
  { id: 1, tag: "Toyota Car", name: "Land Cruiser V8", image: LandCruiser, fuel: "PB", seats: 7, topSpeed: "130 mph", transmission: "Automatic", price: 30000 },
  { id: 2, tag: "Toyota Car", name: "Prado", image: Prado, fuel: "PB", seats: 7, topSpeed: "120 mph", transmission: "Automatic", price: 18000 },
  { id: 3, tag: "Toyota Car", name: "Fortuner", image: Fortuner, fuel: "PB", seats: 7, topSpeed: "115 mph", transmission: "Automatic", price: 15000 },
  { id: 4, tag: "Toyota Car", name: "Hilux", image: Hilux, fuel: "PB", seats: 5, topSpeed: "110 mph", transmission: "Manual", price: 18000 },
  { id: 5, tag: "Honda Car", name: "Civic", image: Civic, fuel: "PB", seats: 5, topSpeed: "124 mph", transmission: "Automatic", price: 8000 },
  { id: 6, tag: "Honda Car", name: "City", image: City, fuel: "PB", seats: 5, topSpeed: "118 mph", transmission: "Automatic", price: 5000 },
  { id: 7, tag: "Toyota Car", name: "Corolla", image: Corolla, fuel: "PB", seats: 5, topSpeed: "121 mph", transmission: "Automatic", price: 5500 },
  { id: 8, tag: "Toyota Car", name: "Yaris", image: Yaris, fuel: "PB", seats: 5, topSpeed: "112 mph", transmission: "Automatic", price: 5000 },
  { id: 9, tag: "Honda Car", name: "BR-V", image: BRV, fuel: "PB", seats: 7, topSpeed: "105 mph", transmission: "CVT", price: 7000 },
  { id: 10, tag: "Hyundai Car", name: "Sonata", image: Sonata, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic", price: 10000 },
  { id: 11, tag: "KIA Car", name: "KIA Sedan", image: KIA, fuel: "PB", seats: 5, topSpeed: "120 mph", transmission: "Automatic", price: 10000 },
  { id: 12, tag: "Haval Car", name: "Haval", image: Haval, fuel: "PB", seats: 5, topSpeed: "120 mph", transmission: "Automatic", price: 13000 },
  { id: 13, tag: "Audi Car", name: "Audi", image: Audi, fuel: "PB", seats: 5, topSpeed: "150 mph", transmission: "Automatic", price: 30000 },
  { id: 14, tag: "Suzuki Car", name: "Wagon R", image: WagonR, fuel: "PB", seats: 5, topSpeed: "100 mph", transmission: "Manual", price: 4000 },
  { id: 15, tag: "Suzuki Car", name: "Alto", image: Alto, fuel: "PB", seats: 5, topSpeed: "90 mph", transmission: "Manual", price: 4500 },
  { id: 16, tag: "Toyota Van", name: "Coaster", image: Coaster, fuel: "Diesel", seats: 30, topSpeed: "80 mph", transmission: "Manual" },
  { id: 17, tag: "Toyota Van", name: "Grand Cabin", image: Caben, fuel: "Diesel", seats: 13, topSpeed: "90 mph", transmission: "Manual", price: 15000 },
  { id: 18, tag: "Changan Van", name: "Changan Karwan", image: Changan, fuel: "Diesel", seats: 7, topSpeed: "85 mph", transmission: "Manual", price: 7000 },
  { id: 19, tag: "MG Car", name: "MG", image: MG, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic", price: 10000 },
  { id: 20, tag: "Land Rover", name: "Range Rover", image: Rangerover, fuel: "PB", seats: 5, topSpeed: "155 mph", transmission: "Automatic" },
  { id: 21, tag: "BMW Car", name: "BMW", image: BMW, fuel: "PB", seats: 5, topSpeed: "160 mph", transmission: "Automatic" },
  { id: 22, tag: "Mercedes Car", name: "Mercedes", image: Mercedes, fuel: "PB", seats: 5, topSpeed: "150 mph", transmission: "Automatic" },
  { id: 23, tag: "Rolls Royce", name: "Rolls Royce", image: RollsRoyce, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic" },
  { id: 24, tag: "Mercedes Car", name: "G-Wagon", image: GWegon, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic" },
  { id: 25, tag: "Limousine", name: "Limousine", image: Limo, fuel: "PB", seats: 8, topSpeed: "110 mph", transmission: "Automatic" },
];

const formatPrice = (n) => (n ? `Rs ${Number(n).toLocaleString("en-PK")}` : "On Request");

function Spec({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#ff3e00]">{icon}</span>
      <span className="text-xs sm:text-sm font-semibold text-neutral-800">{label}</span>
    </div>
  );
}

function VehicleCard({ item, onAdd, priority = false }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/70 overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <div className="bg-white px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-contain select-none"
            priority={priority}
          />
        </div>
      </div>

      <div className="mx-4 my-5 border-t border-neutral-200/80 sm:mx-6" />

      {/* Content */}
      <div className="px-4 pb-5 sm:px-6 sm:pb-6">
        <p className="text-xs sm:text-sm text-neutral-500">{item.tag}</p>
        <h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">
          {item.name}
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-bold text-neutral-900">
            {formatPrice(item.price)}
          </span>
          {item.price && <span className="text-xs sm:text-sm text-neutral-500">/ day</span>}
        </div>

        <div className="mt-4 border-t border-neutral-200/80" />

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Spec icon={<Fuel className="w-5 h-5" />} label={item.fuel} />
          <Spec icon={<Users className="w-5 h-5" />} label={`${item.seats} seats`} />
          <Spec icon={<Gauge className="w-5 h-5" />} label={item.topSpeed} />
          <Spec icon={<Cog className="w-5 h-5" />} label={item.transmission} />
        </div>

        {/* Actions */}
        {/* <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
          <button
            onClick={() => onAdd?.(item)}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            RENT NOW
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ff3e00]" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default function AllProduct() {
  const { addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(6); // mobile pe 6 accha lagta hai

  const visibleCars = cars.slice(0, visibleCount);

  // normalize & send to cart so "name" ALWAYS shows
  const handleAddToCart = (car) => {
    addToCart({
      id: car.id,
      // name compatibility
      name: car.name,
      title: car.name,
      // basic pricing/qty
      price: car.price ?? 0,
      qty: 1,
      // optional fields
      tag: car.tag,
      fuel: car.fuel,
      seats: car.seats,
      topSpeed: car.topSpeed,
      transmission: car.transmission,
      // next/image imported asset -> prefer .src if present
      image: (car.image && (car.image.src ?? car.image)) || null,
    });
  };

  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-14">
      <section className="text-center">
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-neutral-700">
          <span className="h-1.5 w-5 rounded-full bg-[#ff3e00]" />
          <span>OUR VEHICLE FLEET</span>
        </div>

        <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Best Choice Of <span className="text-[#ff3e00]">Cars For</span> You
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12"
        >
          {/* 1 → 2 → 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {visibleCars.map((item, idx) => (
              <VehicleCard
                key={item.id}
                item={item}
                onAdd={handleAddToCart}
                priority={idx < 2} // first 2 images priority for LCP
              />
            ))}
          </div>
        </motion.div>

        {visibleCount < cars.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ff3e00] text-white font-semibold hover:bg-orange-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
