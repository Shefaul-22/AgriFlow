"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Countries Connected", value: "124+" },
  { label: "Trust Score Verified", value: "99.9%" },
  { label: "Trade Facilitated", value: "$2.4B+" },
];

const State = () => {
  return (
    <section className="w-full py-14 border-y border-gray-200 dark:border-gray-300 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-1"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 dark:text-green-500">
                {stat.value}
              </h2>
              <p className="text-desc-gray text-xs sm:text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default State;