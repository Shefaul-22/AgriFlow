
//fahmida code
import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/Navbar";

import {
  MapPinIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  TruckIcon,
  ShieldCheckIcon,
  BoxesIcon,
} from "lucide-react";

import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: Props) {

  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-28 pb-20 px-4">

        <div className="max-w-7xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

          {/* Product Image */}
          <div className="relative h-[450px] lg:h-full overflow-hidden">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-black uppercase tracking-wider text-green-700 shadow">
              {product.category}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            <h1 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-5 flex items-end gap-2">

              <p className="text-5xl font-black text-green-700">
                ৳{product.price}
              </p>

              <span className="text-gray-400 font-semibold mb-1">
                per {product.unit}
              </span>
            </div>

            {/* Description */}
            <div className="mt-8">

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                About This Product
              </h3>

              <p className="text-gray-600 leading-8 text-[17px]">
                {product.description}
              </p>
            </div>

            {/* Product Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500 font-semibold">
                  Category
                </p>

                <p className="text-lg font-bold text-gray-800 mt-1">
                  {product.category}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500 font-semibold">
                  Unit
                </p>

                <p className="text-lg font-bold text-gray-800 mt-1">
                  {product.unit}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 flex items-center gap-3">

                <MapPinIcon className="w-5 h-5 text-green-600" />

                <div>
                  <p className="text-sm text-gray-500 font-semibold">
                    Location
                  </p>

                  <p className="text-lg font-bold text-gray-800">
                    {product.location}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500 font-semibold">
                  Seller
                </p>

                <p className="text-lg font-bold text-gray-800 mt-1">
                  {product.seller}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 flex items-center gap-3">

                <BoxesIcon className="w-5 h-5 text-green-600" />

                <div>
                  <p className="text-sm text-gray-500 font-semibold">
                    Stock
                  </p>

                  <p className="text-lg font-bold text-gray-800">
                    {product.stock} Available
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500 font-semibold">
                  Quality
                </p>

                <p className="text-lg font-bold text-gray-800 mt-1">
                  {product.quality}
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-700">
                <TruckIcon className="w-5 h-5 text-green-600" />

                {product.delivery}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <ShieldCheckIcon className="w-5 h-5 text-green-600" />

                Freshness and quality guaranteed
              </div>
            </div>

           {/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">

  {/* Order Now */}
  <Link href={`/order/${product.id}`} className="w-full sm:flex-1">
    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all active:scale-95">
      Order Now
    </button>
  </Link>

  {/* Add To Cart */}
  <button
    className="w-full sm:flex-1 border-2 border-green-600 text-green-700 hover:bg-green-50 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95"
  >
    <ShoppingCartIcon className="w-5 h-5" />
    Add To Cart
  </button>

</div>
          </div>
        </div>
      </div>
    </>
  );
}
//fahmida code//
