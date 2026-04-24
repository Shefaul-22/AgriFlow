"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import axios from "axios"
import Swal from "sweetalert2"

// Define  Types for typescript
type RegisterFormData = {
  name: string
  email: string
  password: string
  photo: FileList
}

type ImgBBResponse = {
  data: {
    url: string
  }
}

type RegisterResponse = {
  message?: string
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    Swal.fire({
      title: "Creating Account...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    try {
      //  ENV check
      const API_KEY = process.env.NEXT_PUBLIC_IMAGE_KEY
      if (!API_KEY) throw new Error("Missing image API key")

      //  Photo validation
      if (!data.photo || data.photo.length === 0) {
        throw new Error("Image is required")
      }

      //  Image upload
      const file = data.photo[0]
      const imageFormData = new FormData()
      imageFormData.append("image", file)

      const imgRes = await axios.post<ImgBBResponse>(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        imageFormData
      )

      const photoURL = imgRes.data.data.url

      if (!photoURL) throw new Error("Image upload failed")

      //  register API call using axios
      await axios.post<RegisterResponse>("/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        photoURL,
      })

      Swal.fire({
        icon: "success",
        title: "Account Created 🎉",
        timer: 2000,
        showConfirmButton: false,
      })

      router.push("/login")

    } catch (err: unknown) {
      let message = "Something went wrong"

      // Catch Axios error (Proper way to catch axios error)
      if (axios.isAxiosError(err)) {
        message =
          err.response?.data?.message ||
          err.message ||
          message
      } else if (err instanceof Error) {
        message = err.message
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg bg-base-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          {...register("name", { required: "Name required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          {...register("photo", { required: "Photo required" })}
        />
        {errors.photo && (
          <p className="text-red-500 text-sm">{errors.photo.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          {...register("email", { required: "Email required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}

        <button className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  )
}