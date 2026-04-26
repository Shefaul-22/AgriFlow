"use client";
import { IoReceiptOutline, IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

export default function MyOrders () {
  const orders = [
    { id: "#ORD-772", date: "22 April 2026", status: "Delivered", total: "৳4,200", items: 3 },
    { id: "#ORD-901", date: "Today", status: "On the way", total: "৳1,500", items: 1 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl text-green-500 font-black mb-8 flex items-center gap-3"><IoReceiptOutline/> My Orders</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-green-200 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl font-black text-green-600">📦</div>
              <div>
                <h4 className="font-black text-gray-800">{order.id}</h4>
                <p className="text-xs text-gray-400 font-bold flex items-center gap-1"><IoCalendarOutline/> {order.date}</p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
               <div className="text-right">
                  <p className="text-[10px] font-black text-gray-300 uppercase">Items: {order.items}</p>
                  <p className="font-black text-xl text-gray-800">{order.total}</p>
               </div>
               <span className={`px-4 py-2 rounded-xl text-xs font-black ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600 animate-pulse'}`}>
                 {order.status}
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};