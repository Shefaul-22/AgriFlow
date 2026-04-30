"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoCartOutline, IoWalletOutline, IoTimeOutline, 
  IoFlashOutline, IoStatsChartOutline, IoBagHandleOutline,
  IoChevronForwardOutline, IoLeafOutline
} from "react-icons/io5";
import Link from 'next/link';

export default function BuyerPage() {
  const stats = [
    { label: "Total Spent", val: "৳12,450", icon: IoWalletOutline, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Active Orders", val: "03", icon: IoBagHandleOutline, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Live Bids", val: "05", icon: IoFlashOutline, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Reward Points", val: "450", icon: IoStatsChartOutline, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-10 font-sans text-gray-600">
      <div className="max-w-7xl mx-auto">
        
        {/* Welcome Header */}
        <div className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-green-500 tracking-tight flex items-center gap-3"
          >
            Welcome Back👋
          </motion.h1>
          <p className="text-gray-600 font-medium mt-2">Explore fresh crops and manage your purchases.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`p-4 rounded-2xl ${s.bg} ${s.color}`}>
                <s.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.label}</p>
                <h4 className="text-xl font-black text-gray-800">{s.val}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Feed: Recent Orders */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-gray-800 tracking-tight">Recent Orders</h2>
              <Link href='/Dashboard/buyer/my-orders' className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:underline">View All <IoChevronForwardOutline /></Link>
            </div>

            {[1, 2].map((order) => (
              <div key={order} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-emerald-200 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📦</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Order #TRK-00{order}</h4>
                    <p className="text-xs text-gray-400 font-medium">2 Items • Arriving in 2 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-gray-800">৳1,420</p>
                  <span className="text-[10px] font-black uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded-md">On the way</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: Live Sessions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-gray-800 tracking-tight">Live Auctions</h2>
            
            <div className="border shadow-2xl rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-rose-500 mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
                  <p className="text-[10px] font-black uppercase tracking-widest">Live Now</p>
                </div>
                <h3 className="text-xl font-bold mb-2">500kg Organic Mango</h3>
                <p className="text-zinc-400 text-sm mb-6">Current Bid: <span className="text-white font-black">৳18,500</span></p>
                <button className="w-full bg-emerald-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-900/20 hover:bg-emerald-500 transition-all">Join Session</button>
              </div>
              {/* Background Decor */}
              <div className="absolute -bottom-10 -right-10 text-zinc-800 opacity-20 group-hover:rotate-12 transition-transform">
                <IoLeafOutline size={150} />
              </div>
            </div>

            {/* Quick Promo Card */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-6">
              <div className="flex items-center gap-3 text-emerald-700 mb-2 font-black italic">
                <IoCartOutline /> Smart Suggestion
              </div>
              <p className="text-xs text-emerald-800/70 font-medium leading-relaxed">
                Prices for Winter Wheat are expected to drop tomorrow. Add to wishlist?
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}