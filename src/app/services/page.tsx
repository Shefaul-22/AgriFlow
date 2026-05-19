"use client";

import React, { useState } from "react";
import { 
  CheckCircleIcon, 
  StarIcon, 
  SparklesIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  TrophyIcon 
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";

type Role = "Farmer" | "Buyer" | "Delivery";

export default function PremiumServicesPage() {
  const [activeRole, setActiveRole] = useState<Role>("Farmer");
  const [duration, setDuration] = useState<"Monthly" | "3 Months" | "Yearly">("Monthly");

  const getPrice = () => {
    const prices = {
      Farmer: { Monthly: "৳500", "3 Months": "৳1,350", Yearly: "৳4,000" },
      Buyer: { Monthly: "৳300", "3 Months": "৳800", Yearly: "৳2,500" },
      Delivery: { Monthly: "৳200", "3 Months": "৳500", Yearly: "৳1,500" },
    };
    return prices[activeRole][duration];
  };

  return (
  <>
   <Navbar/>

    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Hero Header */}
      <div className="bg-green-700 pt-24 pb-32 px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4">AgriFlow Premium</h1>
        <p className="text-green-100 text-base md:text-xl max-w-2xl mx-auto">
          Take your smart agriculture business to the next level by getting our premium membership today.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16">
        
        {/* Step 1: Selection Area */}
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 shadow-2xl border border-green-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Role Switcher */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">I am a:</p>
              <div className="flex p-1 bg-gray-100 rounded-2xl w-full sm:w-auto">
                {(["Farmer", "Buyer", "Delivery"] as Role[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`flex-1 sm:flex-none px-4 md:px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all ${
                      activeRole === role ? "bg-green-600 text-white shadow-lg" : "text-gray-500 hover:text-green-600"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Switcher */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Duration:</p>
              <div className="flex p-1 bg-gray-100 rounded-2xl w-full sm:w-auto">
                {(["Monthly", "3 Months", "Yearly"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 sm:flex-none px-3 md:px-5 py-3 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all ${
                      duration === d ? "bg-white text-green-700 shadow-sm" : "text-gray-400 hover:text-green-600"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="text-center lg:text-right border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-100">
              <p className="text-gray-400 text-xs font-bold mb-1">Total Price:</p>
              <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-4">{getPrice()}</h2>
              <button className="w-full sm:w-auto bg-green-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-xl hover:scale-105 active:scale-95">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Step 2: Extra Opportunities Grid */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center italic px-4">
          What you will get as a premium member:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Farmer Card */}
          <div className={`p-8 rounded-[35px] transition-all duration-500 ${activeRole === 'Farmer' ? 'bg-white border-2 border-green-500 md:scale-105 shadow-2xl z-10' : 'bg-white/70 opacity-60 hidden lg:block'}`}>
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <StarIcon className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Farmer Benefits</h4>
            <ul className="space-y-4">
              <FeatureItem color="text-green-500" text="Your products will appear at the top of the marketplace." />
              <FeatureItem color="text-green-500" text="Automatic notifications will be sent to buyers." />
              <FeatureItem color="text-green-500" text="Access to advanced analytics." />
              <FeatureItem color="text-green-500" text="‘Verified Golden Badge’ on your profile." />
            </ul>
          </div>

          {/* Buyer Card */}
          <div className={`p-8 rounded-[35px] transition-all duration-500 ${activeRole === 'Buyer' ? 'bg-white border-2 border-blue-500 md:scale-105 shadow-2xl z-10' : 'bg-white/70 opacity-60 hidden lg:block'}`}>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <SparklesIcon className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Buyer Benefits</h4>
            <ul className="space-y-4">
              <FeatureItem color="text-blue-500" text="Get 5% to 10% discount on every order." />
              <FeatureItem color="text-blue-500" text="Be the first to know when fresh crops arrive." />
              <FeatureItem color="text-blue-500" text="Up to 5 free deliveries per month." />
              <FeatureItem color="text-blue-500" text="Exclusive access to live bidding." />
            </ul>
          </div>

          {/* Delivery Card */}
          <div className={`p-8 rounded-[35px] transition-all duration-500 ${activeRole === 'Delivery' ? 'bg-white border-2 border-orange-500 md:scale-105 shadow-2xl z-10' : 'bg-white/70 opacity-60 hidden lg:block'}`}>
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <BoltIcon className="w-7 h-7 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Delivery Benefits</h4>
            <ul className="space-y-4">
              <FeatureItem color="text-orange-500" text="Get high-value orders first." />
              <FeatureItem color="text-orange-500" text="Instant withdrawal within 24 hours." />
              <FeatureItem color="text-orange-500" text="AI-based traffic-free delivery routes." />
              <FeatureItem color="text-orange-500" text="Extra bonuses and incentives." />
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 opacity-60">
          <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheckIcon className="w-5 h-5 text-gray-700"/> <span>SECURE PAYMENT</span></div>
          <div className="flex items-center gap-2 text-sm font-bold"><TrophyIcon className="w-5 h-5 text-gray-700"/> <span>TOP RATED PLATFORM</span></div>
        </div>
      </div>
    </div>
    </>
  );
}

// Reusable Feature Item Component
function FeatureItem({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start text-sm text-gray-600">
      <CheckCircleIcon className={`w-5 h-5 ${color} mr-2 flex-shrink-0`} />
      {text}
    </li>
  );
}