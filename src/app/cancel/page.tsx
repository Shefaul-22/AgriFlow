// import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function CancelPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">
        
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full">
          
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            ❌ Payment Cancelled
          </h1>

          <p className="text-gray-600 mb-6">
            Your payment was cancelled. You can try again anytime.
          </p>

          <Link href="/marketplace">
            <button className="bg-blue-600
             hover:bg-blue-700 text-black
              px-6 py-3 rounded-xl font-bold w-full">
              Back to Shop
            </button>
          </Link>

        </div>
      </div>
    </>
  );
}