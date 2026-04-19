// import { prisma } from "@/lib/prisma"

// export default async function TestPage() {
//   const users = await prisma.user.findMany()

//   console.log(users)

//   return <div>Check terminal 👀</div>
// }

import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export default async function TestPage() {
    const hashedPassword = await bcrypt.hash("123456", 10)

    await prisma.user.upsert({
        where: { email: "test@example.com" },
        update: {},
        create: {
            email: "test@example.com",
            name: "Test User",
            password: hashedPassword,
        },
    })

    const users = await prisma.user.findMany()

    console.log("Users:", users)

    return (
        <div>
            <h1>User Count: {users.length}</h1>
            <p>Check terminal 👀</p>
        </div>
    )
}