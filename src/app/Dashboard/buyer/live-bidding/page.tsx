"use client";
import { IoFlashOutline, IoTimeOutline, IoTrendingUpOutline } from "react-icons/io5";

export default function LiveBidding () {
  return (
    <div className="min-h-screen p-6">
       <div className="max-w-4xl mx-auto  bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
         <div className="bg-rose-600 p-8 text-white flex justify-between items-center">
           <div>
             <h2 className="text-2xl font-black flex items-center gap-2"><IoFlashOutline className="animate-pulse"/> Live Auction</h2>
             <p className="text-rose-100 text-sm">Stock: 500kg Premium Mangoes</p>
           </div>
           <div className="bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-md">
             <span className="font-mono text-xl font-bold">04:25:10</span>
           </div>
         </div>

         <div className="p-8">
           <div className="flex justify-around mb-10 text-center">
             <div><p className="text-gray-400 text-xs font-bold uppercase">Base Price</p><h4 className="text-2xl font-black">৳15,000</h4></div>
             <div className="h-12 w-[1px] bg-gray-100"></div>
             <div><p className="text-rose-500 text-xs font-bold uppercase">Current Bid</p><h4 className="text-3xl font-black text-rose-600">৳18,500</h4></div>
           </div>

           {/* Bidding Interface */}
           <div className="space-y-4">
             <div className="flex gap-2">
                {[500, 1000, 2000].map(amt => (
                  <button key={amt} className="flex-1 py-4 border-2 border-gray-100 rounded-2xl font-black text-gray-600 hover:border-rose-500 hover:text-rose-600 transition-all">
                    +৳{amt}
                  </button>
                ))}
             </div>
             <button className="w-full bg-zinc-900 text-white py-6 rounded-3xl font-black text-xl shadow-xl hover:bg-black transition-all">
               Place My Bid
             </button>
           </div>
         </div>
       </div>
       
    </div>
  );
};