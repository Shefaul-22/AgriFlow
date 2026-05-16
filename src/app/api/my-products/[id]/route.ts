import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE PRODUCT
export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await params;

    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message:
        "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Delete failed",
      },
      { status: 500 }
    );
  }
}

// UPDATE PRODUCT
export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const updatedProduct =
      await prisma.product.update({
        where: {
          id: Number(id),
        },

        data: {
          name: body.name,
          price: parseFloat(body.price),
          stock: parseInt(body.stock),
          unit: body.unit,
          description:
            body.description,
        },
      });

    return NextResponse.json({
      message:
        "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Update failed",
      },
      { status: 500 }
    );
  }
}