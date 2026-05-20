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
  IoAlertCircleOutline,
} from "react-icons/io5";

type TaskStatus = "Assigned" | "In Transit" | "Delivered";

type Task = {
  id: string;
  customer: string;
  address: string;
  phone: string;
  status: TaskStatus;
  items: string;
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

  // ✅ FIXED HERE
  const updateStatus = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <IoBicycleOutline size={30} className="text-emerald-600" />
            <div>
              <h1 className="text-2xl font-black text-emerald-900">
                Hello <span className="text-gray-600">Rider</span>
              </h1>
              <p className="text-xs text-gray-500">Active Rider</p>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <IoTimeOutline className="text-blue-500" /> Current Tasks
          </h2>

          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6"
              >

                {/* Status */}
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-xl">
                    {task.status}
                  </span>
                  <span className="text-xs text-gray-300">#{task.id}</span>
                </div>

                {/* Info */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800">{task.customer}</h3>
                  <p className="text-sm text-gray-500">{task.address}</p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">

                  <a
                    href={`tel:${task.phone}`}
                    className="py-3 bg-gray-50 text-center rounded-xl text-sm font-bold"
                  >
                    Call
                  </a>

                  {task.status === "Assigned" ? (
                    <button
                      onClick={() => updateStatus(task.id, "In Transit")}
                      className="py-3 bg-blue-600 text-white rounded-xl text-sm font-bold"
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={() => updateStatus(task.id, "Delivered")}
                      className="py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold"
                    >
                      Complete
                    </button>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}