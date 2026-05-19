import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"; // Make sure this matches your singleton export

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { deliveryId } = body;

        if (!deliveryId) {
            return NextResponse.json(
                { message: "Delivery ID is required" },
                { status: 400 }
            );
        }

        // Updates status to IN_TRANSIT based on your Prisma Enum
        const updatedDelivery = await prisma.delivery.update({
            where: { id: Number(deliveryId) },
            data: {
                status: "IN_TRANSIT"
                // If you track logged-in users, add: riderId: session.user.id
            },
        });

        return NextResponse.json(updatedDelivery, { status: 200 });
    } catch (error) {
        console.error("Prisma Patch Error:", error);
        return NextResponse.json(
            { message: "Failed to accept order update" },
            { status: 500 }
        );
    }
}
