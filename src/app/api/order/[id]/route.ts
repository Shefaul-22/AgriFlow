import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/* =======================
   GET SINGLE ORDER
======================= */
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await context.params;

    const orderId = Number(id);

    if (isNaN(orderId)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (!order) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

/* =======================
   CANCEL ORDER
======================= */
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await context.params;

    const orderId = Number(id);

    if (isNaN(orderId)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: "Cancelled",
      },
    });

    return NextResponse.json(updatedOrder);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Failed to cancel order" },
      { status: 500 }
    );
  }
}