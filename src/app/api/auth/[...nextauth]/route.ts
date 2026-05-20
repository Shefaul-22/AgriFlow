import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const handler = NextAuth({
  //  DB AUTO SAVE
  adapter: PrismaAdapter(prisma),

  providers: [
    // =========================
    //  GOOGLE LOGIN
    // =========================
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      // FIX OAuthAccountNotLinked
      allowDangerousEmailAccountLinking: true,

    }),

    // =========================
    //  CREDENTIALS LOGIN
    // =========================
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,


        }
      },
    }),
  ],

  //  REQUIRED WITH PRISMA ADAPTER
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // JWT

    async jwt({ token, user }) {

      if (user) {
        token.id = user.id
        token.role = user?.role
      }

      return token
    },



    // async jwt({ token, user }) {

    //   // first login
    //   if (user) {
    //     token.id = user.id

    //     // role comes from db
    //     const dbUser = await prisma.user.findUnique({
    //       where: {
    //         email: user.email!,
    //       },
    //     })

    //     token.role = dbUser?.role ?? "user"
    //   }

    //   return token
    // },

    // SESSION
    async session({ session, token }) {

      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token?.role as string
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }