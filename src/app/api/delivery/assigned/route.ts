import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const deliveries = await prisma.delivery.findMany({
      where: {
        status: "ASSIGNED",
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(deliveries);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch deliveries" },
      { status: 500 }
    );
  }
}