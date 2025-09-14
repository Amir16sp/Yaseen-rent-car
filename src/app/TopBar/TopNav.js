"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Logo from "../assets/images/yasirlogo.png";

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const pathname = usePathname();
  const close = () => setMobileOpen(false);

  // body scroll lock + ESC to close
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onEsc = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [mobileOpen]);

  const items = [
    { name: "BOOK NOW", link: "/bookshop" },
    { name: "About", link: "/age" },
    { name: "Blog", link: "/about" },
    // { name: "Services", subItems: [{ name: "Airport", link: "/s/airport" }, { name: "City", link: "/s/city" }]},
    { name: "Rental Agreement", link: "/freebies" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const isActive = (href) => href && pathname?.startsWith(href);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="mx-auto flex h-20  items-center justify-between px-3 lg:h-24 lg:px-10">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={130} height={55} priority />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-6 text-white">
            {items.map((item) =>
              item.subItems ? (
                <li key={item.name} className="relative group">
                  <button className="flex items-center gap-1 hover:underline">
                    {item.name} <span className="text-xs">▼</span>
                  </button>
                  <ul className="invisible absolute left-0 top-full z-50 w-48 rounded-md bg-[#ff3e00] p-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.subItems.map((s) => (
                      <li key={s.name}>
                        <Link
                          href={s.link}
                          className="block rounded px-3 py-2 text-white hover:bg-[#ff3e00]"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={`font-medium hover:underline ${
                      isActive(item.link) ? "text-[#ff3e00]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-3xl text-[#ff3e00]"
          aria-label="Open menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black"
              onClick={close}
            />
            {/* panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 z-[70] h-screen w-72 sm:w-80 rounded-l-2xl bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Image src={Logo} alt="Logo" width={100} height={44} />
                <button
                  onClick={close}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold text-white hover:bg-red-700"
                  aria-label="Close menu"
                >
                  X
                </button>
              </div>

              <nav className="p-2">
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item.name}>
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() =>
                              setExpanded((p) => (p === item.name ? null : item.name))
                            }
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-slate-800 hover:bg-slate-50"
                          >
                            <span>{item.name}</span>
                            {expanded === item.name ? (
                              <IoIosArrowUp className="text-slate-500" />
                            ) : (
                              <IoIosArrowDown className="text-slate-500" />
                            )}
                          </button>
                          <AnimatePresence initial={false}>
                            {expanded === item.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-2 overflow-hidden rounded-lg bg-slate-50"
                              >
                                {item.subItems.map((s) => (
                                  <li key={s.name}>
                                    <Link
                                      href={s.link}
                                      onClick={close}
                                      className={`block px-5 py-2 text-sm hover:bg-white ${
                                        isActive(s.link) ? "text-[#ff3e00] font-semibold" : "text-slate-700"
                                      }`}
                                    >
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={close}
                          className={`block rounded-lg px-4 py-3 font-medium transition ${
                            isActive(item.link)
                              ? "bg-slate-50 text-[#ff3e00]"
                              : "text-slate-800 hover:bg-slate-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
