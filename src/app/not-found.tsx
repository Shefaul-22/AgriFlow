import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! Page Not Found
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  );
}