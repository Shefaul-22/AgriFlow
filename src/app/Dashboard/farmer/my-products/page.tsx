"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoPencilOutline, IoTrashOutline, IoLeaf, 
  IoFunnelOutline, IoSearchOutline, IoStatsChartOutline,
  IoAlertCircleOutline
} from "react-icons/io5";

const initialProducts = [
  { id: 2, name: 'Fresh Green Chili', price: 80, stock: 100, unit: 'kg', image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=600&auto=format&fit=crop', category: 'Vegetables' },
  { id: 3, name: 'Golden Wheat', price: 65, stock: 1000, unit: 'kg', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop', category: 'Grains' },
  { id: 4, name: 'Sweet Alphonso Mango', price: 250, stock: 200, unit: 'kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop', category: 'Fruits' },
  { id: 5, name: 'Natural Fertilizer', price: 45, stock: 50, unit: 'bags', image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=600&auto=format&fit=crop', category: 'Supplies' },
];

const MyProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [maxPrice, setMaxPrice] = useState(300);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCategory = categoryFilter === 'All' || product.category === categoryFilter;
      const matchPrice = product.price <= maxPrice;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    });
  }, [categoryFilter, maxPrice, searchQuery, products]);

  return (
    <div className="min-h-screen p-6 md:p-12 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation / Stats */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          
            <h1 className="text-5xl font-black tracking-tight text-green-500">
              My Inventory
            </h1>
          </motion.div>

          {/* Real-time Search Box */}
          <div className="relative group w-full lg:w-96">
            <IoSearchOutline className="absolute left-4 top-1/2 -trangray-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search produce name..."
              className="w-full border border-gray-600 hover:border-green-600 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

      {/* Filter Toggle Button */}
<div className="flex justify-end mb-6">
  <button 
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm ${
      isFilterOpen 
      ? 'bg-green-600 text-white shadow-green-200' 
      : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
    }`}
  >
    <IoFunnelOutline className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
    {isFilterOpen ? "Hide Filters" : "Show Filters"}
  </button>
</div>

{/* Animated Filter Section */}
<AnimatePresence>
  {isFilterOpen && (
    <motion.div 
      initial={{ height: 0, opacity: 0, scale: 0.95 }}
      animate={{ height: "auto", opacity: 1, scale: 1 }}
      exit={{ height: 0, opacity: 0, scale: 0.95 }}
      className="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Category Filters */}
        <div className="lg:col-span-8border border-gray-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-gray-400">
            <IoFunnelOutline /> <span className="text-xs font-bold uppercase tracking-widest">Quick Filters</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['All', 'Vegetables', 'Fruits', 'Grains', 'Supplies'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                  categoryFilter === cat 
                  ? 'bg-green-600 text-white shadow-xl shadow-green-600/30 scale-105' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        <div className="lg:col-span-4 my-2 md:my-4 bg-green-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-green-600/20 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-tighter opacity-80">Price Ceiling</span>
              <span className="text-2xl font-black">৳ {maxPrice}</span>
            </div>
            <input 
              type="range" min="0" max="500" value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between mt-2 text-[10px] font-bold opacity-60">
              <span>৳0</span>
              <span>৳500</span>
            </div>
          </div>  
          <IoStatsChartOutline className="absolute -right-4 -bottom-4 text-white/10 size-32 group-hover:scale-110 transition-transform duration-700" />
        </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        {/* Product Grid with Pop Animation */}
       <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  <AnimatePresence mode='popLayout'>
    {filteredProducts.map((product) => (
      <motion.div
        key={product.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 dark:border-zinc-800 flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          {/* Status Badge */}
          <div className="absolute top-5 left-5 bg-white/90 dark:bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-2xl shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-green-700 dark:text-green-400">
              {product.category}
            </span>
          </div>
          
          {/* Price Tag Floating */}
          <div className="absolute bottom-5 right-5 bg-green-600 px-4 py-2 rounded-2xl shadow-lg shadow-green-600/30">
            <span className="text-white font-black text-lg">৳{product.price}</span>
            <span className="text-green-100 text-[10px] ml-1">/{product.unit}</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-green-600 transition-colors truncate">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-6">
            <div className={`w-2 h-2 rounded-full ${product.stock < 150 ? 'bg-amber-500' : 'bg-green-500'}`} />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {product.stock} {product.unit} Available in stock
            </span>
          </div>

          {/* Action Buttons - Market Style */}
          <div className="mt-auto space-y-3">
            <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-95 group/btn">
              <IoPencilOutline className="w-5 h-5" />
              Edit Details
            </button>
            
            <button 
              onClick={() => setProducts(products.filter(p => p.id !== product.id))}
              className="w-full bg-red-50 dark:bg-red-500/10 text-red-500 py-3.5 rounded-[1.5rem] font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all text-sm"
            >
              <IoTrashOutline className="w-4 h-4" />
              Remove Item
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>

        {/* Improved Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
            <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <IoAlertCircleOutline size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No results found</h2>
            <p className="text-gray-400 max-w-xs mx-auto mt-2">We couldn't find any produce matching your current search or filters.</p>
            <button 
                onClick={() => {setCategoryFilter('All'); setMaxPrice(500); setSearchQuery("");}}
                className="mt-6 text-green-600 font-bold hover:underline"
            >
                Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;