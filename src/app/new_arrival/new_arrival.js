// app/rent-a-car/page.tsx
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
export const metadata = {
  title: "Rent a Car Service with Driver | Askari",
  description:
    "Expert drivers, well-maintained cars, and quick service across Lahore & Islamabad.",
};

export default function RentACarPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full bg-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <div className="text-4xl sm:text-3xl md:text-5xl font-semibold text-gray-900">
            Rent a Car in Lahore With Yaseen  Car!
          </div>

          {/* Subheading */}
          <p className="mt-3 text-2xl font-medium text-[#ff3e00]">
            Get the best rent a car deal for your next trip
          </p>

          {/* Body text */}
          <p className="mt-6 text-black leading-7 text-xl">
            If you want the best{" "}
            <span className="font-semibold italic">rent a car in Lahore</span>{" "}
            Pakistan and searching best{" "}
            <span className="font-semibold italic">rent a car near me</span>. Your
            search ends here, as we provide the best car hire for travel and the
            best driver to service you who is familiar with all the routes of
            Lahore Pakistan, and the best food available in Lahore and all around
            Pakistan. Whether your business trip, arrival or departure to Airport,
            or a wedding ceremony Yaseen cars will provide you with the most
            competitive and quality{" "}
            <span className="font-semibold italic">car rent services</span>.
          </p>
        </div>
      </section>
      <section className="mx-auto  max-w-8xl px-14 py-16 md:py-20">
        {/* Heading */}
        <div className="text-6xl text-center md:text-left">
          <div className="font-semibold tracking-tight text-gray-900 md:text-4xl">
            Rent a Car Service with driver
          </div>

          {/* thin gold rule like the screenshot */}
          <div className="mt-4 inline-block h-0.5 w-40 bg-[#c8a74a]" />
        </div>

        {/* Content */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          {/* Left: Copy */}
          <div className="text-black text-md leading-7">
            <p className="mb-4">
              Yaseen <span className="font-semibold">rent a car Lahore</span> is
              committed to providing reliable{" "}
              <span className="font-semibold">car rental service</span> with
              expert drivers. We offer well-maintained, air-conditioned cars and
              professional chauffeurs who know routes across Pakistan—plus the
              best places to stay and eat—so your journey stays smooth.
            </p>
            <p className="mb-4">
              Our goal is to deliver the best{" "}
              <span className="font-semibold">car rental</span> experience for
              every client. To ensure punctual service, we operate two offices
              in Lahore and one in Islamabad. In Lahore, you’ll find us in DHA
              Phase 04 and near Allama Iqbal International Airport.
            </p>

            {/* quick highlights */}
            <ul className="mt-6 space-y-2">
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff3e00]" />
                <span>Clean, well-conditioned fleet</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff3e00]" />
                <span>Skilled, route-aware drivers</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff3e00]" />
                <span>Quick response — within ~20 minutes (city limits)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff3e00]" />
                <span>Offices in DHA & near Lahore Airport</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/bookshop">
                <button className="bg-[#ff3e00] hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center justify-center transition-all transform hover:scale-105 animate-fade-in-up">
                  <div className="flex items-center gap-2">
                    Book A Rental
                    <FaArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>


          {/* Right: Image on map */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/Rent-a-Car-Lahore-768x415.jpg"
                alt="Askari Rent a Car"
                width={900}
                height={600}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16 px-4">
        <div className=" w-full">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900">
            Our Corporate Profile
          </h2>

          {/* Content */}
          <ul className="mt-8 space-y-6 text-gray-700 leading-7 text-md list-disc list-inside">
            <li>
              Askari Car is operating in the vehicle rental industry of Pakistan.
              Askari <span className="font-semibold italic">rent a car</span> is a
              rental car supplier positioned to serve the commercial and leisure
              segments of the travel industry of Pakistan. The company is a
              vehicle rental operator in all areas of Pakistan. Askari cars is the
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
          </ul>
        </div>
      </section>

    </main>
  );
}
