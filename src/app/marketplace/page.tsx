"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  MapPinIcon,
} from "lucide-react";

import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  seller: string;
  image: string;
};

export default function MarketplacePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch Products From Database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter Products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      p.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Loading UI
  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-green-700">
          Loading Products...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">

            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-green-800">
                Agri Marketplace
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Fresh and safe products directly from farmers
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-[450px]">
              <input
                type="text"
                placeholder="Search products (e.g: mango, rice, tomato...)"
                className="w-full pl-14 pr-6 py-5 rounded-[20px] border-none shadow-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <HiMagnifyingGlassCircle className="w-7 h-7 text-gray-400 absolute left-5 top-5" />
            </div>
          </div>

          {/* Categories */}
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
                {cat === "All"
                  ? "All Products"
                  : cat === "Vegetable"
                  ? "Vegetables"
                  : cat === "Fruit"
                  ? "Fruits"
                  : "Grains"}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-[520px]"
              >

                {/* Image */}
                <div className="relative h-60 min-h-[240px] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).src =
                        "https://via.placeholder.com/500?text=Product+Image";
                    }}
                  />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-green-700 shadow-sm">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">

                  <div className="flex justify-between items-start mb-2">

                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="text-right">
                      <p className="text-green-700 font-black text-2xl">
                        ৳{product.price}
                      </p>

                      <p className="text-gray-400 text-[10px] font-bold whitespace-nowrap">
                        per {product.unit}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2.5 mb-6 mt-4 text-gray-500 text-sm">

                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                      {product.location}
                    </div>

                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 flex items-center justify-center bg-gray-100 rounded-full text-[10px]">
                        👤
                      </span>

                      Seller:
                      <span className="font-semibold ml-1 text-gray-700">
                        {product.seller}
                      </span>
                    </div>
                  </div>

            
{/* View Details Button */}
<div className="mt-auto">

  <Link href={`/marketplace/${product.id}`}>

    <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95">

      View Details

    </button>
  </Link>
</div>

                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">

              <div className="text-8xl mb-6">
                🏜️
              </div>

              <h3 className="text-2xl font-bold text-gray-400">
                Sorry, no products found!
              </h3>

              <p className="text-gray-400 mt-2">
                Try searching with a different name.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}