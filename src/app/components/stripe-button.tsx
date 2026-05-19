"use client";

import { useState } from "react";

export default function CheckoutButton({
  productId,
  price,
  unit,
  quantity
}: {
  productId: number;
  price: number;
  unit: string;
  quantity: number;
}) {
  
const total = quantity * price;

  const handlePay = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        productId,
    quantity,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="space-y-4">

      <div className="bg-gray-100 p-4 rounded-xl">
        <p className="font-bold">
          Total: ৳{total}
        </p>
      </div>

      <button
        type="button"
        onClick={handlePay}
        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700"
      >
        Pay with Stripe
      </button>
    </div>
  );
}