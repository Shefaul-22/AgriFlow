"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import Link from "next/link";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md z-50 border-b border-gray-300 ">
      <div className="max-w-full mx-auto px-6 md:px-15 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* Dark Mode Toggle */}
          {mounted ? (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl  text-xl transition-all hover:scale-110"
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          ) : (
            <div className="p-2 w-10 h-10" />
          )}

          <Link
            href="/login"
            className="px-5 py-2 text-sm font-medium  hover:text-green-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/Dashboard"
            className="px-6 py-2.5 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-full transition-all shadow-lg shadow-green-500/20"
          >
            Dashboard
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {mounted ? (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl  text-xl  transition-all hover:scale-110"
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          ) : (
            <div className="p-2 w-10 h-10" />
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-0 w-full bg-green-600/40 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <Link
              href="/login"
              className=" py-3 text-center border-2 border-green-600 font-medium bg-white/80 text-green-600 rounded-xl shadow-lg"
            >
              Log In
            </Link>
            <Link
              href="/Dashboard"
              className=" py-3 text-center font-medium bg-green-600 text-white rounded-xl shadow-lg"
            >
              Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navber;
