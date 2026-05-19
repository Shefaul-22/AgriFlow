import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Delete failed",
    });
  }
}

// PATCH
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const updated = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name: body.name,
        price: Number(body.price),
        stock: Number(body.stock),
        unit: body.unit,
        description: body.description,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Updated successfully",
      updated,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Update failed",
    });
  }
}