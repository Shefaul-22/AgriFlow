"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  HiOutlineUserGroup, 
  HiOutlineCurrencyDollar, 
  HiOutlineChartBar,
  HiOutlineArrowUpRight,
  HiOutlineArrowDownLeft,
  HiOutlineArrowTrendingUp
} from "react-icons/hi2";
import { IoStatsChartOutline, IoCalendarOutline } from "react-icons/io5";

const Analytics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 p-4 md:p-8 pb-24 min-h-screen"
    >
      {/* --- Header --- */}
      <div className="flex items-center justify-between gap-4 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/20">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-green-600">
            Data<span className="text-yellow-600">.</span >Insights
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Real-time analytics and performance metrics.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm border-2 w-fit border-green-500">
          <IoCalendarOutline className="text-green-600" />
          <span className="text-xs font-bold italic">Last 30 Days</span>
        </div>
      </div>

      {/* --- Main Stats Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", val: "$42,500", change: "+12.5%", up: true, icon: HiOutlineCurrencyDollar, color: "emerald" },
          { label: "Active Buyers", val: "1,840", change: "+5.2%", up: true, icon: HiOutlineUserGroup, color: "red" },
          { label: "Market Growth", val: "24.8%", change: "-2.1%", up: false, icon: HiOutlineArrowTrendingUp, color: "purple" },
          { label: "Conversion", val: "18.2%", change: "+4.3%", up: true, icon: HiOutlineChartBar, color: "orange" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-blue-200/50 p-6 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm relative overflow-hidden group"
          >
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center mb-4 transition-colors group-hover:bg-${stat.color}-500 group-hover:text-white`}>
              <stat.icon size={24} className={`text-${stat.color}-600 dark:text-${stat.color}-400 group-hover:text-white`} />
            </div>
            <p className="text-[10px] font-black  uppercase tracking-widest">{stat.label}</p>
            <h4 className="text-2xl font-black  mt-1">{stat.val}</h4>
            <div className="flex items-center gap-1 mt-2">
              {stat.up ? (
                <HiOutlineArrowUpRight className="text-emerald-500" />
              ) : (
                <HiOutlineArrowDownLeft className="text-rose-500" />
              )}
              <span className={`text-xs font-bold ${stat.up ? "text-emerald-500" : "text-rose-500"}`}>
                {stat.change}
              </span>
              <span className="text-[10px] text-gray-600 font-medium ml-1 flex-shrink-0">vs last period</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Charts Placeholder Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Performance Visualization */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-8  text-white p-8 rounded-[3.5rem] relative overflow-hidden shadow-2xl min-h-[400px]"
        >
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-blue-500 mb-2 tracking-tighter">Performance Flow</h3>
              <p className="text-gray-600 text-sm font-medium">Daily transaction volume & user engagement.</p>
            </div>
            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            </div>
          </div>
          
          {/* Mock Chart Area */}
          <div className="absolute inset-x-8 bottom-8 top-32 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 80, 50, 95, 60, 75, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-indigo-500 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              ></motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Products/Regions */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4  p-8 rounded-[3.5rem] border border-emerald-100 dark:border-zinc-800"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500 rounded-2xl text-white shadow-lg">
              <IoStatsChartOutline size={20} />
            </div>
            <h3 className="text-xl font-black">Top Sectors</h3>
          </div>
          
          <div className="space-y-6">
            {[
              { name: "Organic Vegetables", val: "85%", color: "bg-emerald-500" },
              { name: "Fresh Fruits", val: "62%", color: "bg-blue-500" },
              { name: "Dairy Products", val: "44%", color: "bg-orange-500" },
              { name: "Grains & Rice", val: "31%", color: "bg-purple-500" },
            ].map((sector, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-tighter text-gray-500 dark:text-gray-400">
                  <span>{sector.name}</span>
                  <span>{sector.val}</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: sector.val }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${sector.color}`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Analytics;