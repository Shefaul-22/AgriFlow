// src/app/Dashboard/rider/active/page.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoNavigateCircleOutline, 
  IoCallOutline, 
  IoCheckmarkDoneOutline, 
  IoLocationOutline, 
  IoMapOutline,
  IoAlertCircleOutline
} from "react-icons/io5";
import { MdDirectionsRun } from "react-icons/md"; // Running icon for active state

export default function ActiveDelivery() {
  // ডামি ডেটা
  const activeOrder = {
    id: "TRK-9021",
    customer: "Arif Ahmed",
    address: "House 24, Road 7, Dhanmondi, Dhaka",
    phone: "017XXXXXXXX",
    items: "5kg Organic Tomatoes, 2kg Green Chili",
    total: "৳850"
  };

  return (
    <div className="min-h-screen bg-gray-50/30 p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section (আপনার স্টাইল অনুযায়ী) */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold flex items-center tracking-tight text-green-600 gap-2">
            <MdDirectionsRun /> Active <span className="text-yellow-600">.</span> Delivery
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Navigate to the destination and complete the task.
          </p>
        </div>

        {/* Active Order Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden"
        >
          {/* Top Status Bar */}
          <div className="bg-green-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <IoNavigateCircleOutline size={24} className="animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest">Ongoing Task</span>
            </div>
            <span className="text-xs font-bold bg-green-700/50 px-3 py-1 rounded-lg">ID: {activeOrder.id}</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Side: Information */}
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-yellow-600 ml-1">Customer Details</label>
                  <h2 className="text-3xl font-black text-gray-800 mt-1">{activeOrder.customer}</h2>
                  <div className="flex items-start gap-2 text-gray-500 mt-3 font-medium">
                    <IoLocationOutline className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-base">{activeOrder.address}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Order Info</span>
                    <span className="text-sm font-black text-green-600">{activeOrder.total} (COD)</span>
                  </div>
                  <p className="text-sm font-bold text-gray-700 leading-relaxed">
                    {activeOrder.items}
                  </p>
                </div>
              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex flex-col justify-center gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={`tel:${activeOrder.phone}`}
                    className="flex flex-col items-center justify-center py-8 bg-white border-2 border-gray-100 rounded-[2rem] text-gray-600 hover:border-green-600 hover:text-green-600 transition-all group"
                  >
                    <IoCallOutline size={30} className="mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">Call Now</span>
                  </a>
                  
                  <button className="flex flex-col items-center justify-center py-8 bg-white border-2 border-gray-100 rounded-[2rem] text-gray-600 hover:border-yellow-600 hover:text-yellow-600 transition-all group">
                    <IoMapOutline size={30} className="mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">View Map</span>
                  </button>
                </div>

                <button className="w-full bg-green-600 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-3 active:scale-95 mt-2">
                  <IoCheckmarkDoneOutline size={24} /> Mark as Delivered
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-rose-500 cursor-pointer hover:underline">
                  <IoAlertCircleOutline size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Report Issue</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Floating Indicator for desktop */}
        <div className="mt-8 text-center">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">AgriFlow Logistics Network</p>
        </div>

      </div>
    </div>
  );
}