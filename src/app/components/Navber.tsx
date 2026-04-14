"use client";

import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import Logo from './Logo';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-zinc-800">
      <div className="max-w-full mx-auto px-6 md:px-15 h-20 flex items-center justify-between"> 
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>
  
        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium text-black dark:text-white hover:text-green-600 transition-colors">
            Log In
          </button>
          <button className="px-6 py-2.5 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-full transition-all shadow-lg shadow-green-500/20">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black dark:text-white focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <button className="w-full py-3 text-center font-medium border border-zinc-200 dark:border-zinc-800 rounded-xl text-black dark:text-white">
              Log In
            </button>
            <button className="w-full py-3 text-center font-medium bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/20">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navber;