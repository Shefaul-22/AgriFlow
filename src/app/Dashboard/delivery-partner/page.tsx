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
    },
    {
      id: "DLV-102",
      customer: "Sultana Razia",
      address: "Mirpur 10, Dhaka",
      phone: "018XXXXXXXX",
      status: "In Transit",
      items: "10kg Mangoes",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  return (
    <div className="min-h-screen p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Rider Profile Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
              <IoBicycleOutline size={30} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight italic text-emerald-900 dark:text-emerald-500">
                Hello <span className="text-gray-600 font-light">Rider</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                Active Rider
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase">
              Today's Earnings
            </p>
            <h2 className="text-xl font-black text-gray-800">৳850</h2>
          </div>
        </div>

        {/* Task Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
            <IoTimeOutline className="text-blue-500" /> Current Tasks
          </h2>

          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={task.id}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                        task.status === "Assigned"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {task.status}
                    </span>
                    <span className="text-xs font-bold text-gray-300">
                      #{task.id}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                        <IoLocationOutline size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {task.customer}
                        </h4>
                        <p className="text-sm text-gray-500">{task.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                        <IoMapOutline size={20} />
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        {task.items}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <a
                      href={`tel:${task.phone}`}
                      className="flex items-center justify-center gap-2 py-4 bg-gray-50 text-gray-600 rounded-2xl font-black text-xs hover:bg-gray-100 transition-all"
                    >
                      <IoCallOutline size={18} /> Call
                    </a>
                    <button className="flex items-center justify-center gap-2 py-4 bg-gray-50 text-gray-600 rounded-2xl font-black text-xs hover:bg-gray-100 transition-all">
                      <IoNavigateCircleOutline size={18} /> Map
                    </button>

                    {task.status === "Assigned" ? (
                      <button
                        onClick={() => updateStatus(task.id, "In Transit")}
                        className="col-span-2 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                      >
                        Start Delivery
                      </button>
                    ) : (
                      <button
                        onClick={() => updateStatus(task.id, "Delivered")}
                        className="col-span-2 py-4 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                      >
                        <IoCheckmarkDoneOutline size={18} /> Complete
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {tasks.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
              <IoAlertCircleOutline
                size={48}
                className="mx-auto text-gray-200 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-400">
                No pending deliveries
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
