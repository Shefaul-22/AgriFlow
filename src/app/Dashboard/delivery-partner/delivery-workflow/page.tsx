"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoBicycleOutline,
  IoLocationOutline,
  IoCallOutline,
  IoCheckmarkDoneOutline,
  IoMapOutline,
  IoTimeOutline,
  IoAlertCircleOutline,
  IoNavigateCircleOutline,
  IoWalletOutline,
  IoNotificationsOutline
} from "react-icons/io5";

export default function RiderDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: "DLV-101",
      customer: "Arif Ahmed",
      address: "Dhanmondi, Dhaka",
      phone: "017XXXXXXXX",
      status: "Assigned",
      items: "5kg Rice, 2kg Onion",
      img: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=100&h=100&fit=crop"
    },
    {
      id: "DLV-102",
      customer: "Sultana Razia",
      address: "Mirpur 10, Dhaka",
      phone: "018XXXXXXXX",
      status: "In Transit",
      items: "10kg Mangoes",
      img: "https://images.unsplash.com/photo-1619333183591-848466fbd8a3?w=100&h=100&fit=crop"
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">
        
        {/* Top Navbar Style Header */}
        <div className="flex items-center justify-between bg-white p-6 rounded-2xl mb-12">
           <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop" 
                  alt="Rider" 
                  className="w-16 h-16 rounded-3xl object-cover border-4 border-white shadow-xl shadow-emerald-100"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-800">
                  Hello, <span className="text-emerald-600">Rider</span>
                </h1>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Master Rider • AgriFlow</p>
              </div>
           </div>
           <div className="flex gap-3">
              <button className="p-4 bg-white rounded-2xl shadow-sm text-gray-400 hover:text-emerald-500 transition-all border border-gray-100"><IoWalletOutline size={20}/></button>
           </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm">
               <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Today Earnings</p>
               <h3 className="text-xl font-black text-gray-800">৳850.00</h3>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm">
               <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Total Trips</p>
               <h3 className="text-xl font-black text-gray-800">12</h3>
            </div>
        </div>

        {/* Task List Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-100"><IoTimeOutline /></span> 
              Live Shipments
            </h2>
            <span className="text-xs font-black text-blue-500 bg-blue-50 px-4 py-2 rounded-full">{tasks.length} Active Tasks</span>
          </div>

          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={task.id}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-xl shadow-gray-200/50 overflow-hidden transition-all hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Shipment Image/Icon Area */}
                    <div className="relative shrink-0">
                      <img src={task.img} className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2rem] object-cover shadow-lg" alt="shipment" />
                      <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg ${
                        task.status === "Assigned" ? "bg-blue-600 text-white" : "bg-amber-500 text-white"
                      }`}>
                        {task.status}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 space-y-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-2xl font-black text-gray-800 tracking-tight">{task.customer}</h4>
                          <p className="text-sm font-medium text-gray-400 flex items-center gap-1 mt-1">
                            <IoLocationOutline className="text-emerald-500" /> {task.address}
                          </p>
                        </div>
                        <span className="text-xs font-black text-gray-300 italic tracking-widest">#{task.id}</span>
                      </div>

                      <div className="flex items-center gap-3 py-3 px-5 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                        <IoBicycleOutline className="text-gray-400" size={20} />
                        <p className="text-sm font-bold text-gray-600">{task.items}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                        <a href={`tel:${task.phone}`} className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 text-gray-600 rounded-2xl font-black text-xs hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm active:scale-95">
                          <IoCallOutline size={18} /> Call
                        </a>
                        <button className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 text-gray-600 rounded-2xl font-black text-xs hover:bg-emerald-50 hover:text-emerald-600 transition-all shadow-sm active:scale-95">
                          <IoNavigateCircleOutline size={18} /> Guide
                        </button>

                        {task.status === "Assigned" ? (
                          <button
                            onClick={() => updateStatus(task.id, "In Transit")}
                            className="col-span-2 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.1em] shadow-xl shadow-gray-200 hover:bg-blue-600 transition-all active:scale-95"
                          >
                            Start Journey
                          </button>
                        ) : (
                          <button
                            onClick={() => updateStatus(task.id, "Delivered")}
                            className="col-span-2 py-4 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.1em] shadow-xl shadow-emerald-100 hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 active:scale-95"
                          >
                            <IoCheckmarkDoneOutline size={18} /> Finish Delivery
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {tasks.length === 0 && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-24 bg-white/40 backdrop-blur-md rounded-[4rem] border border-dashed border-gray-200">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                <IoBicycleOutline size={48} />
              </div>
              <h3 className="text-2xl font-black text-gray-400 tracking-tight">No active shipments</h3>
              <p className="text-gray-300 text-sm mt-2">Take a break or wait for new assignments.</p>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}