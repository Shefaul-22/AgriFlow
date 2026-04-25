"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { StaticImageData } from "next/image";

import compost from "../Images/compost.png";
import compostcreate from "../Images/compostcreate.png";
import flower from "../Images/flower.jpg";

export default function FertilizerPage() {
  const texts: string[] = [
    "How to use nitrogen fertilizer",
    "Which fertilizer is best for which crop",
    "Easy way to make compost",
    "Techniques to increase crop yield",
  ];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <Navbar />

      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section
          className="relative py-28 md:py-40 text-center text-white overflow-hidden"
          style={{
            backgroundImage: `url(${(flower as StaticImageData).src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

          <div className="relative max-w-5xl mx-auto px-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/30">
              <span className="text-3xl">🌱</span>
              <span className="font-medium tracking-wide">Complete Guide for Farmers</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
              Complete Fertilizer Guide
              <br />
              <span className="text-emerald-400">For Vegetables and Crops</span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mt-6 h-10 transition-all duration-500">
              <span className="inline-block animate-fade-in-up">
                {texts[index]}
              </span>
            </p>
          </div>
        </section>

        {/* TYPES OF FERTILIZER */}
        <section className="py-20 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
              Main Types of Fertilizers
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              6 important fertilizers commonly used by farmers in Bangladesh
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { emoji: "🟢", title: "Nitrogen Fertilizer (Urea)", desc: "Makes leaves green and promotes rapid growth.", use: "Spinach, rice, wheat, lettuce" },
                { emoji: "🟠", title: "Phosphorus Fertilizer (TSP / SSP)", desc: "Strengthens roots and increases flowers and fruits.", use: "Tomato, potato, eggplant" },
                { emoji: "🔵", title: "Potassium Fertilizer (MOP)", desc: "Improves disease resistance and fruit quality.", use: "Banana, chili, mango, gourd" },
                { emoji: "⚪", title: "DAP (Diammonium Phosphate)", desc: "Nitrogen + Phosphorus together. Good for seedlings.", use: "Vegetable seedlings, rice, corn" },
                { emoji: "🟡", title: "TSP (Triple Super Phosphate)", desc: "High phosphorus. Effective for root and yield growth.", use: "Potato, tomato, eggplant, cauliflower" },
                { emoji: "🔷", title: "MOP (Muriate of Potash)", desc: "Main source of potassium. Improves quality.", use: "Gourd, okra, chili, banana" },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white dark:bg-gray-800 border border-emerald-100 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-trangray-y-1">
                  <div className="text-5xl mb-6">{item.emoji}</div>
                  <h3 className="text-2xl font-semibold mb-3 dark:text-emerald-400">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  <p className="mt-4 text-emerald-700 dark:text-emerald-300 font-medium italic">Best for: {item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VEGETABLE GUIDE SECTION */}
        <section className="py-20 bg-emerald-50 dark:bg-gray-800/50 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
              Best Fertilizer Guide for Vegetables
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Which fertilizer works best for popular vegetables
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "🍅", name: "Tomato / Eggplant", tips: "TSP + MOP + small amount of Urea. Increase potassium during fruiting." },
                { icon: "🥬", name: "Spinach / Lettuce", tips: "Urea or nitrogen-rich fertilizer. Best for leafy growth." },
                { icon: "🥔", name: "Potato", tips: "TSP + MOP + DAP. Phosphorus is essential for root and tuber growth." },
                { icon: "🍆", name: "Gourd / Okra / Beans", tips: "MOP + TSP. Potassium is very important for high yield." },
                { icon: "🥦", name: "Cabbage / Cauliflower", tips: "Balanced NPK. Nitrogen for leaves, phosphorus for head formation." },
                { icon: "🌶️", name: "Chili / Coriander", tips: "MOP + small amount of TSP. Potassium improves fruit quality." },
              ].map((veg, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow dark:shadow-gray-900 hover:shadow-xl transition border border-transparent dark:border-gray-700">
                  <div className="text-4xl mb-4">{veg.icon}</div>
                  <h3 className="font-semibold text-xl mb-2 dark:text-emerald-400">{veg.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{veg.tips}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPOST SECTION */}
        <section className="py-20 bg-white dark:bg-gray-900 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
              How to Make Compost Fertilizer
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Complete process of making natural fertilizer using simple household materials
            </p>

            <div className="mb-12">
              <img
                src={(compostcreate as StaticImageData).src}
                alt="Compost Materials"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border dark:border-gray-700"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 dark:text-emerald-400">কি কি লাগবে</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Vegetable peels</li>
                  <li>• Dry leaves</li>
                  <li>• Cow dung</li>
                  <li>• Kitchen waste</li>
                </ul>
              </div>

              <div className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 dark:text-emerald-400">উপকারিতা</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Improves soil fertility</li>
                  <li>✓ Increases water retention</li>
                  <li>✓ Completely natural and safe</li>
                  <li>✓ Reduces need for chemical fertilizers</li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <img
                src={(compost as StaticImageData).src}
                alt="Compost Process"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border dark:border-gray-700"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "Step 1: Collect Materials", desc: "Gather kitchen waste, leaves, straw, and cow dung." },
                { step: "Step 2: Create Layers", desc: "Arrange dry and wet materials in layers." },
                { step: "Step 3: Add Soil & Water", desc: "Add a little soil and keep it moist." },
                { step: "Step 4: Turn the Pile", desc: "Turn it every 5–7 days to allow air circulation." },
                { step: "Step 5: Ready", desc: "After 3–6 weeks, dark and odorless compost will be ready." },
              ].map((step, index) => (
                <div key={index} className="p-6 border dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold text-lg dark:text-emerald-400">{step.step}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}