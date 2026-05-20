"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

type LoginForm = {
    email: string
    password: string
}

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>()

    const onSubmit = async (data: LoginForm) => {
        try {
            setLoading(true)
            Swal.fire({
                title: "Logging in...",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            })

            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            })

            if (res?.error) {
                Swal.fire("Error", "Invalid email or password", "error")
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Login successful 🎉",
                    timer: 1500,
                    showConfirmButton: false,
                })
                router.push("/")
            }
        } catch (error) {
            Swal.fire("Error", "Something went wrong", "error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12 relative overflow-hidden selection:bg-lime-500 selection:text-black">

            {/* Glow effects - Matching Register Page */}
            <div className="absolute w-80 h-80 bg-green-500/10 blur-[120px] rounded-full top-10 right-10 pointer-events-none"></div>
            <div className="absolute w-80 h-80 bg-lime-400/10 blur-[120px] rounded-full bottom-10 left-10 pointer-events-none"></div>

            <div className="relative w-full max-w-md backdrop-blur-md bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 shadow-2xl">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 font-extrabold">AgriFlow</span>
                    </h1>
                    <p className="text-neutral-400 mt-2 text-sm">
                        Sign in to manage your smart agriculture 🌱
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition duration-200 text-sm"
                            {...register("email", { required: "Email required" })}
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
                                {...register("password", { required: "Password required" })}
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

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-2 rounded-xl font-semibold text-black bg-gradient-to-r from-lime-400 to-green-500 hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition duration-200 shadow-lg shadow-lime-500/10 text-sm"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-neutral-800"></div>
                        <span className="text-neutral-500 text-xs tracking-wider uppercase">OR</span>
                        <div className="flex-1 h-px bg-neutral-800"></div>
                    </div>

                    {/* Google Button */}
                    <button
                        type="button"
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 active:scale-[0.99] transition duration-200 text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.214 1.114 15.48 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.894 11.57-11.79 0-.795-.085-1.4-.195-1.905H12.24z" />
                        </svg>
                        Continue with Google
                    </button>
                </form>

                {/* Footer with Register Link */}
                <p className="text-center text-neutral-400 text-xs mt-6">
                    New to AgriFlow?{" "}
                    <span
                        onClick={() => router.push("/register")}
                        className="text-lime-400 font-medium cursor-pointer hover:underline hover:text-lime-300 transition"
                    >
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    )
}