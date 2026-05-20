"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoBicycleOutline,
  IoLocationOutline,
  IoCallOutline,
  IoCheckmarkDoneOutline,
  IoTimeOutline,
  IoNavigateCircleOutline,
  IoWalletOutline,
} from "react-icons/io5";

type TaskStatus = "Assigned" | "In Transit" | "Delivered";

type Task = {
  id: string;
  customer: string;
  address: string;
  phone: string;
  status: TaskStatus;
  items: string;
  img: string;
};

export default function RiderDashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "DLV-101",
      customer: "Arif Ahmed",
      address: "Dhanmondi, Dhaka",
      phone: "017XXXXXXXX",
      status: "Assigned",
      items: "5kg Rice, 2kg Onion",
      img: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=100&h=100&fit=crop",
    },
    {
      id: "DLV-102",
      customer: "Sultana Razia",
      address: "Mirpur 10, Dhaka",
      phone: "018XXXXXXXX",
      status: "In Transit",
      items: "10kg Mangoes",
      img: "https://images.unsplash.com/photo-1619333183591-848466fbd8a3?w=100&h=100&fit=crop",
    },
  ]);

  // ✅ FIXED: proper types added
  const updateStatus = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between bg-white p-6 rounded-2xl mb-12">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
              className="w-16 h-16 rounded-3xl object-cover border-4 border-white shadow-xl"
              alt="Rider"
            />
            <div>
              <h1 className="text-2xl font-black text-gray-800">
                Hello, <span className="text-emerald-600">Rider</span>
              </h1>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Master Rider • AgriFlow
              </p>
            </div>
          </div>

          <button className="p-4 bg-white rounded-2xl shadow-sm text-gray-400">
            <IoWalletOutline size={20} />
          </button>
        </div>

        {/* Tasks */}
        <div className="space-y-6">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <IoTimeOutline className="text-blue-500" />
              Live Shipments
            </h2>

            <span className="text-xs font-black text-blue-500 bg-blue-50 px-4 py-2 rounded-full">
              {tasks.length} Active Tasks
            </span>
          </div>

          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-xl overflow-hidden"
              >
                <div className="p-8 flex flex-col lg:flex-row gap-8">

                  <img
                    src={task.img}
                    className="w-28 h-28 rounded-[2rem] object-cover shadow-lg"
                    alt="shipment"
                  />

                  <div className="flex-1 space-y-4">

                    <div className="flex justify-between">
                      <h4 className="text-2xl font-black">{task.customer}</h4>
                      <span className="text-xs font-bold text-gray-300">
                        #{task.id}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <IoLocationOutline /> {task.address}
                    </p>

                    <p className="text-sm font-bold text-gray-700">
                      {task.items}
                    </p>

                    <div className="flex gap-3">

                      <a
                        href={`tel:${task.phone}`}
                        className="px-4 py-2 bg-gray-100 rounded-xl text-sm"
                      >
                        <IoCallOutline /> Call
                      </a>

                      {task.status === "Assigned" ? (
                        <button
                          onClick={() =>
                            updateStatus(task.id, "In Transit")
                          }
                          className="px-4 py-2 bg-black text-white rounded-xl text-sm"
                        >
                          Start Journey
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updateStatus(task.id, "Delivered")
                          }
                          className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm"
                        >
                          <IoCheckmarkDoneOutline /> Finish
                        </button>
                      )}

                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}