"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

type Order = {
  id: number;
  productId: number;
  productName: string;
  delivery: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  seller: string;
  status: string;
  createdAt: string;
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false); // ✅ FIXED (inside component)

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/order");
      const data = await res.json();

      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-black text-gray-800">
            My Orders
          </h1>

          <Link
            href="/marketplace"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* ✅ LOADING (FIRST PRIORITY) */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600"></div>
          </div>
        )}

        {/* EMPTY STATE (ONLY WHEN NOT LOADING) */}
        {!loading && orders.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-3">
              No Orders Found
            </h2>
            <p className="text-gray-500">
              You have not placed any order yet.
            </p>
          </div>
        )}

        {/* ORDERS */}
        {!loading && (
          <div className="grid grid-cols-1 gap-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden p-5 flex flex-col md:flex-row gap-6"
              >
                {/* Product Image */}
                <div className="w-full md:w-56 h-56 overflow-hidden rounded-2xl">
                  <img
                    src={order.image}
                    alt={order.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black text-gray-800">
                      {order.productName}
                    </h2>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Quantity
                        </p>
                        <p className="text-xl font-bold">
                          {order.quantity}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Price
                        </p>
                        <p className="text-xl font-bold">
                          ৳{order.price}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Total Price
                        </p>
                        <p className="text-xl font-bold text-green-600">
                          ৳{order.totalPrice}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Order Status
                        </p>
                        <p
                          className={`text-xl font-bold ${
                            order.status === "Cancelled"
                              ? "text-red-500"
                              : "text-blue-600"
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Seller
                        </p>
                        <p className="text-lg font-bold">
                          {order.seller}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500 font-semibold">
                          Order Date
                        </p>
                        <p className="text-lg font-bold">
                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/marketplace/${order.productId}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold text-center"
                    >
                      View Product
                    </Link>

                    {order.status !== "Cancelled" && (
                      <button
                        onClick={async () => {
                          const confirm = await Swal.fire({
                            title: "Cancel Order?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#dc2626",
                          });

                          if (!confirm.isConfirmed) return;

                          const res = await fetch(
                            `/api/order/${order.id}`,
                            {
                              method: "PATCH",
                            }
                          );

                          if (res.ok) {
                            setOrders((prev) =>
                              prev.map((o) =>
                                o.id === order.id
                                  ? {
                                      ...o,
                                      status: "Cancelled",
                                    }
                                  : o
                              )
                            );

                            Swal.fire(
                              "Cancelled!",
                              "",
                              "success"
                            );
                          }
                        }}
                        className="border-2 border-red-500 text-red-500 px-6 py-4 rounded-2xl"
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}