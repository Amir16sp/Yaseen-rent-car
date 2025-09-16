// app/page.tsx (Next.js 13+ with App Router)
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/images/5584425-toyota-wallpapers-min.jpg" // image in /public/images
        alt="Background"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Dark gradient overlay (same as your bg-gradient classes) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-700/60 to-transparent" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <span className="text-6xl font-light mb-6">❝</span>

        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Meet M Yaseen Anjum, CEO of Yaseen Rent A car — a visionary leader reshaping
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

        {/* Profiles: FLEX container */}

<div className="mt-6 flex flex-row items-center justify-center gap-6 flex-wrap">
  {/* Profile 1 */}
  <div className="flex flex-col items-center">
   <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white">
    <Image
      src="/images/driver.jpg"
      alt="Yaseen Anjum"
      fill
      className="object-cover scale-[1.3] object-[60%_30]" 
      /* object-[50%_25%] => center x, thoda upar y (face focus) */
    />
  </div>
    <h3 className="mt-2 text-sm sm:text-base font-semibold">CEO: Yaseen Anjum</h3>
  </div>

  {/* Profile 2 */}
<div className="flex flex-col items-center">
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white">
    <Image
      src="/images/masair.jpg"
      alt="Yaseen Anjum"
      fill
      className="object-cover scale-[1.3] object-[60%_30]" 
      /* object-[50%_25%] => center x, thoda upar y (face focus) */
    />
  </div>
  <h3 className="mt-2 text-sm sm:text-base font-semibold">CO CEO: Yasir Yaseen</h3>
</div>

</div>


      </div>
    </div>
  );
}
