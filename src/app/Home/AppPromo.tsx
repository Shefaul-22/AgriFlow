export default function AppPromo() {
  return (
    <section className="w-full border-b border-slate-700/60 px-6 md:px-10 py-15 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Portable Tech</span>
           <h2 className="text-4xl md:text-5xl font-extrabold my-6">
              AgriFlow Intelligence<span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-lime-600'><br />Right inside Your Pocket</span>
            </h2>
          <p className="text-lg">
            Our interfaces are meticulously optimized for edge performance under low network grids. Access responsive diagnostics, real-time dispatch receipts, and local grain values instantly on Android and iOS platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl cursor-pointer hover:border-slate-700 transition">
              <span className="text-xl">🤖</span>
              <div className="text-left">
                <p className="text-[9px] text-slate-500 uppercase font-bold">Download for</p>
                <p className="text-xs font-bold text-slate-200">Android APK</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl cursor-pointer hover:border-slate-700 transition">
              <span className="text-xl">🍏</span>
              <div className="text-left">
                <p className="text-[9px] text-slate-500 uppercase font-bold">Download for</p>
                <p className="text-xs font-bold text-slate-200">Apple iOS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right UI Device Mockup Rendering */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] top-1/4 pointer-events-none" />
          <div className="w-64 h-[480px] bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] shadow-2xl p-3 relative overflow-hidden">
            {/* Camera notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full z-20" />
            
            {/* Fake App Layout screen */}
            <div className="w-full h-full bg-slate-950 rounded-[2rem] p-4 flex flex-col justify-between overflow-hidden relative text-left">
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold">
                  <span>AgriFlow Engine</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
                <div className="h-28 w-full bg-emerald-900/20 border border-emerald-500/10 rounded-xl flex items-center justify-center text-3xl">
                  📸
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-2/3 bg-slate-800 rounded" />
                  <div className="h-2 w-full bg-slate-900 rounded" />
                  <div className="h-2 w-4/5 bg-slate-900 rounded" />
                </div>
              </div>
              <div className="w-full bg-emerald-500 text-slate-950 font-black text-xs py-2.5 rounded-xl text-center">
                Scan Leaf Now
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}