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
  imageUrl: string; 
};

const diseases: Disease[] = [
  // --- CROPS ---
  {
    name: "Rice Blast",
    cropType: "Rice",
    category: "Crop",
    symptoms: "Spots on leaves, gradual drying, plant becomes weak.",
    causes: "Fungus, high humidity, excessive nitrogen fertilizer use.",
    remedy: "Spray tricyclazole, remove infected leaves, proper fertilizer management.",
    imageUrl: "https://images.unsplash.com/photo-1536633310180-b0582a1346a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wheat Rust",
    cropType: "Wheat",
    category: "Crop",
    symptoms: "Yellow or reddish powder-like spots on leaves.",
    causes: "Fungal infection (Puccinia fungus).",
    remedy: "Spray propiconazole and use resistant varieties.",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jute Stem Rot",
    cropType: "Jute",
    category: "Crop",
    symptoms: "Black spots on stem and rotting.",
    causes: "Excess rainfall and fungal attack.",
    remedy: "Seed treatment with carbendazim and keep field clean.",
    imageUrl: "https://images.unsplash.com/photo-1505235687559-28b5f54645b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Maize Leaf Blight",
    cropType: "Maize",
    category: "Crop",
    symptoms: "Long gray spots on leaves, later looks burned.",
    causes: "Fungus (Helminthosporium).",
    remedy: "Burn infected leaves and spray mancozeb.",
    imageUrl: "https://images.unsplash.com/photo-1551197521-3e83ea2a1d79?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mustard Alternaria Blight",
    cropType: "Mustard",
    category: "Crop",
    symptoms: "Dark brown circular spots on leaves and fruits.",
    causes: "Fungus and foggy weather.",
    remedy: "Spray iprodione or rovral.",
    imageUrl: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?auto=format&fit=crop&w=800&q=80",
  },

  // --- FRUITS ---
  {
    name: "Mango Anthracnose",
    cropType: "Mango",
    category: "Fruit",
    symptoms: "Black spots on fruit, starting to rot.",
    causes: "Fungal infection, high humidity.",
    remedy: "Spray mancozeb and maintain orchard cleanliness.",
    imageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Citrus Canker",
    cropType: "Lemon",
    category: "Fruit",
    symptoms: "Brown rough spots on leaves and fruits.",
    causes: "Bacterial infection.",
    remedy: "Spray copper oxychloride and remove infected parts.",
    imageUrl: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jackfruit Soft Rot",
    cropType: "Jackfruit",
    category: "Fruit",
    symptoms: "Young fruits rot, turn black and fall.",
    causes: "Fungus (Rhizopus artocarpi).",
    remedy: "Cover fruits with polythene (bagging) and spray Dithane M-45.",
    imageUrl: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Papaya Ring Spot",
    cropType: "Papaya",
    category: "Fruit",
    symptoms: "Mosaic spots on leaves, leaves become small and curled.",
    causes: "Virus and aphid insects.",
    remedy: "Remove infected plants and spray soap water or pesticide.",
    imageUrl: "https://images.unsplash.com/photo-1610450519764-aba3d03ed9a6?auto=format&fit=crop&w=800&q=80",
  },

  // --- VEGETABLES ---
  {
    name: "Tomato Leaf Curl",
    cropType: "Tomato",
    category: "Vegetable",
    symptoms: "Leaves curl and plant becomes stunted.",
    causes: "Whitefly insect and virus.",
    remedy: "Use insecticides and grow under net protection.",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307bac?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brinjal Fruit Borer",
    cropType: "Brinjal",
    category: "Vegetable",
    symptoms: "Holes inside fruits, stem damage.",
    causes: "Insect larva attack.",
    remedy: "Use pheromone traps and destroy infected fruits.",
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f3900f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Clubroot",
    cropType: "Cauliflower",
    category: "Vegetable",
    symptoms: "Swollen roots and wilting plants.",
    causes: "Soil-borne fungus.",
    remedy: "Apply lime and follow crop rotation.",
    imageUrl: "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Black Rot",
    cropType: "Cabbage",
    category: "Vegetable",
    symptoms: "V-shaped spots on leaf edges.",
    causes: "Bacteria.",
    remedy: "Seed treatment and maintain garden hygiene.",
    imageUrl: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Downy Mildew",
    cropType: "Ridge Gourd",
    category: "Vegetable",
    symptoms: "Gray layer under leaves and yellow patches above.",
    causes: "Fungal infection.",
    remedy: "Spray mancozeb or ridomil gold.",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Carrot Blight",
    cropType: "Carrot",
    category: "Vegetable",
    symptoms: "Leaf edges burn or dry out.",
    causes: "Fungal infection.",
    remedy: "Maintain proper spacing and apply fungicide spray.",
    imageUrl: "https://images.unsplash.com/photo-1444858291040-58f756a3bcd6?auto=format&fit=crop&w=800&q=80",
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
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 mb-4">
              Agri-Care
            </h1>
            <p className="text-gray-600 text-lg italic">
              Proper solutions for diseases of vegetables, fruits, and crops
            </p>
          </header>

          {/* Search & Filter */}
          <div className="bg-white p-4 rounded-3xl shadow-lg mb-10 flex flex-col md:flex-row gap-4 border border-green-100">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search (e.g. rice, mango, brinjal...)"
                className="w-full p-4 pl-6 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="p-4 rounded-2xl bg-green-700 text-white font-semibold cursor-pointer outline-none hover:bg-green-800 transition"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Crop">Crop</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Fixed Aspect Ratio Image Container */}
                  <div className="relative w-full overflow-hidden aspect-video bg-gray-200">
                    <img 
                      src={disease.imageUrl} 
                      alt={disease.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                       <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-white/90 text-green-800 shadow-sm">
                        {disease.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800 leading-tight">
                        {disease.name}
                      </h3>
                    </div>
                    <p className="text-green-600 font-semibold mb-4 text-sm uppercase">
                      {disease.cropType}
                    </p>

                    <div className="space-y-4 flex-1">
                      <div className="text-sm">
                        <span className="block font-bold text-gray-900 mb-1">
                          Symptoms:
                        </span>
                        <p className="text-gray-600 leading-relaxed italic">
                          {disease.symptoms}
                        </p>
                      </div>

                      <div className="text-sm">
                        <span className="block font-bold text-gray-900 mb-1">
                          Causes:
                        </span>
                        <p className="text-gray-600">{disease.causes}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Remedy Section */}
                  <div className="p-6 bg-green-50 border-t border-green-100">
                    <span className="block font-bold text-green-800 text-xs mb-1 uppercase tracking-widest">
                      Remedy:
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
                  No data matches your search.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}