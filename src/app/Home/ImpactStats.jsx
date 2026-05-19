'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ImpactStats() {
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".stat-metric-card",
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  const stats = [
    { 
      id: 1, 
      value: "10K+", 
      label: "Active Platform Farmers", 
      sub: "Verified local growers",
      svgPath: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    },
    { 
      id: 2, 
      value: "50+ Tons", 
      label: "Fresh Harvest Transacted", 
      sub: "Bypassing middlemen loops",
      svgPath: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
    },
    { 
      id: 3, 
      value: "95.4%", 
      label: "AI Diagnostics Accuracy", 
      sub: "Evaluated neural networks",
      svgPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z"
    },
    { 
      id: 4, 
      value: "24/7", 
      label: "Live Agronomist Support", 
      sub: "On-demand expert advisory",
      svgPath: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3.75 18c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9Z"
    },
  ];

  return (
    <section ref={containerRef} className="py-15 px-6 md:px-15  overflow-hidden relative ">
      {/* Background Spotlight Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[10px]">Ecosystem Metrics</span>
        </div>
        
         <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Quantifiable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-lime-600">Global Yield</span> Metrics
        </h2>
        <p className="text-lg  mb-4">
          Tracing real agricultural transformation, supply chain tracking volumes, and structural optimization across thousands of unique regional farming plots.
        </p>
        
        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="stat-metric-card md:p-8 p-4 bg-slate-800/30 border border-slate-800 hover:border-slate-700/60 rounded-[2rem] text-left backdrop-blur-md transition-all duration-300 group flex flex-col justify-between h-[210px]"
              style={{ boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.05)' }}
            >
              {/* Dynamic Vector Icon Layout */}
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.svgPath} />
                </svg>
              </div>

              {/* Numerical Values and Subtexts */}
              <div className="mt-6 space-y-1">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
                  {stat.value}
                </h3>
                <div>
                  <p className="text-sm font-bold text-slate-200 tracking-tight group-hover:text-emerald-300 transition duration-300">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}