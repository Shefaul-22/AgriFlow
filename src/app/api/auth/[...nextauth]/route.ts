import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          // ❌ missing input
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          // 🔍 find user
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          })

          if (!user) return null

          // 🔐 compare password
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isValid) return null

          // ✅ return safe user object
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            image: user.image,
          }

        } catch (error) {
          console.error("AUTH ERROR:", error)
          return null
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // 🔑 add user id in token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    // 🔑 pass id to session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }