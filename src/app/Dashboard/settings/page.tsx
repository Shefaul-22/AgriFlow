"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineTranslate,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineBell,
} from "react-icons/hi";

export default function SettingsPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold dark:text-white tracking-tight">
          Settings
        </h1>
        <p className="text-gray-500">
          Manage your farm preferences and system configuration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Language & Regional */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                <HiOutlineTranslate className="text-xl" />
              </div>
              <h2 className="text-lg font-bold dark:text-white">
                Language & Region
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-zinc-700">
                <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
                  Select System Language
                </label>
                <div className="w-full  p-1">
                  <div
                    id="google_translate_element"
                    className="w-full "
                  ></div>
                </div>
                <p className="mt-3 text-[11px] text-gray-500 italic">
                  * Note: Selecting a language will translate the entire
                  dashboard automatically.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 dark:border-zinc-800 flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm dark:text-white">
                    Real-time Translation
                  </p>
                  <p className="text-xs text-gray-500">
                    Automatically sync with global agricultural news
                  </p>
                </div>
                {/* Custom Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Notifications Card */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                <HiOutlineBell className="text-xl" />
              </div>
              <h2 className="text-lg font-bold dark:text-white">
                Notifications
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Receive smart alerts for crop health, price drops, and live farm
              tours.
            </p>
            <button className="px-6 py-2.5 bg-zinc-100 dark:bg-zinc-800 font-bold text-sm rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all">
              Configure Alerts
            </button>
          </section>
        </div>

        {/* Right Column: Time Widget */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-emerald-800 via-green-700 to-green-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-green-200/50 dark:shadow-none"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                <HiOutlineClock className="text-2xl" />
              </div>
              <HiOutlineGlobeAlt className="text-xl opacity-60" />
            </div>

            <div className="space-y-2">
              <p className="text-5xl font-black tracking-tighter">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <div className="flex flex-col opacity-90">
                <span className="text-sm font-bold uppercase tracking-widest">
                  {time.toLocaleDateString("en-US", { weekday: "long" })}
                </span>
                <span className="text-xs font-medium">
                  {time.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-emerald-100">
                <span>System Health</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-xs font-bold mt-1">Live Sync: Dhaka, BD</p>
            </div>
          </motion.div>

          {/* Quick Info */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Timezone
            </p>
            <div className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-bold">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="text-sm leading-none">Asia/Dhaka</p>
                <p className="text-[10px] text-gray-400 font-medium">
                  GMT +6:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="px-10 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-[1.02] active:scale-95">
          Save Settings
        </button>
      </div>
    </div>
  );
}
