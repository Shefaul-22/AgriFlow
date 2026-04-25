"use client";
import React from "react";
import { motion } from "framer-motion";
import { Leaf, AlertTriangle, CheckCircle, Droplets } from "lucide-react";

const crops = [
  { name: "Rice", health: "Good", percent: 85, icon: Leaf },
  { name: "Wheat", health: "Moderate", percent: 60, icon: Droplets },
  { name: "Corn", health: "Critical", percent: 30, icon: AlertTriangle },
  { name: "Vegetables", health: "Excellent", percent: 95, icon: CheckCircle },
];

const Page = () => {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-[var(--background)] text-[var(--foreground)]">

      {/* 🌾 Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-500">
          Crop Health Monitor
        </h1>
        <p className=" mt-1">
          Real-time insights into your crop conditions
        </p>
      </motion.div>

      {/* 🌿 Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop, index) => {
          const Icon = crop.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className=" p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-green-500" />
                <h2 className="font-bold text-lg">{crop.name}</h2>
              </div>

              {/* Health Status */}
              <p className="text-sm mb-2">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    crop.percent > 80
                      ? "text-green-500"
                      : crop.percent > 50
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {crop.health}
                </span>
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${crop.percent}%` }}
                  transition={{ duration: 1 }}
                  className={`h-3 rounded-full ${
                    crop.percent > 80
                      ? "bg-green-500"
                      : crop.percent > 50
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                />
              </div>

              <p className="text-xs mt-2 text-gray-500">
                Health Score: {crop.percent}%
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* 🌧 Extra Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10  p-6 rounded-2xl"
      >
        <h3 className="font-bold text-lg mb-2 text-green-600">
          Tips for Better Crop Health
        </h3>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>Ensure proper irrigation 💧</li>
          <li>Use balanced fertilizers 🌱</li>
          <li>Monitor pests regularly 🐛</li>
          <li>Check soil nutrients 🧪</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Page;