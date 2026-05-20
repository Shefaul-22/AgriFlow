"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import axios from "axios"
import Swal from "sweetalert2"

// Define Types for typescript
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
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>()

  // Watch file changes to show selected file name in custom UI
  const photoFile = watch("photo")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name)
    }
  }

  const onSubmit = async (data: RegisterFormData) => {
    Swal.fire({
      title: "Creating Account...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    try {
      const API_KEY = process.env.NEXT_PUBLIC_IMAGE_KEY
      if (!API_KEY) throw new Error("Missing image API key")

      if (!data.photo || data.photo.length === 0) {
        throw new Error("Image is required")
      }

      const file = data.photo[0]
      const imageFormData = new FormData()
      imageFormData.append("image", file)

      const imgRes = await axios.post<ImgBBResponse>(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        imageFormData
      )

      const photoURL = imgRes.data.data.url
      if (!photoURL) throw new Error("Image upload failed")

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
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12 relative overflow-hidden selection:bg-lime-500 selection:text-black">

      {/* Glow effects */}
      <div className="absolute w-80 h-80 bg-green-500/10 blur-[120px] rounded-full top-10 left-10 pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-lime-400/10 blur-[120px] rounded-full bottom-10 right-10 pointer-events-none"></div>

      <div className="relative w-full max-w-md backdrop-blur-md bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 font-extrabold">AgriFlow</span>
          </h1>
          <p className="text-neutral-400 mt-2 text-sm">
            Smart agriculture starts here 🌱
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition duration-200 text-sm"
              {...register("name", {
                required: "Name required",
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.name.message}
              </p>
            )}
          </div>

          {/* Custom Beautiful Image Input */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Profile Photo</label>
            <div className="relative flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-24 border border-dashed border-neutral-800 rounded-xl cursor-pointer bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-neutral-700 transition duration-200">
                <div className="flex flex-col items-center justify-center pt-3 pb-3 px-4 text-center">
                  <span className="text-xl mb-1">📸</span>
                  <p className="text-xs text-neutral-400 truncate max-w-xs">
                    {selectedFileName ? selectedFileName : "Click to upload profile picture"}
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("photo", {
                    required: "Photo required",
                    onChange: handleFileChange
                  })}
                />
              </label>
            </div>
            {errors.photo && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.photo.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition duration-200 text-sm"
              {...register("email", {
                required: "Email required",
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition duration-200 text-sm"
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
                className="absolute right-4 top-3.5 text-neutral-500 hover:text-neutral-300 transition text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-semibold text-black bg-gradient-to-r from-lime-400 to-green-500 hover:opacity-95 active:scale-[0.99] transition duration-200 shadow-lg shadow-lime-500/10 text-sm"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-neutral-800"></div>
            <span className="text-neutral-500 text-xs tracking-wider uppercase">
              OR
            </span>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
            className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 active:scale-[0.99] transition duration-200 text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.214 1.114 15.48 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.894 11.57-11.79 0-.795-.085-1.4-.195-1.905H12.24z" />
            </svg>
            Continue with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-neutral-400 text-xs mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-lime-400 font-medium cursor-pointer hover:underline hover:text-lime-300 transition"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}