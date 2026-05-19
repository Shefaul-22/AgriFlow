import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function LivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center px-6 pt-20">

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          🌾 Join Live Farm Streams as a Farmer
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Show and sell your fresh products directly to buyers & delivaryPartners in real-time.
          Get instant demand, fair price, and global visibility 🚀
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">

          <Link
            href="/live/farm-1"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
          >
            🔴 Start Live as Farmer
          </Link>

          <Link
            href="/live/farm-2"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
          >
            👀 Watch Live Farms
          </Link>

        </div>
      </div>

      {/* ACTIVE LIVE SECTION */}
      <div className="max-w-6xl mx-auto mt-20 px-6">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          🔥 Active Live Farms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-bold">🌾 Rice Farm - Feni</h3>
            <p className="text-sm text-gray-500">Live harvesting ongoing</p>
            <Link href="/live/farm-1" className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg">
              🔴 Join Live
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-bold">🥬 Organic Vegetable Farm</h3>
            <p className="text-sm text-gray-500">Fresh vegetables being packed</p>
            <Link href="/live/farm-2" className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg">
              🔴 Join Live
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <h3 className="font-bold">🐄 Dairy Farm</h3>
            <p className="text-sm text-gray-500">Milk production live monitoring</p>
            <Link href="/live/farm-3" className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg">
              🔴 Join Live
            </Link>
          </div>

        </div>
      </div>

      {/* 🆕 PAST LIVE SECTION */}
      <div className="max-w-6xl mx-auto mt-20 px-6 pb-20">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          📺 Past Live Streams
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Watch previous farm sessions, harvest demonstrations, and market updates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Past 1 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold">🌾 Rice Harvest - Week 1</h3>
            <p className="text-sm text-gray-500">Duration: 45 mins</p>

            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
              ▶ Watch Replay
            </button>
          </div>

          {/* Past 2 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold">🥬 Vegetable Packaging</h3>
            <p className="text-sm text-gray-500">Duration: 30 mins</p>

            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
              ▶ Watch Replay
            </button>
          </div>

          {/* Past 3 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold">🐄 Dairy Farm Tour</h3>
            <p className="text-sm text-gray-500">Duration: 50 mins</p>

            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
              ▶ Watch Replay
            </button>
          </div>

        </div>
      </div>


    </div>
  );
}