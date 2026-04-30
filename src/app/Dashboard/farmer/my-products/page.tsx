"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoPencilOutline, IoTrashOutline, IoLeaf, 
  IoFunnelOutline, IoSearchOutline, IoStatsChartOutline,
  IoAlertCircleOutline, IoCloseOutline, IoCheckmarkCircleOutline
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
  const [maxPrice, setMaxPrice] = useState(500);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCategory = categoryFilter === 'All' || product.category === categoryFilter;
      const matchPrice = product.price <= maxPrice;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    });
  }, [categoryFilter, maxPrice, searchQuery, products]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      ...editingProduct,
      name: formData.get('name'),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      category: formData.get('category')
    };
    
    setProducts(products.map(p => p.id === editingProduct.id ? updatedData : p));
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen p-6 md:p-12 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              My <span className="text-green-600">Inventory</span>
            </h1>
            <p className="text-gray-600 font-medium mt-2">Manage your farm produce and stock levels.</p>
          </motion.div>

          <div className="relative group w-full lg:max-w-md">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search produce name..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm ${
              isFilterOpen ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border border-gray-100'
            }`}
          >
            <IoFunnelOutline /> {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl">
                    <span className="text-[10px] font-black uppercase text-green-700">{product.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-2xl font-black text-green-600 mb-4">৳{product.price}<span className="text-xs text-gray-400 font-bold">/{product.unit}</span></p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`w-2 h-2 rounded-full ${product.stock < 100 ? 'bg-orange-500' : 'bg-green-500'}`} />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.stock} {product.unit} In Stock</span>
                  </div>

                  <div className="mt-auto space-y-2">
                    <button 
                      onClick={() => setEditingProduct(product)}
                      className="w-full bg-gray-900 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95"
                    >
                      <IoPencilOutline /> Edit Item
                    </button>
                    <button 
                      onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                      className="w-full bg-red-50 text-red-500 py-3 rounded-2xl font-bold text-sm hover:bg-red-500 flex items-center justify-center gap-2 hover:text-white transition-all"
                    >
                      <IoTrashOutline /> Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Edit Product Modal (POP-UP) --- */}
        <AnimatePresence>
          {editingProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay / Background Dim */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setEditingProduct(null)}
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
              />
              
              {/* Modal Card */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl overflow-hidden"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-gray-800">Edit Product</h3>
                    <p className="text-sm text-gray-400 font-medium">Update your inventory details</p>
                  </div>
                  <button onClick={() => setEditingProduct(null)} className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                    <IoCloseOutline size={24} />
                  </button>
                </div>

                <form onSubmit={handleUpdateProduct} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Product Name</label>
                        <input name="name" defaultValue={editingProduct.name} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold text-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Category</label>
                        <select name="category" defaultValue={editingProduct.category} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold text-gray-700 cursor-pointer">
                          <option>Vegetables</option>
                          <option>Fruits</option>
                          <option>Grains</option>
                          <option>Supplies</option>
                        </select>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Price (৳)</label>
                        <input name="price" type="number" defaultValue={editingProduct.price} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold text-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Stock Amount</label>
                        <input name="stock" type="number" defaultValue={editingProduct.stock} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold text-gray-700" />
                      </div>
                   </div>

                   <div className="pt-4 flex gap-3">
                      <button type="button" onClick={() => setEditingProduct(null)} className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all">Cancel</button>
                      <button type="submit" className="flex-[2] bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-2 active:scale-95">
                        <IoCheckmarkCircleOutline size={20}/> Save Changes
                      </button>
                   </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default MyProducts;