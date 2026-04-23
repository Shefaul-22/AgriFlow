"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"; 
import { useTheme } from "next-themes";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import Dropdown from "@/app/components/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); 

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
    const max = document.body.scrollHeight - window.innerHeight;
    setScrollProgress(max > 0 ? (v / max) * 100 : 0);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "backdrop-blur border-transparent"
          : " dark:bg-white/30 backdrop-blur-xl dark:border-gray-800"
      }`}
    >
      {/* Interactive Scroll Progress Line */}
      <motion.div
        animate={{ width: `${scrollProgress}%` }} 
        transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001 }}
        className="absolute bottom-0 left-0 h-[2px] bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]"
      />

      <div className="max-w-full mx-auto px-6 md:px-15 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-green-500 transition">
            Home
          </Link>
          <Link href="/marketplace" className="hover:text-green-500 transition">
             Marketplace
          </Link>
          <Dropdown
            title="Solutions"
            items={[
              { name: "Fertilizer", link: "/fertilizer" },
              { name: "Crops & Diseases", link: "/crop-dieseases" },
              { name: "Live Crops", link: "/live" },
              { name: " Services", link: "/services" },
            ]}
          />
          <Dropdown
            title="Resources"
            items={[
              { name: "How It Works", link: "/how-it-works" },
              { name: " Agriculturists", link: "/agriculturist" },
            ]}
          />
          <Link href="/about" className="hover:text-green-500 transition">
            About
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-xl text-xl transition-all hover:scale-110 ${
                scrolled ? "text-green-500" : "text-black dark:text-white"
              }`}
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          )}

          <Link
            href="/login"
            className={`px-5 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? "text-green-500 font-bold"
                : "text-black dark:text-gray-300"
            } hover:text-green-400`}
          >
            Log In
          </Link>

          <Link
            href="/Dashboard"
            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white shadow-lg shadow-green-500/10"
                : "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/20"
            }`}
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 text-xl ${scrolled ? "text-green-500" : ""}`}
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl ${scrolled ? "text-green-500" : ""}`}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
            className="absolute top-21 bg-gray-600/90 right-2 w-[85%] max-w-sm rounded-2xl  backdrop-blur-xl border border-green-500/20 p-6 flex flex-col gap-5 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-lg">Home</Link>
              <Link href="/marketplace" onClick={() => setIsOpen(false)} className="font-bold text-lg">Marketplace</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="font-bold text-lg">About</Link>
            </div>
            <hr className="border-gray-300 " />
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase font-semibold">Solutions</p>
              <Link href="/fertilizer" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Fertilizer</Link>
              <Link href="/crops" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Crops & Diseases</Link>
              <Link href="/live" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Live Crops</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="font-semibold text-lg hover:text-green-600">Services</Link>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase font-semibold">Resources</p>
              <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-semibold">How It Works</Link>
              <Link href="/experts" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Agriculturists</Link>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/login" className="py-3 text-center border-2 border-green-600 font-medium text-green-600 rounded-xl" onClick={() => setIsOpen(false)}>Log In</Link>
              <Link href="/Dashboard" className="py-3 text-center font-medium bg-green-600 text-white rounded-xl" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;