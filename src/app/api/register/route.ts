import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password, photoURL } = body

    //  Basic validation for email and pass
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      )
    }

    //  Check existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }

    //  Hash password safely
    const hashedPassword = await bcrypt.hash(password, 10)

    //  Create user
    const user = await prisma.user.create({
      data: {
        name: name || "",
        email,
        password: hashedPassword,
        image: photoURL || "",
      },
    })

    //  Never send password back
    const { password: _, ...safeUser } = user

    return NextResponse.json(safeUser)

  } catch (error) {
    console.error("REGISTER ERROR:", error)

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    )
  }
}