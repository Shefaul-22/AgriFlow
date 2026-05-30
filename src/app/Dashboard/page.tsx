"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return

    if (!session) {
      router.replace("/login")
      return
    }

    switch (session.user.role) {
      case "ADMIN":
        router.replace("/dashboard/admin")
        break

      case "FARMER":
        router.replace("/dashboard/farmer")
        break

      case "DELIVERY_PARTNER":
        router.replace("/dashboard/delivery-partner")
        break

      case "BUYER":
      default:
        router.replace("/dashboard/buyer")
        break
    }
  }, [session, status, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-spinner loading-lg">Refresh the page!</span>
    </div>
  )
}