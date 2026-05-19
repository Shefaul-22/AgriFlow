import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const session = await getServerSession();

    const sellerName = session?.user?.name;

    if (!sellerName) {
      return Response.json({
        success: false,
        products: [],
        message: "No session found",
      });
    }

    const products = await prisma.product.findMany({
      where: {
        seller: sellerName, // MUST match DB exactly
      },
    });

    return Response.json({
      success: true,
      products,
    });
  } catch (error) {
    return Response.json({
      success: false,
      products: [],
      message: "Server error",
    });
  }
}