
//fahmida code//
"use client";

import { useState } from "react";
import { MapPinIcon, TruckIcon, PackageIcon } from "lucide-react";
import CheckoutButton from "@/app/components/stripe-button";
import Navbar from "../components/Navbar";

export default function OrderClient({ product }: any) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Product not found
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);

  const totalPrice = product.price * quantity;

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 px-4 bg-gray-50 dark:bg-gray-950 transition-colors">

        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-3xl shadow-xl p-6 sm:p-10">

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-8">
            Order Product
          </h1>

          {/* PRODUCT CARD */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">

            <img
              src={product.image}
              className="w-full sm:w-40 h-40 object-cover rounded-2xl shadow"
            />

            <div className="flex-1 w-full">

              <h2 className="text-xl sm:text-2xl font-bold">
                {product.name}
              </h2>

              <p className="text-green-600 font-bold text-lg mt-1">
                ৳{product.price} / {product.unit}
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                {product.location}
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <TruckIcon className="w-4 h-4" />
                Delivery available
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <PackageIcon className="w-4 h-4" />
                Stock: {product.stock} {product.unit}
              </p>

            </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-8">

            <label className="font-semibold block mb-2">
              Quantity ({product.unit})
            </label>

            <input
              type="number"
              name="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full sm:w-1/2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* TOTAL */}
          <div className="mt-6 text-lg font-bold">
            Total: <span className="text-green-600">৳{totalPrice}</span>
          </div>

          {/* CHECKOUT */}
          <div className="mt-8">
            <CheckoutButton
              productId={product.id}
              price={product.price}
              unit={product.unit}
               quantity={quantity}
            />
          </div>

        </div>
      </div>
    </>
  );
}
//fahmida code//

