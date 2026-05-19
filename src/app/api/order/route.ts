import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/* =======================
   GET ALL ORDERS
======================= */
export async function GET() {
  try {

    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}