"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCartOutline,
  IoTrashOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoArrowForwardOutline,
  IoBagCheckOutline,
} from "react-icons/io5";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
  unit: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Organic Tomatoes", price: 120, qty: 2, img: "🍅", unit: "kg" },
    { id: 2, name: "Premium Basmati Rice", price: 150, qty: 5, img: "🌾", unit: "kg" },
    { id: 3, name: "Fresh Honey", price: 850, qty: 1, img: "🍯", unit: "kg" },
  ]);

  const updateQty = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const deliveryFee = 60;

  return (
    <div className="min-h-screen p-6 md:p-10 font-sans text-gray-600">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold flex items-center tracking-tight text-green-600 mb-5">
          <IoCartOutline /> Your<span className="text-yellow-600">.</span> Basket
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center text-4xl">
                    {item.img}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-green-600">
                      ৳{item.price} / {item.unit}
                    </p>
                  </div>

                  {/* Qty */}
                  <div className="flex items-center bg-gray-50 rounded-2xl p-1">
                    <button onClick={() => updateQty(item.id, -1)}>
                      <IoRemoveOutline />
                    </button>

                    <span className="w-12 text-center font-black">
                      {item.qty}
                    </span>

                    <button onClick={() => updateQty(item.id, 1)}>
                      <IoAddOutline />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-black">
                      ৳{item.price * item.qty}
                    </p>

                    <button onClick={() => removeItem(item.id)}>
                      <IoTrashOutline size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl sticky top-10">
              <h3 className="text-2xl font-black mb-6">Summary</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>৳{deliveryFee}</span>
                </div>

                <div className="flex justify-between font-black text-green-600 text-xl">
                  <span>Total</span>
                  <span>৳{subtotal + deliveryFee}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white font-black py-4 rounded-3xl flex items-center justify-center gap-2">
                Checkout <IoArrowForwardOutline />
              </button>

              <p className="text-[10px] text-center mt-4 text-gray-400">
                <IoBagCheckOutline /> Secure Payment
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;