"use client";

import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "@/app/components/Dropdown";
import { IoHomeOutline } from "react-icons/io5";
import { ShoppingCart, Info } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // FIXED ERROR 1: flashLine state declare kora hoyeche
  const [flashLine, setFlashLine] = useState(false);

  // Flash line logic control
  const hasScrolledOnce = useRef(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    let timeout;

    const handleScroll = () => {
      const offset = window.scrollY;

      // Background logic
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // FIXED ERROR 2: Flash line logic properly handled inside useEffect
      if (offset > 10 && !hasScrolledOnce.current) {
        hasScrolledOnce.current = true;
        setFlashLine(true);
        timeout = setTimeout(() => setFlashLine(false), 400);
      } else if (offset <= 10) {
        hasScrolledOnce.current = false;
        setFlashLine(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/10 dark:bg-black/20 border-transparent" 
          : "dark:bg-black/60 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800"
      }`}
    >
      {/* Interactive Scroll Progress Line */}
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        animate={flashLine ? { width: "100%", opacity: 1 } : { width: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[2px] bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]"
      />

      <div className="max-w-full mx-auto px-6 md:px-15 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-green-500 transition">Home</Link>
          <Link href="/marketplace" className="hover:text-green-500 transition">Marketplace</Link>
          <Dropdown
            title="Solutions"
            items={[
              { name: "Fertilizer", link: "/fertilizer" },
              { name: "Crops & Diseases", link: "/crop-dieseases" },
              { name: "Live Crops", link: "/live" },
              { name: "Services", link: "/services" },
            ]}
          />

          <Dropdown
            title="Resources"
            items={[
              { name: "How It Works", link: "/how-it-works" },
              { name: "Agriculturists", link: "/agriculturist" },
            ]}
          />
          <Link href="/about" className="hover:text-green-500 transition">About</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-xl text-xl transition-all hover:scale-110 ${
              scrolled ? "text-green-500" : "text-black dark:text-white"
            }`}
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>

          <Link
            href="/login"
            className={`px-5 py-2 text-sm font-medium transition-colors ${
              scrolled ? "text-green-500 font-bold" : "text-black dark:text-gray-300"
            } hover:text-green-400`}
          >
            Log In
          </Link>

              <div className="flex items-center gap-2">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="user"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="hidden lg:block">
                  {session.user.name || "User"}
                </span>
              </div>

              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl"
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-green-600"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 text-black right-0 w-full bg-green-100/95 dark:bg-zinc-900/95 dark:text-white rounded-b-2xl shadow-xl border-b border-gray-100 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-green-600 flex items-center gap-2">
                <IoHomeOutline className="text-green-600 h-5" /> Home
              </Link>
              <Link href="/marketplace" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-green-600 flex items-center gap-2">
                <ShoppingCart className="text-green-600 h-5" /> Marketplace
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-green-600 flex items-center gap-2">
                <Info className="text-green-600 h-5" /> About
              </Link>
            </div>

            <hr className="border-gray-300 dark:border-zinc-700" />

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase font-semibold text-gray-500">Solutions</p>
              <Link href="/fertilizer" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Fertilizer</Link>
              <Link href="/crop-dieseases" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Crops & Diseases</Link>
              <Link href="/live" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Live Crops</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Services</Link>
            </div>

            <hr className="border-gray-300 dark:border-zinc-700" />

            <div className="flex flex-col gap-3 mt-2">
              <Link href="/login" onClick={() => setIsOpen(false)} className="py-3 text-center border-2 border-green-600 font-medium text-green-600 rounded-xl">
                Log In
              </Link>
              <Link href="/Dashboard" onClick={() => setIsOpen(false)} className="py-3 text-center font-medium bg-green-600 text-white rounded-xl">
                Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;