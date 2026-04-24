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
  {
    id: 1,
    name: "Organic Tomato",
    category: "Vegetable",
    price: 60,
    unit: "kg",
    location: "Sylhet",
    seller: "Karim Mia",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fresh Cauliflower",
    category: "Vegetable",
    price: 40,
    unit: "piece",
    location: "Bogura",
    seller: "Rahim Sheikh",
    image: "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sweet Pumpkin",
    category: "Vegetable",
    price: 30,
    unit: "kg",
    location: "Jashore",
    seller: "Arif Hossain",
    image: "https://images.unsplash.com/photo-1506504093444-245f7823555c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Green Chili",
    category: "Vegetable",
    price: 120,
    unit: "kg",
    location: "Rangpur",
    seller: "Jasim Uddin",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Himsagar Mango",
    category: "Fruit",
    price: 150,
    unit: "kg",
    location: "Rajshahi",
    seller: "Abdur Rob",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Lychee (Bombay)",
    category: "Fruit",
    price: 400,
    unit: "100 pcs",
    location: "Dinajpur",
    seller: "Sagor Ali",
    image: "https://images.unsplash.com/photo-1610450519764-aba3d03ed9a6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Sabri Banana",
    category: "Fruit",
    price: 80,
    unit: "dozen",
    location: "Narsingdi",
    seller: "Sumon Mia",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e12b?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Red Malta",
    category: "Fruit",
    price: 220,
    unit: "kg",
    location: "Sylhet",
    seller: "Faruk Ahmed",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Nazirshail Rice",
    category: "Grain",
    price: 75,
    unit: "kg",
    location: "Naogaon",
    seller: "Motaleb Ali",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Red Flour",
    category: "Grain",
    price: 55,
    unit: "kg",
    location: "Kushtia",
    seller: "Mokbul Hossain",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Lentils (Masoor Dal)",
    category: "Grain",
    price: 130,
    unit: "kg",
    location: "Faridpur",
    seller: "Habib Bhai",
    image: "https://images.unsplash.com/photo-1545114197-013145464161?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Mustard Seeds",
    category: "Grain",
    price: 90,
    unit: "kg",
    location: "Pabna",
    seller: "Aslam Sheikh",
    image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=500&auto=format&fit=crop",
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
      <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-green-800">Agri Marketplace</h1>
              <p className="text-gray-500 mt-2 text-lg">Fresh and safe products directly from farmers</p>
            </div>
            
            <div className="relative w-full md:w-[450px]">
              <input
                type="text"
                placeholder="Search products (e.g: mango, rice, tomato...)"
                className="w-full pl-14 pr-6 py-5 rounded-[20px] border-none shadow-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="w-7 h-7 text-gray-400 absolute left-5 top-5" />
            </div>
          </div>

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
                {cat === "All" ? "All Products" : cat === "Vegetable" ? "Vegetables" : cat === "Fruit" ? "Fruits" : "Grains"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-[520px]"
              >
                <div className="relative h-60 min-h-[240px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/500?text=Product+Image";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-green-700 shadow-sm">
                    {product.category}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-green-700 font-black text-2xl">৳{product.price}</p>
                      <p className="text-gray-400 text-[10px] font-bold whitespace-nowrap">per {product.unit}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6 mt-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                      {product.location}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 flex items-center justify-center bg-gray-100 rounded-full text-[10px]">👤</span>
                      Seller: <span className="font-semibold ml-1 text-gray-700">{product.seller}</span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md active:scale-95 group/btn">
                      <ShoppingBagIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                      Order Now
                    </button>
                    
                    <button className="w-full bg-slate-50 text-gray-600 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all text-sm">
                      <ShoppingCartIcon className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <div className="text-8xl mb-6">🏜️</div>
              <h3 className="text-2xl font-bold text-gray-400">Sorry, no products found!</h3>
              <p className="text-gray-400 mt-2">Try searching with a different name.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}