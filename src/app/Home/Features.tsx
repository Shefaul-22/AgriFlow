"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineChip, HiOutlinePresentationChartLine, HiOutlineGlobeAlt } from 'react-icons/hi';
import Link from 'next/link';
import { PiCommandBold } from "react-icons/pi";
import Map from '@/app/Images/Map.png'
import Image from 'next/image';

const Features = () => {
  return (
    <section className="w-full px-10 pt-20  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Part */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Engineered for the <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-lime-600'>Modern Terroir</span>
            </h2>
            <p className="text-lg">
              Our ecosystem utilizes decentralized intelligence to ensure that every grain, fruit, and bean reaches its maximum economic potential.
            </p>
          </div>
          <Link href="/ecosystem" className="flex items-center gap-2 text-green-700 dark:text-green-500 font-bold hover:gap-4 transition-all group">
            Explore Ecosystem <HiOutlineArrowNarrowRight className="text-xl" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Precision Matching (Large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm"
          >
            <div className="bg-green-100 dark:bg-green-500/10 p-3 rounded-xl w-fit mb-6">
              <HiOutlineChip className="text-3xl text-green-700 dark:text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Precision Matching</h3>
            <p className="text-gray-700 mb-8 max-w-md">
              AI algorithms analyze soil data, climate history, and global market trends to match crops with the most profitable buyers instantly.
            </p>
            <div className="flex gap-3">
              <span className="px-4 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase rounded-full border border-green-100 dark:border-green-800">Optimized Logistics</span>
              <span className="px-4 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase rounded-full border border-blue-100 dark:border-blue-800">Real-time Demand</span>
            </div>
          </motion.div>

          {/* Card 2: Smart Contracts */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between border border-transparent dark:border-zinc-800"
          >
            <div>
               <PiCommandBold className="text-4xl text-zinc-500 dark:text-zinc-400 mb-6" />
               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Smart Contracts</h3>
               <p className="text-gray-600 dark:text-gray-400 text-md">
                 Automated, blockchain-verified agreements that trigger payments upon AI validation of quality and delivery.
               </p>
            </div>
            <Link href="/learn-more" className="mt-8 text-sm font-bold flex items-center gap-2 text-gray-900 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">
              Learn more <HiOutlineArrowNarrowRight />
            </Link>
          </motion.div>

          {/* Card 3: Real-time Terroir */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#E5E9FF] dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50"
          >
             <HiOutlinePresentationChartLine className="text-4xl text-blue-600 dark:text-blue-400 mb-6" />
             <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real-time Terroir</h3>
             <p className="text-blue-800/70  text-md">
               Live sensory data streaming directly from fields to buyer dashboards for unprecedented transparency.
             </p>
          </motion.div>

          {/* Card 4: Global Network (Wide) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="">
               <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Global Network Visualization</h3>
               <p className="text-gray-700 text-md mb-6">
                 Monitor trade routes, inventory levels, and crop health across every continent from a single command center.
               </p>
               <Link href="/map" className="flex items-center gap-2 text-green-700 dark:text-green-500 font-bold text-sm">
                 <HiOutlineGlobeAlt className="text-xl" /> View Global Map
               </Link>
            </div>
            <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-crosshair relative">
                <Image src={Map} alt="Map" className="w-full h-full object-cover opacity-60 dark:opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;