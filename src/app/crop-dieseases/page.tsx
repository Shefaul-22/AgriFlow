"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

type Disease = {
  name: string;
  cropType: string;
  category: "Crop" | "Fruit" | "Vegetable";
  symptoms: string;
  causes: string;
  remedy: string;
};

const diseases: Disease[] = [
  // --- CROPS (আগের ও নতুন ৪টি) ---
  {
    name: "Rice Blast",
    cropType: "Rice (ধান)",
    category: "Crop",
    symptoms: "পাতায় দাগ, ধীরে ধীরে শুকিয়ে যাওয়া, গাছ দুর্বল হয়ে পড়া।",
    causes: "ছত্রাক (Fungus), বেশি আর্দ্রতা ও নাইট্রোজেন সার বেশি ব্যবহার।",
    remedy: "ট্রাইসাইক্লাজল স্প্রে, আক্রান্ত পাতা অপসারণ, সঠিক সার ব্যবস্থাপনা।",
  },
  {
    name: "Wheat Rust",
    cropType: "Wheat (গম)",
    category: "Crop",
    symptoms: "পাতায় হলদে বা লালচে পাউডারের মতো দাগ পড়া।",
    causes: "ছত্রাক সংক্রমণ (Puccinia fungus)।",
    remedy: "প্রোপিকোনাজল স্প্রে করা এবং রোগ প্রতিরোধী জাত ব্যবহার করা।",
  },
  {
    name: "Jute Stem Rot",
    cropType: "Jute (পাট)",
    category: "Crop",
    symptoms: "কাণ্ডে কালো দাগ এবং কাণ্ড পচে যাওয়া।",
    causes: "অতিরিক্ত বৃষ্টিপাত ও ছত্রাক আক্রমণ।",
    remedy: "কার্বেন্ডাজিম দিয়ে বীজ শোধন এবং জমি পরিষ্কার রাখা।",
  },
  {
    name: "Maize Leaf Blight",
    cropType: "Maize (ভুট্টা)",
    category: "Crop",
    symptoms: "পাতায় লম্বাটে ধূসর দাগ, পরে পাতা পুড়ে যাওয়ার মতো দেখায়।",
    causes: "ছত্রাক (Helminthosporium)।",
    remedy: "আক্রান্ত পাতা পুড়িয়ে ফেলা এবং ম্যানকোজেব স্প্রে করা।",
  },
  {
    name: "Mustard Alternaria Blight",
    cropType: "Mustard (সরিষা)",
    category: "Crop",
    symptoms: "পাতায় ও ফলে গাঢ় বাদামী গোলাকার দাগ।",
    causes: "ছত্রাক ও কুয়াশাচ্ছন্ন আবহাওয়া।",
    remedy: "আইপ্রোডিয়ন বা রোভরাল স্প্রে করা।",
  },

  // --- FRUITS (আগের ও নতুন ২টি) ---
  {
    name: "Mango Anthracnose",
    cropType: "Mango (আম)",
    category: "Fruit",
    symptoms: "ফলের উপর কালো দাগ, পচন শুরু হওয়া।",
    causes: "ছত্রাক সংক্রমণ, বেশি আর্দ্রতা।",
    remedy: "ম্যানকোজেব স্প্রে, পরিষ্কার বাগান রাখা।",
  },
  {
    name: "Citrus Canker",
    cropType: "Lemon (লেবু)",
    category: "Fruit",
    symptoms: "পাতা ও ফলে বাদামী খসখসে দাগ।",
    causes: "Bacterial infection।",
    remedy: "কপার অক্সিক্লোরাইড স্প্রে, আক্রান্ত অংশ কেটে ফেলা।",
  },
  {
    name: "Jackfruit Soft Rot",
    cropType: "Jackfruit (কাঁঠাল)",
    category: "Fruit",
    symptoms: "কচি ফল পচে যাওয়া এবং কালো হয়ে ঝরে পড়া।",
    causes: "ছত্রাক (Rhizopus artocarpi)।",
    remedy: "ফল পলিথিন দিয়ে ঢাকা (ব্যাগিং) এবং ডাইথেন এম-৪৫ স্প্রে করা।",
  },
  {
    name: "Papaya Ring Spot",
    cropType: "Papaya (পেঁপে)",
    category: "Fruit",
    symptoms: "পাতায় মোজাইক দাগ, পাতা ছোট ও কুঁকড়ে যাওয়া।",
    causes: "ভাইরাস ও জাব পোকা (Aphid)।",
    remedy: "আক্রান্ত গাছ তুলে ফেলা এবং সাবান জল বা টিডো স্প্রে করা।",
  },

  // --- VEGETABLES (আগের সবজিগুলো) ---
  {
    name: "Tomato Leaf Curl",
    cropType: "Tomato (টমেটো)",
    category: "Vegetable",
    symptoms: "পাতা কুঁকড়ে যাওয়া, গাছ ছোট হয়ে যাওয়া।",
    causes: "Whitefly insect, virus।",
    remedy: "ইনসেক্টিসাইড ব্যবহার, নেট দিয়ে ঢেকে চাষ করা।",
  },
  {
    name: "Brinjal Fruit Borer",
    cropType: "Brinjal (বেগুন)",
    category: "Vegetable",
    symptoms: "ফলের ভিতরে গর্ত, কাণ্ড নষ্ট হয়ে যাওয়া।",
    causes: "Insect larva attack।",
    remedy: "ফেরোমোন ট্র্যাপ ব্যবহার, আক্রান্ত ফল ধ্বংস করা।",
  },
  {
    name: "Clubroot",
    cropType: "Cauliflower (ফুলকপি)",
    category: "Vegetable",
    symptoms: "শিকড় ফুলে যাওয়া, গাছ নেতিয়ে পড়া।",
    causes: "Soil-borne fungus।",
    remedy: "চুন প্রয়োগ এবং শস্য পর্যায় অনুসরণ।",
  },
  {
    name: "Black Rot",
    cropType: "Cabbage (বাঁধাকপি)",
    category: "Vegetable",
    symptoms: "পাতার কিনারায় 'V' আকৃতির দাগ।",
    causes: "Bacteria।",
    remedy: "বীজ শোধন ও বাগান পরিষ্কার রাখা।",
  },
  {
    name: "Downy Mildew",
    cropType: "Ridge Gourd (ঝিঙা)",
    category: "Vegetable",
    symptoms: "পাতার নিচে ধূসর আস্তরণ ও উপরে হলুদ ছোপ।",
    causes: "ছত্রাক সংক্রমণ।",
    remedy: "ম্যানকোজেব বা রিডোমিল গোল্ড স্প্রে করা।",
  },
  {
    name: "Carrot Blight",
    cropType: "Carrot (গাজর)",
    category: "Vegetable",
    symptoms: "পাতার চারপাশ পুড়ে যাওয়া বা শুকিয়ে যাওয়া।",
    causes: "ছত্রাক সংক্রমণ।",
    remedy: "সঠিক দূরত্বে চাষ এবং ছত্রাকনাশক স্প্রে।",
  },
];

export default function CropDiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDiseases = diseases.filter((d) => {
    const matchesSearch =
      d.cropType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || d.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <Navbar/>
<div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
    
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 mb-4">
         Agri-Care 
          </h1>
          <p className="text-gray-600 text-lg italic">
            সবজি, ফল ও ফসলের রোগ এবং প্রতিকারের সঠিক সমাধান
          </p>
        </header>

        {/* অনুসন্ধান এবং ফিল্টার বার */}
        <div className="bg-white p-4 rounded-3xl shadow-lg mb-10 flex flex-col md:flex-row gap-4 border border-green-100">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="সার্চ করুন (উদাহরণ: ধান, আম, বেগুন...)"
              className="w-full p-4 pl-6 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="p-4 rounded-2xl bg-green-700 text-white font-semibold cursor-pointer outline-none hover:bg-green-800 transition"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">সব ক্যাটাগরি</option>
            <option value="Crop">ফসল (Crop)</option>
            <option value="Fruit">ফল (Fruit)</option>
            <option value="Vegetable">সবজি (Vegetable)</option>
          </select>
        </div>

        {/* ডাটা গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map((disease, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                        disease.category === "Crop"
                          ? "bg-blue-100 text-blue-600"
                          : disease.category === "Fruit"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {disease.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium italic">
                      For growing fresh food
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {disease.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-4 text-sm">
                    {disease.cropType}
                  </p>

                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="block font-bold text-gray-900 mb-1">
                         লক্ষণ (Symptoms):
                      </span>
                      <p className="text-gray-600 leading-relaxed italic">
                        {disease.symptoms}
                      </p>
                    </div>

                    <div className="text-sm">
                      <span className="block font-bold text-gray-900 mb-1">
                     কারণ (Causes):
                      </span>
                      <p className="text-gray-600">{disease.causes}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 border-t border-green-100">
                  <span className="block font-bold text-green-800 text-sm mb-1 uppercase tracking-tight">
                 প্রতিকার (Remedy):
                  </span>
                  <p className="text-green-900 font-medium text-sm leading-relaxed">
                    {disease.remedy}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400">
                দুঃখিত, কোনো তথ্য পাওয়া যায়নি!
              </h3>
              <p className="text-gray-400">বানান সঠিক আছে কিনা চেক করুন।</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}