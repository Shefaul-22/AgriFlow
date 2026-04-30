"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoClipboardOutline,
  IoLocationOutline,
  IoCubeOutline,
  IoChevronForwardOutline,
  IoFlashOutline,
  IoBicycleOutline,
} from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";

export default function AssignedOrders() {
  const [assignedOrders, setAssignedOrders] = useState([
    {
      id: "ORD-5521",
      customer: "Zahid Hasan",
      location: "Banani, Dhaka",
      items: "3kg Organic Guava",
      reward: "৳65",
    },
    {
      id: "ORD-5522",
      customer: "Meherun Nesa",
      location: "Gulshan 2, Dhaka",
      items: "10kg Winter Wheat",
      reward: "৳120",
    },
  ]);

  return (
    <div className="min-h-screen bp-4 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold flex tracking-tight text-green-600">
              <MdAssignmentAdd className="" /> New{" "}
              <span className="text-yellow-600">.</span>Orders
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Accept new deliveries to start earning.
            </p>
          </div>
          <div className="hidden md:block bg-blue-50 text-blue-600 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest border border-blue-100">
            {assignedOrders.length} Pending
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          <AnimatePresence>
            {assignedOrders.length > 0 ? (
              assignedOrders.map((order, i) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon Box */}
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      <IoCubeOutline size={28} />
                    </div>

                    {/* Order Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md uppercase tracking-tighter">
                          {order.id}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                          {order.customer}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <IoLocationOutline className="text-blue-500" />{" "}
                          {order.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <IoBicycleOutline className="text-emerald-500" />{" "}
                          Delivery Reward:{" "}
                          <span className="text-gray-800 font-bold">
                            {order.reward}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 active:scale-95 group">
                      Accept Order{" "}
                      <IoChevronForwardOutline className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Order Content Info */}
                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-gray-400 italic">
                    <IoFlashOutline className="text-amber-500" /> Items:{" "}
                    {order.items}
                  </div>
                </motion.div>
              ))
            ) : (
              /* Empty State */
              <div className="bg-white border-2 border-dashed border-gray-100 p-20 text-center rounded-[3rem]">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoClipboardOutline size={40} className="text-gray-200" />
                </div>
                <h3 className="text-xl font-bold text-gray-400">
                  All caught up!
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Wait for new orders to be assigned by admin.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
