"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [flashLine, setFlashLine] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Flash line logic thik rakhar jonno useRef proyojon
  const hasScrolledOnce = useRef(false);

  useEffect(() => {
    setMounted(true);
    let timeout;

    const handleScroll = () => {
      const offset = window.scrollY;

      // Background fix: 50px niche namle transparent hobe
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Flash line logic fix: Ekbar trigger hobe
      if (offset > 10 && !hasScrolledOnce.current) {
        hasScrolledOnce.current = true;
        setFlashLine(true);
        timeout = setTimeout(() => setFlashLine(false), 600);
      } else if (offset <= 10) {
        hasScrolledOnce.current = false;
        setFlashLine(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "backdrop-blur border-transparent" // Scroll korle purapuri faka
          : "bg-white/40 dark:bg-black/60 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800" // Default glassmorphism
      }`}
    >
      {/* Interactive Flashing Green Line */}
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        animate={flashLine ? { width: "100%", opacity: 1 } : { width: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[2px] bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]"
      />

      <div className="max-w-full mx-auto px-6 md:px-15 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
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
              scrolled ? "text-green-500 font-bold" : "text-gray-600 dark:text-gray-300"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 border-b border-green-500/30 p-6 flex flex-col gap-4 md:hidden shadow-2xl overflow-hidden"
          >
            <Link
              href="/login"
              className="py-3 text-center border-2 border-green-600 font-medium text-green-600 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/Dashboard"
              className="py-3 text-center font-medium bg-green-600 text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;