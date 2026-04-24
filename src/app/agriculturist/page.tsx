"use client";

import React from "react";
import Navbar from "../components/Navbar";

type Agriculturist = {
  name: string;
  expertise: string;
  experience: string;
  location: string;
  phone: string;
  description: string;
};

const agriculturists: Agriculturist[] = [
  {
    name: "Dr. Abdul Karim",
    expertise: "Crop Disease Specialist",
    experience: "15 years",
    location: "Sylhet",
    phone: "+8801712345678",
    description: "ধান ও সবজি রোগ নির্ণয় এবং আধুনিক কৃষি প্রযুক্তি ব্যবহারে অভিজ্ঞ।",
  },
  {
    name: "Fatema Begum",
    expertise: "Organic Farming Expert",
    experience: "10 years",
    location: "Dhaka",
    phone: "+8801812345678",
    description: "জৈব কৃষি ও নিরাপদ খাদ্য উৎপাদনে বিশেষজ্ঞ, কৃষকদের প্রশিক্ষণ প্রদান করেন।",
  },
  {
    name: "Md. Rafiqul Islam",
    expertise: "Soil & Fertilizer Expert",
    experience: "12 years",
    location: "Rajshahi",
    phone: "+8801912345678",
    description: "মাটির গুণাগুণ বিশ্লেষণ এবং সঠিক সার ব্যবস্থাপনায় দক্ষ।",
  },
  {
    name: "Shahidul Alam",
    expertise: "Fruit Specialist",
    experience: "8 years",
    location: "Chattogram",
    phone: "+8801612345678",
    description: "ফল চাষ ও বাগান ব্যবস্থাপনায় দক্ষ, বিশেষ করে আম ও লিচু।",
  },
];

export default function AgriculturistPage() {
  return (
    <>
      <Navbar />
    
      <div className="min-h-screen bg-green-50
       dark:bg-gray-950 pt-28 pb-16 px-8 md:px-16 transition-colors duration-300">
        
        <h1 className="text-3xl md:text-5xl font-bold text-center text-green-700 dark:text-green-500 mb-10">
          👨‍🌾 Expert Agriculturists
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agriculturists.map((agri, index) => (
            <div
              key={index}
              /* dark:bg-gray-900 এবং dark:border-gray-800 ডার্ক মোড ফিক্স করবে */
              className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border border-green-100 dark:border-gray-800 hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400">
                {agri.name}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                📍 {agri.location}
              </p>

              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p>
                  <span className="font-semibold text-green-700 dark:text-green-500">Expertise:</span>{" "}
                  {agri.expertise}
                </p>

                <p>
                  <span className="font-semibold text-green-700 dark:text-green-500">Experience:</span>{" "}
                  {agri.experience}
                </p>

                <p>
                  <span className="font-semibold text-green-700 dark:text-green-500">About:</span>{" "}
                  {agri.description}
                </p>
              </div>

              <p className="mt-4 text-green-700 dark:text-green-400 font-bold text-lg">
                📞 {agri.phone}
              </p>

              <button className="mt-5 w-full bg-green-600 dark:bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors shadow-lg shadow-green-200 dark:shadow-none">
                Contact Expert
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}