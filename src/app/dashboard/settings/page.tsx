"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  HiOutlineTranslate,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineColorSwatch,
  HiOutlineCloud,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
} from "react-icons/hi";

type WeatherState = {
  temp: number | string;
  condition: string;
  city: string;
};

export default function SettingsPage() {
  const [time, setTime] = useState<Date>(new Date());
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [unit] = useState<string>("°C");

  const [weather, setWeather] = useState<WeatherState>({
    temp: "--",
    condition: "Syncing...",
    city: "Barishal",
  });

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => setTime(new Date()), 1000);

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current_weather=true`
        );
        const data = await res.json();

        setWeather({
          temp: Math.round(data.current_weather.temperature), // ✅ number allowed now
          condition:
            data.current_weather.weathercode < 3 ? "Clear Sky" : "Cloudy",
          city: "Dhaka, BD",
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
    <div className="min-h-screen py-12 px-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">

          {/* Header */}
          <header>
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter">
              Settings<span className="text-green-500">.</span>
            </h1>
          </header>

          {/* Clock */}
          <div className="flex gap-3 items-center">
            <HiOutlineClock className="text-3xl opacity-80" />
            <div>
              <h2 className="text-xl font-black">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h2>
              <p className="text-xs uppercase font-bold">
                {time.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>
            </div>
          </div>

          {/* Weather */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-cyan-400 p-8 rounded-[3rem] text-white"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase opacity-80">
                  <HiOutlineLocationMarker /> {weather.city}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black">
                    {weather.temp}
                  </span>
                  <span className="text-2xl opacity-70">{unit}</span>
                </div>

                <p className="text-lg font-bold">{weather.condition}</p>
              </div>

              <HiOutlineCloud className="text-[8rem] opacity-20" />
            </div>
          </motion.div>

          {/* Language */}
          <div className="p-6 border rounded-[2.5rem]">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineTranslate className="text-2xl text-green-600" />
              <span className="font-black">Language</span>
            </div>

            <div id="google_translate_element" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 space-y-6">

          {/* Analytics */}
          <div className="p-6 rounded-[3rem] border">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineChartBar className="text-green-500" />
              <span className="text-xs font-black">Soil Health</span>
            </div>

            <div className="flex gap-2 items-end h-20">
              <div className="w-2 bg-green-500 h-12" />
              <div className="w-2 bg-green-400 h-16" />
              <div className="w-2 bg-green-600 h-10" />
              <div className="w-2 bg-green-300 h-20" />
            </div>
          </div>

          {/* System */}
          <div className="p-6 rounded-[3rem] border">
            <HiOutlineShieldCheck className="text-2xl text-blue-500 mb-3" />
            <p className="font-black text-xs uppercase">System Secure</p>
            <p className="text-xs text-gray-500">Auto backup active</p>
          </div>

          <button className="w-full py-5 bg-green-600 text-white font-black rounded-[2.5rem]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}