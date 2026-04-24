"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  HiOutlineTranslate,
  HiOutlineClock,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineColorSwatch,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
} from "react-icons/hi";

export default function SettingsPage() {
  const [time, setTime] = useState(new Date());
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [unit, setUnit] = useState("°C");
  const [weather, setWeather] = useState({ temp: "--", condition: "Syncing...", city: "Barishal" });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);

    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current_weather=true`);
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          condition: data.current_weather.weathercode < 3 ? "Clear Sky" : "Cloudy",
          city: "Dhaka, BD"
        });
      } catch (err) {
        console.error("Weather failed", err);
      }
    };

    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen py-12 px-4 transition-all duration-500 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (8 units) */}
        <div className="lg:col-span-8 space-y-6">
          <header className="mb-10">
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter ">
              Settings<span className="text-green-500">.</span>
            </h1>
            <p className="font-semibold mt-2">Personalize your AgriFlow experience.</p>
          </header>
          <div className='flex gap-2'>
            <HiOutlineClock className="text-3xl mb-2 opacity-80" />
          <div>
              <h2 className="text-xl md:text-2xl font-black tracking-tighter mb-2">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h2>
            <p className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest">
              {time.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-8 rounded-[3rem] text-white shadow-2xl shadow-blue-500/20"
          >
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                  <HiOutlineLocationMarker className="animate-bounce" /> {weather.city}
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="text-7xl font-black">{weather.temp}</span>
                    <span className="text-3xl font-bold opacity-70">{unit}</span>
                </div>
                <p className="text-xl font-bold mt-2 opacity-90">{weather.condition}</p>
              </div>
              <HiOutlineCloud className="text-[10rem] opacity-20 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* 2. Compact Grid for Language & Units */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Language Section */}
             <motion.div whileHover={{ y: -5 }} className="p-7  rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6 ">
                  <div className="p-3 bg-green-200 text-green-600 rounded-2xl">
                    <HiOutlineTranslate className="text-2xl" />
                  </div>
                  <span className="font-black tracking-tight ">Language</span>
                </div>
                <div id="google_translate_element" className="google-ui-fix mb-4" />
                <p className="text-[11px] text-gray-400 font-medium italic">* Translate AgriFlow to your local language.</p>
             </motion.div>
          </div>

          {/* 3. Appearance Card */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-white dark:bg-zinc-900 p-7 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-5">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 rounded-3xl">
                    <HiOutlineColorSwatch className="text-3xl" />
                </div>
                <div>
                    <h4 className="font-black text-lg dark:text-white">Interface Theme</h4>
                    <p className="text-sm text-gray-400">Switch between light and dark world.</p>
                </div>
            </div>
            <div className="flex bg-gray-100 dark:bg-zinc-800 p-1.5 rounded-2xl w-full md:w-auto">
                <button onClick={() => setTheme('light')} className={`flex-1 md:px-8 py-3 rounded-xl font-bold text-xs transition-all ${theme === 'light' ? 'bg-white text-black shadow-lg' : 'text-gray-400'}`}>LIGHT</button>
                <button onClick={() => setTheme('dark')} className={`flex-1 md:px-8 py-3 rounded-xl font-bold text-xs transition-all ${theme === 'dark' ? 'bg-zinc-700 text-white shadow-lg' : 'text-gray-400'}`}>DARK</button>
            </div>
          </motion.div>
        </div>

        {/* Right Column (4 units) */}
        <div className="lg:col-span-4 space-y-6">   

          {/* New Analytics Card (Filling space) */}
          <div className="bg-white p-8 rounded-[3rem] border border-gray-100 dark:border-zinc-800">
             <div className="flex items-center gap-3 mb-6">
                <HiOutlineChartBar className="text-xl text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Soil Health Index</span>
             </div>
             <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div className="w-3 h-12 bg-gray-100  rounded-full overflow-hidden"><div className="w-full h-[80%] bg-green-500 mt-auto" /></div>
                    <div className="w-3 h-16 bg-gray-100 rounded-full overflow-hidden"><div className="w-full h-[60%] bg-green-400 mt-auto" /></div>
                    <div className="w-3 h-10 bg-gray-100 rounded-full overflow-hidden"><div className="w-full h-[90%] bg-green-600 mt-auto" /></div>
                    <div className="w-3 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden"><div className="w-full h-[40%] bg-green-300 mt-auto" /></div>
                    <div className="w-3 h-14 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden"><div className="w-full h-[75%] bg-green-500 mt-auto" /></div>
                </div>
                <div className="pt-4 border-t border-gray-50 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-xs font-bold dark:text-gray-400">Overall Status</span>
                    <span className="text-xs font-black text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-md">EXCELLENT</span>
                </div>
             </div>
          </div>

          {/* System Status */}
          <div className="p-8 rounded-[3rem] border border-gray-100 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <HiOutlineShieldCheck className="text-2xl text-blue-500" />
              <div className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
            </div>
            <p className="text-xs font-black  uppercase tracking-tighter">System fully encrypted</p>
            <p className="text-[10px] text-gray-600 mt-1 font-medium">Last backup: 2 mins ago</p>
          </div>

          <button className="w-full py-6 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] font-black text-lg transition-all shadow-xl shadow-green-500/30 hover:scale-[0.98] active:scale-95">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}