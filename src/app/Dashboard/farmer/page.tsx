"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineExclamationTriangle,
  HiOutlineArrowTrendingUp,
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { IoLeafOutline, IoAnalyticsOutline } from "react-icons/io5";

export default function FarmerPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 p-4 md:p-8 pb-24"
    >
      {/* --- Glassmorphism Header --- */}
      <div className=" backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight italic text-emerald-900 dark:text-emerald-500">
            Terroir <span className="text-gray-600 font-light">Connect</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Welcome back, Here's your farm's performance .
          </p>
        </div>
        
      </div>

      {/* --- Main Hero Section (Premium Look) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-8 relative overflow-hidden h-[300px] md:h-[400px] rounded-[3rem] bg-zinc-900 group shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="Farm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 z-10 space-y-4">
            <span className="px-4 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              Exclusive Feature
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
              Stream Your <br /> Harvest Live.
            </h2>
            <p className="text-gray-300 max-w-sm text-sm font-medium">
              Build trust with buyers by showing your terroir in real-time.
              Boost sales by 40%.
            </p>
            <Link
              href="/Dashboard/live"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-500 hover:text-white transition-all active:scale-95 shadow-xl"
            >
              GO LIVE NOW <HiOutlineArrowTrendingUp />
            </Link>
          </div>
        </motion.div>

        {/* AI Insight Card (Modern Glass Style) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl">
            <HiOutlineLightBulb className="absolute -right-4 -top-4 text-white/10 text-9xl rotate-12" />
            <h3 className="text-xl font-bold mb-2">AI Demand Insight</h3>
            <p className="text-indigo-100 text-sm leading-relaxed opacity-80 font-medium">
              "Potato demand is expected to spike 15% next week in your region.
              Consider listing your harvest now."
            </p>
            <button className="mt-6 text-xs font-black uppercase border-b-2 border-white pb-1 tracking-widest">
              See Full Report
            </button>
          </div>

          <div className="flex-1 bg-emerald-100 dark:bg-zinc-800 p-8 rounded-[2.5rem] border border-emerald-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <span className="p-3 bg-white dark:bg-zinc-900 rounded-2xl text-emerald-600 shadow-sm">
                <IoAnalyticsOutline size={24} />
              </span>
              <span className="text-[10px] font-black text-emerald-700 uppercase">
                Growth Rate
              </span>
            </div>
            <h4 className="text-3xl font-black text-emerald-900 dark:text-white">
              +24.8%
            </h4>
            <p className="text-xs text-emerald-600 font-bold">
              Increasing Buyer Interest
            </p>
          </div>
        </div>
      </div>

      {/* --- Sales & Inventory Stats Grid --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <Link href="/marketplace" className="col-span-2 md:col-span-1 group">
          <div className="h-full bg-gradient-to-br from-orange-400 to-rose-500 p-5 rounded-[2rem] text-white shadow-lg shadow-orange-200 dark:shadow-none relative overflow-hidden transition-transform active:scale-95">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center">
                <HiOutlineShoppingBag size={20} />
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-black leading-tight">
                  Visit <br /> Marketplace
                </h4>
                <p className="text-[10px] font-medium opacity-80 mt-1">
                  Sell to 5k+ Buyers
                </p>
              </div>
            </div>
            <HiOutlineArrowTrendingUp className="absolute -right-2 -bottom-2 text-white/20 size-24 group-hover:scale-110 transition-transform" />
          </div>
        </Link>
        {[
          {
            label: "Revenue",
            val: "$12k",
            icon: HiOutlineCurrencyDollar,
            color: "bg-blue-500",
          },
          {
            label: "Orders",
            val: "24",
            icon: HiOutlineShoppingBag,
            color: "bg-emerald-500",
          },
          {
            label: "Visitors",
            val: "1.8k",
            icon: HiOutlineUsers,
            color: "bg-purple-500",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 p-4 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-sm"
          >
            <div
              className={`w-8 h-8 rounded-lg ${stat.color} text-white flex items-center justify-center mb-3 shadow-md`}
            >
              <stat.icon size={16} />
            </div>
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">
              {stat.label}
            </p>
            <h4 className="text-lg font-black dark:text-white leading-none mt-1">
              {stat.val}
            </h4>
          </div>
        ))}
      </div>

      {/* --- Alert & Management Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marketplace Management */}
        <div className="bg-zinc-900 text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Inventory Low</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-xs">
              Your 'Fresh Green Chili' is almost out of stock. Update your
              inventory to keep selling.
            </p>
            <Link
              href="/Dashboard/farmer/my-products"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-xl font-bold text-xs transition-all inline-block"
            >
              Update Products
            </Link>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <HiOutlineShoppingBag size={200} />
          </div>
        </div>

        {/* Urgent Health Alert */}
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-[3rem] border border-red-100 dark:border-red-900/30 flex items-start gap-5">
          <div className="p-4 bg-red-500 text-white rounded-3xl shadow-lg animate-bounce">
            <HiOutlineExclamationTriangle size={30} />
          </div>
          <div>
            <h3 className="text-xl font-black text-red-600 mb-1">
              Health Alert
            </h3>
            <p className="text-red-900/60 dark:text-red-400 text-sm font-medium leading-relaxed">
              Northern quadrant shows symptoms of <strong>Early Blight</strong>.
              Immediate fungal treatment recommended to save yield.
            </p>
            <button className="mt-4 text-xs font-black uppercase text-red-600 tracking-widest hover:underline">
              Read Treatment Plan
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
