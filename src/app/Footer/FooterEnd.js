"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/images/yasirlogo.png";
import FooterLogo from "../assets/images/rent-a-car-pictures-4-1536x864.png";
import Container from "../Container";

const FooterEnd = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterLogo.src})` }}
    >
      {/* Overlay for readability on bright image */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative py-10">
        <Container>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1 - Logo and Social Icons */}
              <div className="flex flex-col items-start">
                <Image
                  src={Logo}
                  alt="Yaseen Rent A Car Logo"
                  width={220}
                  height={220}
                  className="w-40 sm:w-48 lg:w-56"
                  priority
                />

                <div className="flex space-x-3 mt-5">
                  
                <Link
                    href="https://www.facebook.com/share/19dejA5YMV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff3e00] text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <FaFacebookF size={18} />
                  </Link>

                  <Link
                    href="https://www.instagram.com/yaseenrentacar?igsh=eDA5N2Jub2J0dDI5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff3e00] text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <FaInstagram size={18} />
                  </Link>

                  <Link
                    href="https://wa.me/+923124378823"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff3e00] text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <FaWhatsapp size={18} />
                  </Link>
                </div>
              </div>

              {/* Column 2 - About Us */}
              <div>
                <h3 className="text-2xl sm:text-xl font-bold mb-4 text-[#ff3e00]">
                  About Us
                </h3>
                <ul className="space-y-2 text-gray-100 text-lg sm:text-base">
                  <li>
                    <Link href="/about" className="hover:text-[#ff3e00] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#ff3e00] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

             

              {/* Column 4 - Contact Details */}
              <div>
                <h3 className="text-2xl sm:text-xl font-bold mb-4 text-[#ff3e00]">
                  Contact Info
                </h3>
                <ul className="space-y-2 text-gray-100 text-sm sm:text-base">
                  <li className="font-semibold">📞 Contact: 0312 437 8823</li>
                  <li className="font-semibold">📧 yaseenrentcar90@gmail.com</li>
                  <li className="font-semibold">
                    📍 Johar Town , Lahore
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom line */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center">
              <p className="text-gray-200 text-sm">
                © {new Date().getFullYear()} Yaseen Rent A Car — All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterEnd;
