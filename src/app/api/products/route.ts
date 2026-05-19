import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";


export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}



 //add productroute
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // image file
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "Image is required",
        },
        { status: 400 }
      );
    }

    // convert image
    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    // unique filename
    const fileName =
      Date.now() +
      "-" +
      file.name.replaceAll(" ", "-");

    // upload directory
    const uploadDir = path.join(
      process.cwd(),
      "public/uploads"
    );

    // create folder if not exists
    await fs.mkdir(uploadDir, {
      recursive: true,
    });

    // final path
    const uploadPath = path.join(
      uploadDir,
      fileName
    );

    // save image
    await fs.writeFile(uploadPath, buffer);

    // image url
    const imageUrl = `/uploads/${fileName}`;

    // save db
    const product =
      await prisma.product.create({
        data: {
          name: String(formData.get("name")),
          category: String(
            formData.get("category")
          ),

          price: parseFloat(
            String(formData.get("price"))
          ),

          unit: String(formData.get("unit")),

          location: String(
            formData.get("location")
          ),

          seller: String(
            formData.get("seller")
          ),

          image: imageUrl,

          description: String(
            formData.get("description")
          ),

          stock: parseInt(
            String(formData.get("stock"))
          ),

          delivery: String(
            formData.get("delivery")
          ),

          quality: String(
            formData.get("quality")
          ),
        },
      });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log("PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add product",
      },
      { status: 500 }
    );
  }
}

