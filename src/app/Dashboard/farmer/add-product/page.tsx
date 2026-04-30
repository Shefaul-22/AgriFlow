"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCloudUploadOutline, IoLinkOutline, IoLeafOutline, IoImagesOutline } from "react-icons/io5";

const AddProduct = () => {
  const [uploadMethod, setUploadMethod] = useState('link'); 
  const [preview, setPreview] = useState(null);

  // ফাইল হ্যান্ডলার যা প্রিভিউ দেখাবে
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // লোকাল ফাইল থেকে একটি টেম্পোরারি URL তৈরি করা
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Submit Data:", data);
    alert("Product details submitted!");
  };

  return (
    <div className="min-h-screen p-4 md:p-10  text-gray-600 transition-all font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black flex items-center justify-center md:justify-start gap-3 text-green-600">
            <IoLeafOutline className="animate-bounce" /> Fresh Harvest
          </h1>
          <p className=" mt-2 font-medium">
            Fill in the details to list your organic produce.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Image Management */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <label className="block text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-gray-400">
                Product Image
              </label>
              
              {/* Method Switcher */}
              <div className="flex p-1 bg-gray-600 rounded-2xl mb-6">
                <button 
                  type="button"
                  onClick={() => { setUploadMethod('link'); setPreview(null); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${uploadMethod === 'link' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'}`}
                >
                  <IoLinkOutline size={16} /> Link
                </button>
                <button 
                  type="button"
                  onClick={() => { setUploadMethod('file'); setPreview(null); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${uploadMethod === 'file' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'}`}
                >
                  <IoImagesOutline size={16} /> Browse
                </button>
              </div>

              {/* Conditional Input */}
              <div className="space-y-4">
                {uploadMethod === 'link' ? (
                  <input 
                    name="imageLink"
                    type="url" 
                    placeholder="https://example.com/image.jpg"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    onChange={(e) => setPreview(e.target.value)}
                  />
                ) : (
                  <div className="relative group w-full aspect-square border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer overflow-hidden">
                     <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                        onChange={handleFileChange}
                     />
                     <div className="text-center">
                        <IoCloudUploadOutline size={32} className="text-gray-300 mx-auto mb-2 group-hover:text-green-500 transition-colors" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Click to Upload</span>
                     </div>
                  </div>
                )}

                {/* Preview Window */}
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-100 bg-gray-50 flex items-center justify-center">
                  {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">Preview Area</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product Name</label>
                <input name="name" required type="text" placeholder="Organic Tomatoes" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 font-medium" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Category</label>
                <select name="category" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 font-medium cursor-pointer">
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Grains</option>
                  <option>Fertilizers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Price (BDT / KG)</label>
                <div className="relative">
                    <span className="absolute left-4 top-3 font-bold text-green-600">৳</span>
                    <input name="price" required type="number" placeholder="120" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 pl-10 outline-none focus:ring-2 focus:ring-green-500 font-bold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Stock Availability</label>
                <input name="stock" required type="number" placeholder="500" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500 font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Detailed Description</label>
              <textarea name="description" rows="5" placeholder="Describe your harvest..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-medium resize-none"></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
            >
              List Product Now
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;