"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from "../assets/images/itfaqlogo.png"
import FooterLogo from "../assets/images/painttypes1.jpg"
import Container from '../Container';

const FooterEnd = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${FooterLogo.src})`,
      }}
    >
      <div className="bg-[#B3CDE0]/50 py-6">
        <Container>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1 - Logo and Social Icons */}
              <div className="flex flex-col items-start mt-0 pt-0">
                <Image
                  src={Logo}
                  alt="Flowers of Jannat Logo"
                  width={200}
                  height={200}
                  className="mt-0 w-40 sm:w-48 lg:w-56"
                />

                <div className="flex space-x-4 mt-4">
                  <Link
                    href="https://facebook.com"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#b5241f] text-white hover:bg-[#FF0000] transition"
                  >
                    <FaFacebookF size={20} />
                  </Link>

                  <Link
                    href="https://www.instagram.com/thelittle_mumins/?igsh=Z2dhcWM2Nm9uanRs"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#b5241f] text-white hover:bg-[#FF0000] transition"
                  >
                    <FaInstagram size={20} />
                  </Link>

                  <Link
                    href="https://wa.me/923014005270"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#b5241f] text-white hover:bg-[#FF0000] transition"
                  >
                    <FaWhatsapp size={20} />
                  </Link>
                </div>
              </div>

              {/* Column 2 - About Us */}
              <div>
                <h3 className="text-2xl sm:text-xl font-script mb-4 text-[#b5241f]">About Us</h3>
                <ul className="space-y-2 text-black text-2xl  sm:text-base">
                  <li><Link href="/about" className="hover:text-[#b5241f]">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-[#b5241f]">Contact Us</Link></li>
                </ul>
              </div>

              {/* Column 3 - Information */}
              {/* <div>
                <h3 className="text-lg sm:text-xl font-script mb-4 text-[#b5241f]">Information</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><Link href="#" className="hover:text-gray-900">FAQs</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Refund Policy</Link></li>
                  <li><Link href="#" className="hover:text-gray-900">Terms & Conditions</Link></li>
                </ul>
              </div> */}

              {/* Column 4 - Contact Details */}
              <div>
                <h3 className="text-md sm:text-xl font-script mb-4 text-[#b5241f]">Contact Info</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="font-semibold">Contact No: 03004162585</li>
                  <li className="font-semibold">GMail:ittefaqpaints.cc345@gmai.com</li>
                  <li className="font-semibold">Address: Dhayya More Near Attock Pump Main GT Road Sheikhupura</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterEnd;
