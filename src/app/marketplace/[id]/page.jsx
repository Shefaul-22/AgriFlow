"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IoChevronBackOutline, IoHeartOutline, IoBagAddOutline, 
  IoLocationOutline, IoShieldCheckmarkOutline, IoStar,
  IoLeafOutline, IoFlashOutline, IoShieldCheckmark
} from "react-icons/io5";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  // ডামি প্রোডাক্ট ডেটা
  const product = {
    name: "Organic Red Tomatoes",
    price: 120,
    unit: "kg",
    rating: 4.8,
    reviews: 124,
    stock: 45,
    description: "Freshly harvested organic tomatoes from the heart of Bogra. No pesticides used, 100% natural and rich in vitamins. Perfect for your daily salads and cooking.",
    seller: "Rahim’s Agro Farm",
    location: "Bogra, Bangladesh",
    tags: ["Organic", "Fresh", "High Demand"],
    images: ["🍅", "🥗", "🥘"]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Top Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <button className="p-3 bg-gray-50 rounded-2xl text-gray-600 hover:bg-gray-100 transition-all">
          <IoChevronBackOutline size={24} />
        </button>
        <div className="flex gap-3">
          <button className="p-3 bg-gray-50 rounded-2xl text-gray-600 hover:text-rose-500 transition-all">
            <IoHeartOutline size={24} />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Image Gallery Section */}
        <section className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-emerald-50 rounded-[3.5rem] flex items-center justify-center text-[10rem] shadow-inner relative overflow-hidden"
          >
             <span className="relative z-10">{product.images[0]}</span>
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/40 blur-[80px] rounded-full"></div>
          </motion.div>
          
          <div className="flex gap-4 justify-center">
            {product.images.map((img, i) => (
              <div key={i} className="w-20 h-20 bg-gray-50 border-2 border-transparent hover:border-green-500 rounded-2xl flex items-center justify-center text-3xl cursor-pointer transition-all">
                {img}
              </div>
            ))}
          </div>
        </section>

        {/* Right: Product Content Section */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-100 flex items-center gap-1">
                <IoLeafOutline /> {product.tags[0]}
              </span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-yellow-100 flex items-center gap-1">
                <IoFlashOutline /> {product.tags[2]}
              </span>
            </div>
            
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">
              {product.name} <span className="text-yellow-600">.</span>
            </h1>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center text-yellow-500">
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-gray-200"/>
                <span className="ml-2 text-gray-800 font-bold">{product.rating}</span>
              </div>
              <span className="text-gray-400 font-medium text-sm">({product.reviews} customer reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-green-600">৳{product.price}</span>
            <span className="text-gray-400 font-bold">/ {product.unit}</span>
          </div>

          <p className="text-gray-500 font-medium leading-relaxed max-w-lg">
            {product.description}
          </p>

          {/* Seller Card */}
          <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm italic text-green-600 font-black">R</div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-1">
                   {product.seller} <IoShieldCheckmark className="text-blue-500" size={16}/>
                </h4>
                <p className="text-xs text-gray-400 flex items-center gap-1 font-medium"><IoLocationOutline /> {product.location}</p>
              </div>
            </div>
            <button className="text-xs font-black uppercase tracking-widest text-green-600 hover:underline">Visit Store</button>
          </div>

          {/* Checkout Controls */}
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center bg-gray-100 p-2 rounded-2xl border border-gray-200">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all"
                >–</button>
                <span className="w-12 text-center font-black">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all"
                >+</button>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="text-green-600">{product.stock} units</span> left in stock
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-3 active:scale-95">
                <IoBagAddOutline size={20}/> Add to Basket
              </button>
              <button className="px-10 bg-gray-900 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-black transition-all active:scale-95">
                Buy Now
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><IoShieldCheckmarkOutline size={20}/></div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Quality Verified</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><IoFlashOutline size={20}/></div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Fast Delivery</span>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}