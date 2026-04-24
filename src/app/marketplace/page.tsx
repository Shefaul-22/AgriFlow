"use client";

import React, { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  MapPinIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";

type Product = {
  id: number;
  name: string;
  category: "Vegetable" | "Fruit" | "Grain";
  price: number;
  unit: string;
  location: string;
  seller: string;
  image: string;
};

const products: Product[] = [
  // Vegetables (সবজি)
  {
    id: 1,
    name: "অর্গানিক টমেটো",
    category: "Vegetable",
    price: 60,
    unit: "কেজি",
    location: "সিলেট",
    seller: "করিম মিয়া",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "তাজা ফুলকপি",
    category: "Vegetable",
    price: 40,
    unit: "পিস",
    location: "বগুড়া",
    seller: "রহিম শেখ",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ecf?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "মিষ্টি কুমড়া",
    category: "Vegetable",
    price: 30,
    unit: "কেজি",
    location: "যশোর",
    seller: "আরিফ হোসেন",
    image: "https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "কাঁচা মরিচ",
    category: "Vegetable",
    price: 120,
    unit: "কেজি",
    location: "রংপুর",
    seller: "জসিম উদ্দিন",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=500&auto=format&fit=crop",
  },

  // Fruits (ফল)
  {
    id: 5,
    name: "হিমসাগর আম",
    category: "Fruit",
    price: 150,
    unit: "কেজি",
    location: "রাজশাহী",
    seller: "আব্দুর রব",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "লিচু (বোম্বাই)",
    category: "Fruit",
    price: 400,
    unit: "১০০ পিস",
    location: "দিনাজপুর",
    seller: "সাগর আলী",
    image: "https://images.unsplash.com/photo-1601055283742-ce346fcc7f41?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "সবরি কলা",
    category: "Fruit",
    price: 80,
    unit: "ডজন",
    location: "নরসিংদী",
    seller: "সুমন মিয়া",
    image: "https://images.unsplash.com/photo-1571771894821-ad99024177c8?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "লাল মাল্টা",
    category: "Fruit",
    price: 220,
    unit: "কেজি",
    location: "সিলেট",
    seller: "ফারুক আহমেদ",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=500&auto=format&fit=crop",
  },

  // Grains (শস্য)
  {
    id: 9,
    name: "নাজিরশাইল চাল",
    category: "Grain",
    price: 75,
    unit: "কেজি",
    location: "নওগাঁ",
    seller: "মোতালেব আলী",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "লাল আটা",
    category: "Grain",
    price: 55,
    unit: "কেজি",
    location: "কুষ্টিয়া",
    seller: "মকবুল হোসেন",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "মসুর ডাল",
    category: "Grain",
    price: 130,
    unit: "কেজি",
    location: "ফরিদপুর",
    seller: "হাবিব ভাই",
    image: "https://images.unsplash.com/photo-1585996769400-cc683b84120f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "সরিষার দানা",
    category: "Grain",
    price: 90,
    unit: "কেজি",
    location: "পাবনা",
    seller: "আসলাম শেখ",
    image: "https://images.unsplash.com/photo-1596450514735-3756b6200230?q=80&w=500&auto=format&fit=crop",
  },
];

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-green-800">এগ্রি-মার্কেটপ্লেস</h1>
              <p className="text-gray-500 mt-2 text-lg">সরাসরি কৃষকের মাঠ থেকে টাটকা ও নিরাপদ পণ্য</p>
            </div>
            
            <div className="relative w-full md:w-[450px]">
              <input
                type="text"
                placeholder="পণ্য খুঁজুন (যেমন: আম, চাল, টমেটো...)"
                className="w-full pl-14 pr-6 py-5 rounded-[20px] border-none shadow-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="w-7 h-7 text-gray-400 absolute left-5 top-5" />
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex overflow-x-auto gap-4 mb-10 pb-4 no-scrollbar">
            {["All", "Vegetable", "Fruit", "Grain"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3.5 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-green-600 text-white shadow-lg scale-105" 
                    : "bg-white text-gray-500 hover:bg-green-50 border border-gray-100"
                }`}
              >
                {cat === "All" ? "সব পণ্য" : cat === "Vegetable" ? "সবজি" : cat === "Fruit" ? "ফল" : "শস্য"}
              </button>
            ))}
          </div>

          {/* Marketplace Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-green-700 shadow-sm">
                    {product.category === "Vegetable" ? "সবজি" : product.category === "Fruit" ? "ফল" : "শস্য"}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-green-700 font-black text-2xl">৳{product.price}</p>
                      <p className="text-gray-400 text-[10px] font-bold">প্রতি {product.unit}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-8 mt-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                      {product.location}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 flex items-center justify-center bg-gray-100 rounded-full text-[10px]">👤</span>
                      বিক্রেতা: <span className="font-semibold ml-1 text-gray-700">{product.seller}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md active:scale-95 group/btn">
                      <ShoppingBagIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                      সরাসরি অর্ডার করুন
                    </button>
                    
                    <button className="w-full bg-gray-50 text-gray-600 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all text-sm">
                      <ShoppingCartIcon className="w-4 h-4" />
                      কার্টে যোগ করুন
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Search Result */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <div className="text-8xl mb-6">🏜️</div>
              <h3 className="text-2xl font-bold text-gray-400">দুঃখিত, কোনো পণ্য পাওয়া যায়নি!</h3>
              <p className="text-gray-400 mt-2">অন্য কোনো নামে সার্চ করে দেখুন।</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}