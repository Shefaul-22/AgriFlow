import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import OrderClient from "../OrderClient";


type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) return notFound();

  return <OrderClient product={product} />;
}