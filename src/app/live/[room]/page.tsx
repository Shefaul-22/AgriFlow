import FarmInfo from "@/app/components/live/FarmInfo";
import LiveSidebar from "@/app/components/live/LiveSidebar";
import VideoPlayer from "@/app/components/live/VideoPlayer";


export default function Page({ params }: any) {
  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* HEADER */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold">
          🌾 AgriFlow Live Farm: {params.room}
        </h1>
        <p className="text-sm text-gray-500">
          Real-time farm monitoring & marketplace live view
        </p>
      </div>

      {/* TOP VIDEO SECTION */}
      <div className="w-full h-[520px] bg-black rounded-xl overflow-hidden shadow-lg">
        <VideoPlayer/>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-12 gap-4 mt-4">

        {/* LEFT: FARM INFO */}
        <div className="col-span-4 bg-white rounded-xl p-4 shadow-md">
          <FarmInfo />
        </div>

        {/* MIDDLE (optional future analytics) */}
        <div className="col-span-4 bg-white rounded-xl p-4 shadow-md">
          <h2 className="font-bold mb-2">📊 Live Analytics</h2>

          <div className="text-sm space-y-2">
            <p>🌱 Crop: Rice</p>
            <p>📍 Location: Feni</p>
            <p>💰 Live Price: 1200 BDT / maund</p>
            <p>👀 Viewers: 128</p>
            <p>🚜 Harvest Status: Growing</p>
          </div>
        </div>

        {/* RIGHT: LIVE SIDEBAR (CHAT + STATUS) */}
        <div className="col-span-4 h-[420px]">
          <LiveSidebar/>
        </div>

      </div>
    </div>
  );
}