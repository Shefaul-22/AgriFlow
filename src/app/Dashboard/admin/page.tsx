"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlinePresentationChartLine,
  HiOutlineServerStack,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import { IoSettingsOutline, IoLockClosedOutline } from "react-icons/io5";

export default function AdminPage() {
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
      {/* --- Admin Glassmorphism Header --- */}
      <div className="backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight italic text-emerald-900 dark:text-emerald-500">
            Admin <span className="text-gray-600 font-light">Connect</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            System overview and infrastructure health.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href='/Dashboard/settings' className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 active:scale-95 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700">
            <IoSettingsOutline className="text-zinc-500 dark:text-zinc-400 animate-spin-slow" />
          </Link>
        </div>
      </div>

      {/* --- Main Hero Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="lg:col-span-8 relative overflow-hidden h-[300px] md:h-[400px] rounded-[3.5rem] group shadow-2xl"
        >
          {/* Main Agriculture Image */}
          <img
            src="https://i.postimg.cc/RhR4fZDd/bunny-pickard-6ZNDme-Zv-Esg-unsplash.jpg"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="AgriFlow Admin"
          />

          <div className="absolute bottom-10 left-10 z-10 space-y-4 pr-10">
            <div className=''>
              <span className="px-4 py-1 bg-white/30 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-white/20">
              System Operations
            </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-none tracking-tighter">
              Manage AgriFlow <br /> Global Ecosystem.
            </h2>
            <p className="text-white max-w-sm text-sm font-medium ">
              Oversee all users, transactions, and system logs from one unified
              high-performance command center.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/Dashboard/admin/manage-users"
                className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all active:scale-95"
              >
                MANAGE USERS <HiOutlineUsers />
              </Link>
              <Link
                href="/Dashboard/admin/analytics"
                className="inline-flex items-center gap-3 bg-indigo-900/30 text-white border border-indigo-400/30 px-8 py-4 rounded-2xl font-black text-sm hover:bg-indigo-500/50 transition-all active:scale-95 backdrop-blur-sm"
              >
                VIEW ANALYTICS
              </Link>
            </div>
          </div>

          <HiOutlineShieldCheck className="absolute -right-10 -bottom-10 text-white/5 size-80 rotate-12 group-hover:scale-110 transition-transform duration-700" />
        </motion.div>

        {/* System Stats Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl border border-zinc-800">
            <HiOutlineServerStack className="absolute -right-4 -top-4 text-white/10 text-9xl rotate-12" />
            <h3 className="text-xl font-bold mb-2 tracking-tight">
              Database Status
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-black text-green-500 uppercase tracking-wider">
                Operational
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              Uptime: <span className="font-bold text-white">99.98%</span>{" "}
              <br />
              Total Queries:{" "}
              <span className="font-bold text-white">1.2M (24h)</span>
            </p>
            <button className="mt-6 text-xs font-black uppercase text-indigo-400 hover:text-white transition-colors border-b-2 border-indigo-400 hover:border-white pb-0.5 tracking-widest">
              Server Optimization →
            </button>
          </div>

          <div className="flex-1 bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
            <div className="flex justify-between items-center mb-4">
              <span className="p-3 bg-white dark:bg-zinc-900 rounded-2xl text-indigo-600 shadow-sm border dark:border-zinc-700">
                <HiOutlinePresentationChartLine size={24} />
              </span>
              <span className="text-[10px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest">
                Platform Revenue
              </span>
            </div>
            <h4 className="text-4xl font-black text-indigo-900 dark:text-white tracking-tighter">
              $84.2k
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <HiOutlineArrowTrendingUp className="text-indigo-600 dark:text-indigo-400" />
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                +12.4% vs last month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Quick Action Grid --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {[
          {
            label: "Total Farmers",
            val: "2,450",
            icon: HiOutlineUsers,
            color: "bg-blue-500",
            shadow: "shadow-blue-500/20",
          },
          {
            label: "Pending Reviews",
            val: "12",
            icon: HiOutlineDocumentMagnifyingGlass,
            color: "bg-orange-500",
            shadow: "shadow-orange-500/20",
          },
          {
            label: "Active Nodes",
            val: "128",
            icon: HiOutlineCube,
            color: "bg-purple-500",
            shadow: "shadow-purple-500/20",
          },
          {
            label: "Security Level",
            val: "Optimal",
            icon: HiOutlineShieldCheck,
            color: "bg-emerald-500",
            shadow: "shadow-emerald-500/20",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-[2.2rem] border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all"
          >
            <div
              className={`w-10 h-10 rounded-xl ${stat.color} text-white flex items-center justify-center mb-4 shadow-xl ${stat.shadow}`}
            >
              <stat.icon size={20} />
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {stat.label}
            </p>
            <h4 className="text-2xl font-black dark:text-white leading-none mt-1 tracking-tight">
              {stat.val}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* --- Alerts Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden border border-zinc-800">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2 tracking-tight">
              Encryption Active
            </h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-xs font-medium opacity-90">
              All platform data is end-to-end encrypted with AES-256. SSL
              certificates are up to date.
            </p>
            <div className="flex items-center gap-3 bg-zinc-800 w-fit px-4 py-2 rounded-lg border border-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span className="text-[10px] font-black text-zinc-300 tracking-widest">
                NODE: 0x44...BD
              </span>
            </div>
          </div>
          <IoLockClosedOutline className="absolute right-[-20px] bottom-[-20px] opacity-10 text-indigo-500 size-64 rotate-12 transition-transform duration-1000" />
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/20 p-8 rounded-[3rem] border border-amber-100 dark:border-amber-900/30 flex items-start gap-5">
          <div className="p-4 bg-amber-500 text-white rounded-3xl shadow-xl shadow-amber-500/20">
            <HiOutlineServerStack size={30} />
          </div>
          <div>
            <h3 className="text-xl font-black text-amber-600 mb-1">
              Maintenance Required
            </h3>
            <p className="text-amber-900/70 dark:text-amber-400 text-sm font-medium leading-relaxed">
              API Cluster <strong>'Asia-Southeast'</strong> is reaching 85%
              capacity. Scaling nodes recommended within 48 hours.
            </p>
            <button className="mt-4 text-xs font-black uppercase text-amber-600 tracking-widest border-b-2 border-amber-400 pb-0.5 hover:border-amber-600 transition-colors">
              Scale System Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
