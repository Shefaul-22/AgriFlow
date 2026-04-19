"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function addUser() {
  try {
    await prisma.user.create({
      data: {
        email: `test_${Math.floor(Math.random() * 1000)}@gmail.com`, // Bar bar test korar jonno unique email
        name: "Mohammad Shefaul Karim",
      },
    })
    
    console.log("User added successfully!")
    revalidatePath("/login") // Login page refresh revalidate the data and show the  data
  } catch (error) {
    console.error("Cant send data to database:", error)
  }
}