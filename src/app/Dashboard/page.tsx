"use client";
import React from 'react';
import { HiSun } from 'react-icons/hi';
import { 
  HiOutlineLightBulb, 
  HiOutlineExclamationTriangle,
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp
} from 'react-icons/hi2';
import { LuNotepadText } from "react-icons/lu";

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8 p-15 ">     
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Terroir Dashboard</h1>
          <p className="text-xs md:text-sm text-gray-600">Real-time agricultural intelligence and marketplace management.</p>
        </div>
        <div className="text-xs md:text-sm font-medium px-4 py-2 rounded-lg border border-gray-100 dark:border-zinc-800 shadow-sm">
            📅 Oct 24, 2026
        </div>
      </div>

      {/* Hero Banner - Responsive Height and Text */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-green-600 rounded-2xl md:rounded-[2rem] p-6 md:p-10 text-white min-h-[180px] md:min-h-[240px] flex items-center">
         <div className="relative z-10 max-w-xs md:max-w-md">
            <span className="bg-yellow-400 text-black text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded mb-3 inline-block uppercase tracking-wider">Direct-to-Consumer</span>
            <h2 className="text-xl md:text-3xl font-bold mb-4 leading-tight">Showcase Your Terroir Live</h2>
            <button className="bg-white text-emerald-900 px-5 py-2 md:px-6 md:py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all text-xs md:text-sm">
                Start Live Farm Tour
            </button>
         </div>
         {/* Background Image adjustments for mobile */}
         <div className="absolute top-0 right-0 w-full h-full md:w-1/2 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 md:opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Key Stats & Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
         {/* Wallet Card */}
         <div className="bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2">Earnings & Wallet</p>
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white">$12,480.00</h3>
            <p className="text-green-500 text-xs mt-1 font-medium">+14.2% from last harvest</p>
            <div className="mt-6 flex gap-3">
               <button className="flex-1 py-2.5 bg-emerald-900 dark:bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors">Withdraw</button>
               <button className="flex-1 py-2.5 border border-gray-200 dark:border-zinc-700 dark:text-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">Details</button>
            </div>
         </div>

         {/* AI Scan Card */}
         <div className="bg-[#F4FBF4] dark:bg-emerald-950/20 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-green-100 dark:border-emerald-900/30 flex flex-col justify-between">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg text-emerald-600 shadow-sm"><HiOutlineLightBulb className="text-xl"/></div>
               <p className="text-sm font-bold dark:text-white">AI Crop Advisor</p>
            </div>
            <div className="mt-6 md:mt-4">
               <div className="h-2 w-full bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-emerald-500 rounded-full transition-all duration-1000"></div>
               </div>
               <p className="text-[9px] md:text-[10px] mt-3 text-gray-500 font-bold uppercase">Field Scan Status: 60% Complete</p>
            </div>
         </div>

         {/* Alert Card - Full width on small tablets (md) */}
         <div className="md:col-span-2 lg:col-span-1 bg-red-50 dark:bg-red-950/20 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-red-100 dark:border-red-900/30">
            <div className="flex items-center gap-3 text-red-600">
               <HiOutlineExclamationTriangle className="text-xl md:text-2xl" />
               <p className="text-xs md:text-sm font-bold uppercase tracking-tight">Early Blight Detected</p>
            </div>
            <p className="text-[12px] md:text-[13px] mt-4 leading-relaxed font-medium">
               Northern quadrant shows symptoms. Immediate fungal treatment recommended to save yield.
            </p>
         </div>
      </div>

      {/* Environment Data - Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Soil Moisture', val: '42%', status: 'Optimal', icon: LuNotepadText, color: 'text-blue-500' },
          { label: 'NPK Levels', val: 'Good', status: 'N High', icon: HiOutlineSparkles, color: 'text-purple-500' },
          { label: 'Market Demand', val: 'High', status: '+5%', icon: HiOutlineArrowTrendingUp, color: 'text-orange-500' },
          { label: 'Light Exp.', val: '12.4h', status: '24°C', icon: HiSun, color: 'text-yellow-500' },
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
               <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest truncate mr-1">{item.label}</p>
               <item.icon className={`text-lg md:text-xl shrink-0 ${item.color}`} />
            </div>
            <h4 className="text-lg md:text-2xl font-bold dark:text-white mb-1">{item.val}</h4>
            <span className={`text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-md inline-block ${
              i === 0 ? 'bg-green-100 text-green-700' : '  text-gray-500'
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}