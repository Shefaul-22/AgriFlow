import Stripe from "stripe";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.json();
const productId = Number(body.productId);
  const quantity = Number(body.quantity || 1);

  const product = await prisma.product.findUnique({
    where: { id: Number(body.productId) },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?productId=${productId}&qty=${quantity}`,
    
    cancel_url:`${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}