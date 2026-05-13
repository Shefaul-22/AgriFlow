import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fakeRiderId = 1;

    const activeDeliveries = await prisma.delivery.findMany({
      where: {
        // riderId: fakeRiderId,
        status: "IN_TRANSIT",
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // console.log(activeDeliveries);

    return NextResponse.json(activeDeliveries);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch active deliveries" },
      { status: 500 }
    );
  }
}