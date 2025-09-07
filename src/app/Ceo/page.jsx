// app/page.tsx (Next.js 13+ with App Router)
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-gray-900/80 via-gray-700/60 to-transparent
">
      {/* Background Image */}
      <Image
        src="/images/5584425-toyota-wallpapers-min.jpg" // put your uploaded image in /public folder
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <span className="text-6xl font-light mb-6">❝</span>

        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Meet M Yaseen Anjum, CEO of Yaeen Ren A car — a visionary leader reshaping
          car rentals in Pakistan. With a focus on trust, convenience, and
          quality service, he’s making every journey smoother and more reliable
          for travelers nationwide.
        </p>

        {/* Stars */}
        <div className="flex mt-6 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.15 3.546a1 1 0 00.95.69h3.725c.969 0 1.371 1.24.588 1.81l-3.016 2.19a1 1 0 00-.364 1.118l1.15 3.546c.3.921-.755 1.688-1.54 1.118l-3.016-2.19a1 1 0 00-1.176 0l-3.016 2.19c-.784.57-1.838-.197-1.539-1.118l1.15-3.546a1 1 0 00-.364-1.118L2.636 8.973c-.783-.57-.38-1.81.588-1.81h3.725a1 1 0 00.95-.69l1.15-3.546z" />
              </svg>
            ))}
        </div>

        {/* Profile */}
   <div className="flex flex-col items-center">
  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
    <Image
      src="/images/WhatsApp Image 2025-09-07 at 14.51.18_d5c8efcc.jpg"
      alt="Yaseen Anjum"
      width={96}
      height={96}
      className="object-cover"
    />
  </div>
  <h3 className="mt-3 font-semibold">Yaseen Anjum</h3>
</div>

      </div>
    </div>
  );
}
