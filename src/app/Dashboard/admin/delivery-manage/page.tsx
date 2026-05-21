"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoRocketOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoChevronForwardOutline,
  IoCubeOutline,
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

type Delivery = {
  id: string;
  product: string;
  destination: string;
  rider: string;
  status: string;
  progress: number;
  time: string;
};

type StatCardProps = {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
};

const DeliveryManage = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: "TRK-9021",
      product: "Organic Tomatoes",
      destination: "Dhaka, BD",
      rider: "Sabbir Hossain",
      status: "In Transit",
      progress: 65,
      time: "2h left",
    },
    {
      id: "TRK-8842",
      product: "Fresh Watermelon",
      destination: "Barishal, BD",
      rider: "Kamal Ahmed",
      status: "Processing",
      progress: 20,
      time: "1 day",
    },
    {
      id: "TRK-7710",
      product: "Winter Wheat",
      destination: "Sylhet, BD",
      rider: "Not Assigned",
      status: "Pending",
      progress: 5,
      time: "---",
    },
    {
      id: "TRK-6650",
      product: "Green Chilies",
      destination: "Chittagong, BD",
      rider: "Tanvir Khan",
      status: "Delivered",
      progress: 100,
      time: "Completed",
    },
  ]);

  const [filter, setFilter] = useState<string>("All");

  const updateStatus = (id: string, newStatus: string) => {
    setDeliveries((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              status: newStatus,
              progress: newStatus === "Delivered" ? 100 : d.progress,
            }
          : d
      )
    );
  };

  const filteredDeliveries =
    filter === "All"
      ? deliveries
      : deliveries.filter((d) => d.status === filter);

  return (
    <div className="min-h-screen p-4 md:p-10 text-gray-600 font-sans bg-gray-50/30">
      <div className="max-w-7xl mx-auto">

        {/* Top Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-emerald-600 flex items-center gap-3 tracking-tighter">
              <IoRocketOutline className="animate-bounce" /> Logistics Hub
            </h1>
            <p className="text-gray-400 font-medium mt-1">
              Monitor and manage AgriFlow supply chain.
            </p>
          </div>

          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
            {["All", "Pending", "In Transit", "Delivered"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                  filter === tab
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100"
                    : "text-gray-400 hover:text-emerald-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard label="Total Shipments" value="128" icon={IoCubeOutline} color="text-emerald-600" />
          <StatCard label="In Transit" value="14" icon={IoRocketOutline} color="text-blue-500" />
          <StatCard label="Delayed" value="03" icon={IoAlertCircleOutline} color="text-rose-500" />
          <StatCard label="Success Rate" value="98%" icon={IoCheckmarkCircleOutline} color="text-purple-500" />
        </div>

        {/* List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredDeliveries.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg">
                        {item.id}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.product}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-emerald-500" />
                        {item.destination}
                      </div>
                      <div className="flex items-center gap-2">
                        <IoTimeOutline className="text-emerald-500" />
                        {item.time}
                      </div>
                      <div className="italic">{item.rider}</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="w-full lg:w-64 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold">{item.status}</span>
                      <span className="text-sm font-black">{item.progress}%</span>
                    </div>

                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Action */}
                  <select
                    onChange={(e) => updateStatus(item.id, e.target.value)}
                    defaultValue={item.status}
                    className="bg-gray-50 border rounded-xl px-4 py-2 text-xs font-bold"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                  </select>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* ✅ FIXED STAT CARD */
const StatCard = ({ label, value, icon: Icon, color }: StatCardProps) => (
  <div className="bg-white p-6 rounded-[2rem] border shadow-sm flex items-center gap-4">
    <div className={`p-3 rounded-2xl bg-gray-50 ${color}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase">
        {label}
      </p>
      <h4 className="text-xl font-black text-gray-800">{value}</h4>
    </div>
  </div>
);

export default DeliveryManage;