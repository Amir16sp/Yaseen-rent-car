"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";

// Car images
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

// Icons
import { Fuel, Users, Gauge, Cog, ArrowRight, ShoppingCart } from "lucide-react";

// -------- DATA (with price) --------
const cars = [
  { id: 1, tag: "Toyota Car", name: "Land Cruiser V8", image: LandCruiser, fuel: "PB", seats: 7, topSpeed: "130 mph", transmission: "Automatic", price: 35000 },
  { id: 2, tag: "Toyota Car", name: "Prado", image: Prado, fuel: "PB", seats: 7, topSpeed: "120 mph", transmission: "Automatic", price: 20000 },
  { id: 3, tag: "Toyota Car", name: "Fortuner", image: Fortuner, fuel: "PB", seats: 7, topSpeed: "115 mph", transmission: "Automatic", price: 18000 },
  { id: 4, tag: "Toyota Car", name: "Hilux", image: Hilux, fuel: "PB", seats: 5, topSpeed: "110 mph", transmission: "Manual", price: 20000 },
  { id: 5, tag: "Honda Car", name: "Civic", image: Civic, fuel: "PB", seats: 5, topSpeed: "124 mph", transmission: "Automatic", price: 10000 },
  { id: 6, tag: "Honda Car", name: "City", image: City, fuel: "PB", seats: 5, topSpeed: "118 mph", transmission: "Automatic", price: 6000 },
  { id: 7, tag: "Toyota Car", name: "Corolla", image: Corolla, fuel: "PB", seats: 5, topSpeed: "121 mph", transmission: "Automatic", price: 6500 },
  { id: 8, tag: "Toyota Car", name: "Yaris", image: Yaris, fuel: "PB", seats: 5, topSpeed: "112 mph", transmission: "Automatic", price: 6000 },
  { id: 9, tag: "Honda Car", name: "BR-V", image: BRV, fuel: "PB", seats: 7, topSpeed: "105 mph", transmission: "CVT", price: 8000 },
  { id: 10, tag: "Hyundai Car", name: "Sonata", image: Sonata, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic", price: 10000 },
  { id: 11, tag: "KIA Car", name: "KIA Sedan", image: KIA, fuel: "PB", seats: 5, topSpeed: "120 mph", transmission: "Automatic", price: 12000 },
  { id: 12, tag: "Haval Car", name: "Haval", image: Haval, fuel: "PB", seats: 5, topSpeed: "120 mph", transmission: "Automatic", price: 15000 },
  { id: 13, tag: "Audi Car", name: "Audi", image: Audi, fuel: "PB", seats: 5, topSpeed: "150 mph", transmission: "Automatic", price: 35000 },
  { id: 14, tag: "Suzuki Car", name: "Wagon R", image: WagonR, fuel: "PB", seats: 5, topSpeed: "100 mph", transmission: "Manual", price: 5000 },
  { id: 15, tag: "Suzuki Car", name: "Alto", image: Alto, fuel: "PB", seats: 5, topSpeed: "90 mph", transmission: "Manual", price: 5000 },
  { id: 16, tag: "Toyota Van", name: "Coaster", image: Coaster, fuel: "Diesel", seats: 30, topSpeed: "80 mph", transmission: "Manual" },
  { id: 17, tag: "Toyota Van", name: "Grand Cabin", image: Caben, fuel: "Diesel", seats: 13, topSpeed: "90 mph", transmission: "Manual", price: 18000 },
  { id: 18, tag: "Changan Van", name: "Changan Karwan", image: Changan, fuel: "Diesel", seats: 7, topSpeed: "85 mph", transmission: "Manual", price: 8000 },
  { id: 19, tag: "MG Car", name: "MG", image: MG, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic", price: 12000 },
  { id: 20, tag: "Land Rover", name: "Range Rover", image: Rangerover, fuel: "PB", seats: 5, topSpeed: "155 mph", transmission: "Automatic" },
  { id: 21, tag: "BMW Car", name: "BMW", image: BMW, fuel: "PB", seats: 5, topSpeed: "160 mph", transmission: "Automatic" },
  { id: 22, tag: "Mercedes Car", name: "Mercedes", image: Mercedes, fuel: "PB", seats: 5, topSpeed: "150 mph", transmission: "Automatic" },
  { id: 23, tag: "Rolls Royce", name: "Rolls Royce", image: RollsRoyce, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic" },
  { id: 24, tag: "Mercedes Car", name: "G-Wagon", image: GWegon, fuel: "PB", seats: 5, topSpeed: "130 mph", transmission: "Automatic" },
  { id: 25, tag: "Limousine", name: "Limousine", image: Limo, fuel: "PB", seats: 8, topSpeed: "110 mph", transmission: "Automatic" },
];

// -------- UTILS --------
const formatPrice = (n) => `Rs ${Number(n).toLocaleString("en-PK")}`;

// -------- UI bits --------
function Spec({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
        {icon}
      </span>
      <span className="text-sm md:text-base font-semibold text-neutral-800">
        {label}
      </span>
    </div>
  );
}

function VehicleCard({ item, onAdd }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/70 overflow-hidden hover:shadow-md transition">
      <div className="bg-white px-6 pt-8">
        <div className="relative mx-auto h-56 md:h-64 w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain select-none"
            priority
          />
        </div>
      </div>

      <div className="mx-6 my-6 border-t border-neutral-200/80" />

      <div className="px-6 pb-6">
        <p className="text-sm text-neutral-500">{item.tag}</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">
          {item.name}
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-neutral-900">
            {formatPrice(item.price)}
          </span>
          <span className="text-sm text-neutral-500">/ day</span>
        </div>

        <div className="mt-5 border-t border-neutral-200/80" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <Spec icon={<Fuel className="w-5 h-5" />} label={item.fuel} />
          <Spec icon={<Users className="w-5 h-5" />} label={`${item.seats} seats`} />
          <Spec icon={<Gauge className="w-5 h-5" />} label={item.topSpeed} />
          <Spec icon={<Cog className="w-5 h-5" />} label={item.transmission} />
        </div>

        <div className="mt-6 flex items-center">
          <button
            onClick={() => onAdd?.(item)}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            RENT NOW
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent" />
          </button>
          <button
            onClick={() => onAdd?.(item)}
            className="ml-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

// -------- Section --------
export default function AllProduct() {
  const { addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleCars = cars.slice(0, visibleCount);

  return (
    <div className="bg-white p-20">
      <section className="py-10 text-center">
        <div className="flex items-center justify-center gap-3 text-sm font-semibold text-neutral-700">
          <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600" />
          <span>OUR VEHICLE FLEET</span>
        </div>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Best Choice Of{" "}
          <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Cars For
          </span>{" "}
          You
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleCars.map((item) => (
              <VehicleCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </motion.div>

        {visibleCount < cars.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 3)}
              className="px-6 py-2 rounded-md bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
