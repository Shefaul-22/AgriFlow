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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>()

    const onSubmit = async (data: LoginForm) => {
        try {
            setLoading(true)

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
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Login
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    {...register("email", { required: "Email required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    {...register("password", { required: "Password required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button
                    disabled={loading}
                    className="btn btn-primary w-full"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}