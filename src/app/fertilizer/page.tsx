"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { StaticImageData } from "next/image";

// ইমেজের পাথ আপনার প্রোজেক্ট অনুযায়ী ঠিক আছে ধরে নিচ্ছি
import compost from "../Images/compost.png";
import compostcreate from "../Images/compostcreate.png";
import flower from "../Images/flower.jpg";

export default function FertilizerPage() {
  const texts: string[] = [
    "নাইট্রোজেন সার কীভাবে ব্যবহার করবেন",
    "কোন ফসলের জন্য কোন সার ভালো",
    "কম্পোস্ট তৈরির সহজ উপায়",
    "ফসলের ফলন বাড়ানোর কৌশল",
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

      <main className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
        
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
              <span className="font-medium tracking-wide">কৃষকদের জন্য সম্পূর্ণ গাইড</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
              সারের সম্পূর্ণ গাইড
              <br />
              <span className="text-emerald-400">সবজি ও ফসলের জন্য</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mt-6 h-10 transition-all duration-500">
              <span className="inline-block animate-fade-in-up">
                {texts[index]}
              </span>
            </p>
          </div>
        </section>

        {/* TYPES OF FERTILIZER */}
        <section className="py-20 px-6 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
              সারের প্রধান প্রকারভেদ
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              ৬টি গুরুত্বপূর্ণ সার যা বাংলাদেশের কৃষকরা বেশি ব্যবহার করেন
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fertilizer Card Component Logic */}
              {[
                { emoji: "🟢", title: "নাইট্রোজেন সার (Urea)", desc: "পাতা সবুজ করে, দ্রুত বৃদ্ধি ঘটায়।", use: "পালং, ধান, গম, লেটুস" },
                { emoji: "🟠", title: "ফসফরাস সার (TSP / SSP)", desc: "শিকড় মজবুত করে, ফুল-ফল বাড়ায়।", use: "টমেটো, আলু, বেগুন" },
                { emoji: "🔵", title: "পটাশিয়াম সার (MOP)", desc: "রোগ প্রতিরোধ ক্ষমতা বাড়ায়, ফলের মান উন্নত করে।", use: "কলা, মরিচ, আম, লাউ" },
                { emoji: "⚪", title: "DAP (Diammonium Phosphate)", desc: "নাইট্রোজেন + ফসফরাস একসাথে। চারা গজানোর জন্য ভালো।", use: "সবজি চারা, ধান, ভুট্টা" },
                { emoji: "🟡", title: "TSP (Triple Super Phosphate)", desc: "উচ্চ ফসফরাস। শিকড় ও ফলন বাড়াতে কার্যকর।", use: "আলু, টমেটো, বেগুন, ফুলকপি" },
                { emoji: "🔷", title: "MOP (Muriate of Potash)", desc: "পটাশিয়ামের প্রধান উৎস। মান উন্নত করে।", use: "লাউ, ঢেঁড়স, মরিচ, কলা" },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-5xl mb-6">{item.emoji}</div>
                  <h3 className="text-2xl font-semibold mb-3 dark:text-emerald-400">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  <p className="mt-4 text-emerald-700 dark:text-emerald-300 font-medium italic">উপযোগী: {item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VEGETABLE GUIDE SECTION */}
        <section className="py-20 bg-emerald-50 dark:bg-slate-800/50 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">সবজির জন্য সেরা সারের পরামর্শ</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">জনপ্রিয় সবজির জন্য কোন সার বেশি উপকারী</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "🍅", name: "টমেটো / বেগুন", tips: "TSP + MOP + সামান্য Urea। ফল ধরার সময় পটাশ বেশি দিন।" },
                { icon: "🥬", name: "পালং শাক / লেটুস", tips: "Urea বা Nitrogen-rich সার। পাতা বড় করতে এটি সেরা।" },
                { icon: "🥔", name: "আলু", tips: "TSP + MOP + DAP। শিকড় ও কন্দ বড় করতে ফসফরাস জরুরি।" },
                { icon: "🍆", name: "লাউ / ঢেঁড়স / শিম", tips: "MOP + TSP। ফলন বেশি হতে পটাশিয়াম খুব জরুরি।" },
                { icon: "🥦", name: "বাঁধাকপি / ফুলকপি", tips: "Balanced NPK। Nitrogen দিয়ে পাতা, Phosphorus দিয়ে মাথা।" },
                { icon: "🌶️", name: "মরিচ / ধনিয়া", tips: "MOP + সামান্য TSP। পটাশিয়াম ফলের গুণ বাড়ায়।" },
              ].map((veg, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow dark:shadow-slate-900 hover:shadow-xl transition border border-transparent dark:border-slate-700">
                  <div className="text-4xl mb-4">{veg.icon}</div>
                  <h3 className="font-semibold text-xl mb-2 dark:text-emerald-400">{veg.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{veg.tips}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPOST SECTION */}
        <section className="py-20 bg-white dark:bg-slate-900 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">কম্পোস্ট সার তৈরির পদ্ধতি</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              ঘরের সহজ উপকরণ ব্যবহার করে প্রাকৃতিক সার তৈরি করার সম্পূর্ণ প্রক্রিয়া
            </p>

            {/* IMAGE 1 */}
            <div className="mb-12">
              <img
                src={(compostcreate as StaticImageData).src}
                alt="Compost Materials"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border dark:border-slate-700"
              />
            </div>

            {/* Materials + Benefits */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-emerald-50 dark:bg-slate-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 dark:text-emerald-400">কি কি লাগবে</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• সবজির খোসা</li>
                  <li>• শুকনা পাতা</li>
                  <li>• গোবর</li>
                  <li>• রান্নাঘরের বর্জ্য</li>
                </ul>
              </div>

              <div className="bg-emerald-50 dark:bg-slate-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 dark:text-emerald-400">উপকারিতা</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ মাটির উর্বরতা বৃদ্ধি করে</li>
                  <li>✓ পানি ধরে রাখার ক্ষমতা বাড়ায়</li>
                  <li>✓ সম্পূর্ণ প্রাকৃতিক ও নিরাপদ</li>
                  <li>✓ রাসায়নিক সারের প্রয়োজন কমায়</li>
                </ul>
              </div>
            </div>

            {/* IMAGE 2 */}
            <div className="mb-16">
              <img
                src={(compost as StaticImageData).src}
                alt="Compost Process"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border dark:border-slate-700"
              />
            </div>

            {/* Step by Step */}
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "ধাপ ১: উপকরণ সংগ্রহ", desc: "রান্নাঘরের বর্জ্য, পাতা, খড় এবং গোবর সংগ্রহ করুন।" },
                { step: "ধাপ ২: স্তর তৈরি", desc: "শুকনা ও ভেজা উপকরণ স্তরে স্তরে সাজান।" },
                { step: "ধাপ ৩: মাটি ও পানি যোগ", desc: "হালকা মাটি দিন এবং আর্দ্র রাখুন।" },
                { step: "ধাপ ৪: উল্টানো", desc: "প্রতি ৫-৭ দিনে একবার নেড়ে দিন যাতে বাতাস প্রবেশ করে।" },
                { step: "ধাপ ৫: প্রস্তুত", desc: "৩-৬ সপ্তাহ পরে কালো, গন্ধহীন কম্পোস্ট তৈরি হবে।" },
              ].map((step, index) => (
                <div key={index} className="p-6 border dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
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