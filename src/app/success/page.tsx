import { prisma } from "@/lib/prisma";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    productId?: string;
    qty?: string;
  }>;
};

export default async function SuccessPage({
  searchParams,
}: Props) {

  //  Next.js 16 fix
  const params = await searchParams;

  const productId = params?.productId;
  const quantity = params?.qty;

  //  validation
  if (!productId || !quantity) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Invalid Order ❌
      </div>
    );
  }

  const id = Number(productId);
  const qty = Number(quantity);

  if (isNaN(id) || isNaN(qty)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Invalid Order ❌
      </div>
    );
  }

  //  find product
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  // total calculate
  const total = product.price * qty;

  // duplicate order prevent
  const existingOrder = await prisma.order.findFirst({
    where: {
      productId: product.id,
      quantity: qty,
      totalPrice: total,
    },
  });

  //  save order
  if (!existingOrder) {
    await prisma.order.create({
      data: {
        productId: product.id,
        productName: product.name,
        delivery: "Pending",
        image: product.image,
        price: product.price,
        quantity: qty,
        totalPrice: total,
        seller: product.seller,
      },
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 text-center">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-8">
          Your order has been placed successfully.
        </p>

        {/* Product Info */}
        <div className="bg-gray-50 rounded-2xl p-5 space-y-4">

          <img
            src={product.image}
            alt={product.name}
            className="w-28 h-28 object-cover rounded-2xl mx-auto"
          />

          <h2 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h2>

          <div className="space-y-2 text-gray-700">

            <p>
              Quantity:
              <span className="font-bold ml-2">
                {qty} {product.unit}
              </span>
            </p>

            <p>
              Price:
              <span className="font-bold ml-2">
                ৳{product.price}
              </span>
            </p>

            <p>
              Total:
              <span className="font-bold text-green-600 ml-2">
                ৳{total}
              </span>
            </p>

          </div>
        </div>

        {/* Button */}
        <Link
          href="/Dashboard/buyer/my-orders"
          className="mt-8 inline-block w-full bg-green-600 hover:bg-green-700 transition text-white font-bold py-4 rounded-2xl"
        >
          Go To My Orders
        </Link>

      </div>
    </div>
  );
}