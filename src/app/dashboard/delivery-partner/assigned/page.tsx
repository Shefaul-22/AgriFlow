"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoClipboardOutline,
  IoLocationOutline,
  IoCubeOutline,
  IoChevronForwardOutline,
  IoFlashOutline,
  IoBicycleOutline
} from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";

// Strictly typed to match your Prisma "Delivery" model structure
interface Delivery {
  id: number;
  trackingId: string;
  customer: string;
  address: string;
  phone: string;
  items: string;
  reward: number; // Float from Prisma
  status: "ASSIGNED" | "IN_TRANSIT" | "DELIVERED" | "CANCELLED";
  riderId: number | null;
  createdAt: string;
  updatedAt: string;
}

export default function AssignedOrders() {
  const [orders, setOrders] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/delivery/assigned");
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching assigned orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleAcceptOrder = async (deliveryId: number) => {
    try {
      // Sends updates matching your schema to your backend endpoint
      await axios.patch(`/api/delivery/accept`, { deliveryId });

      // Optimistically remove accepted order from the unassigned/assigned view list
      setOrders(prevOrders => prevOrders.filter(order => order.id !== deliveryId));
    } catch (error) {
      console.error("Failed to accept order:", error);
    }
  };

  return (
    <div className="min-h-screen bp-4 p-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold flex tracking-tight text-green-600 gap-1 items-center">
              <MdAssignmentAdd /> New <span className="text-yellow-600">.</span>Orders
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Accept new deliveries to start earning.
            </p>
          </div>
          {!loading && (
            <div className="hidden md:block bg-blue-50 text-blue-600 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest border border-blue-100">
              {orders.length} Pending
            </div>
          )}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-10 text-gray-400 font-medium animate-pulse">
              Loading active orders...
            </div>
          ) : (
            <AnimatePresence>
              {orders.length > 0 ? (
                orders.map((order, i) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
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
                          {/* Uses your Prisma trackingId string */}
                          <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md uppercase tracking-tighter">
                            {order.trackingId}
                          </span>
                          <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                            {order.customer}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <IoLocationOutline className="text-blue-500" />{" "}
                            {order.address} {/* Mapped from location -> address */}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <IoBicycleOutline className="text-emerald-500" />{" "}
                            Delivery Reward:{" "}
                            <span className="text-gray-800 font-bold">
                              ৳{order.reward} {/* Formats Float with currency prefix */}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleAcceptOrder(order.id)}
                        className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 active:scale-95 group"
                      >
                        Accept Order{" "}
                        <IoChevronForwardOutline className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Order Content Info */}
                    <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 italic">
                      <div className="flex items-center gap-2">
                        <IoFlashOutline className="text-amber-500" /> Items: {order.items}
                      </div>
                      {/* Added Contact Details from schema */}
                      <div className="text-gray-400 not-italic font-medium">
                        Contact: {order.phone}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                /* Empty State */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border-2 border-dashed border-gray-100 p-20 text-center rounded-[3rem]"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IoClipboardOutline size={40} className="text-gray-200" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400">
                    All caught up!
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Wait for new orders to be assigned by admin.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
