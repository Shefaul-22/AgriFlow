"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Tractor,
  Leaf,
  Package,
  Droplets,
} from "lucide-react";

const inventoryItems = [
  { name: "Urea Fertilizer", qty: 120, icon: Droplets },
  { name: "Rice Seeds", qty: 80, icon: Sprout },
  { name: "Pesticide", qty: 45, icon: Leaf },
  { name: "Farming Tools", qty: 25, icon: Tractor },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Page = () => {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-[var(--background)] text-[var(--foreground)]">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-500">
          Inventory Dashboard
        </h1>
        <p className="mt-1">
          Manage your agricultural resources efficiently
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10"
      >
        {[
          { icon: Package, value: 270, label: "Total Items" },
          { icon: Sprout, value: 80, label: "Seeds" },
          { icon: Droplets, value: 120, label: "Fertilizers" },
          { icon: Tractor, value: 25, label: "Tools" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              variants={itemAnim}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl shadow"
            >
              <Icon className="text-green-500 mb-2" />
              <h2 className="text-xl font-bold">{stat.value}</h2>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inventory List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Inventory Items</h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {inventoryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl shadow "
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-green-500" />
                  <h3 className="font-bold">{item.name}</h3>
                </div>

                <p className="text-gray-500 text-sm">
                  Quantity:{" "}
                  <span className="font-semibold text-green-600">
                    {item.qty}
                  </span>
                </p>

                {/* Animated Progress Bar */}
                <div className="mt-3 w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(item.qty, 100)}%` }}
                    transition={{ duration: 1 }}
                    className="bg-green-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;