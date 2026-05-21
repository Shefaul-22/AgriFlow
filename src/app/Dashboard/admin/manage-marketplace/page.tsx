"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoStorefrontOutline,
  IoSearchOutline,
  IoTrashOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoImageOutline,
  IoLeafOutline,
} from "react-icons/io5";

type Product = {
  id: number;
  name: string;
  seller: string;
  price: string;
  stock: string;
  category: string;
  status: "Active" | "Pending" | "Rejected";
};

const ManageMarketplace = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Premium Basmati Rice", seller: "Karim Uddin", price: "৳120/kg", stock: "500kg", category: "Grains", status: "Active" },
    { id: 2, name: "Organic Honey", seller: "Anika Ahmed", price: "৳850/kg", stock: "20kg", category: "Organic", status: "Pending" },
    { id: 3, name: "Fresh Red Chili", seller: "Rahat Khan", price: "৳60/kg", stock: "100kg", category: "Vegetables", status: "Active" },
    { id: 4, name: "Natural Fertilizer", seller: "AgriTech Ltd", price: "৳45/kg", stock: "1000kg", category: "Supplies", status: "Rejected" },
  ]);

  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((p) => {
    const matchesFilter = filter === "All" || p.status === filter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.seller.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const updateStatus = (id: number, newStatus: Product["status"]) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  const deleteProduct = (id: number) => {
    if (window.confirm("Delete this product from marketplace?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-10 text-gray-600 font-sans bg-gray-50/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-green-600 flex items-center gap-3 tracking-tighter">
              <IoStorefrontOutline /> Marketplace Manager
            </h1>
            <p className="text-gray-400 font-medium mt-1">
              Audit products, manage listings and ensure quality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <IoSearchOutline
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search products/sellers..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64 shadow-sm"
              />
            </div>

            <select
              onChange={(e) => setFilter(e.target.value)}
              className="px-6 py-3 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 font-bold text-sm shadow-sm cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  <IoImageOutline size={48} className="text-gray-300" />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        product.status === "Active"
                          ? "bg-green-500/10 text-green-600 border-green-200"
                          : product.status === "Pending"
                          ? "bg-amber-500/10 text-amber-600 border-amber-200"
                          : "bg-rose-500/10 text-rose-600 border-rose-200"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <IoLeafOutline className="text-green-500" /> {product.category}
                  </p>

                  <p className="text-lg font-black text-green-600 mt-2">
                    {product.price}
                  </p>

                  <div className="flex gap-2 mt-6">
                    {product.status !== "Active" && (
                      <button
                        onClick={() => updateStatus(product.id, "Active")}
                        className="flex-1 bg-green-50 text-green-600 py-2 rounded-xl text-xs font-bold"
                      >
                        <IoCheckmarkCircleOutline /> Approve
                      </button>
                    )}

                    {product.status === "Pending" && (
                      <button
                        onClick={() => updateStatus(product.id, "Rejected")}
                        className="flex-1 bg-rose-50 text-rose-600 py-2 rounded-xl text-xs font-bold"
                      >
                        <IoCloseCircleOutline /> Reject
                      </button>
                    )}

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-3 bg-gray-50 text-gray-400 rounded-xl"
                    >
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <h3 className="text-xl font-bold text-gray-400">
              No products found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMarketplace;