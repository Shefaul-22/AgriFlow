import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";


export async function GET() {
  const session = await getServerSession();

  const sellerName = session?.user?.name;

  const products =
    await prisma.product.findMany({
      where: {
        seller: sellerName || "",
      },
    });

  return Response.json(products);
}