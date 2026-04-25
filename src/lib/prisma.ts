// import { PrismaClient } from "@prisma/client"


// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// // Prisma 7 constructor-e ekhon kono 'datasource' property ney na.
// // Eta config file theke connection load kore.
// export const prisma = globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma


import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}