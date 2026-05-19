"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/app/components/Button";
import Link from "next/link";

const CTA = () => {
  const container = useRef(null);
  const circleL = useRef(null);
  const circleR = useRef(null);
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);

  useGSAP(() => {
    // Left dynamic ambient circle
    gsap.to(circleL.current, {
      x: "random(-40, 40)",
      y: "random(-30, 30)",
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Right dynamic ambient circle
    gsap.to(circleR.current, {
      x: "random(40, -40)",
      y: "random(30, -30)",
      duration: 11,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating UI vector bubble 1
    gsap.to(bubble1.current, {
      x: "random(-60, 60)",
      y: "random(-40, 40)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
      ease: "power1.inOut",
    });

    // Floating UI vector bubble 2
    gsap.to(bubble2.current, {
      x: "random(60, -60)",
      y: "random(40, -40)",
      duration: 6,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
      ease: "power1.inOut",
    });

  }, { scope: container });

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-15">
      <div 
        ref={container}
        className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 overflow-hidden rounded-[2.5rem] text-center border border-emerald-800/30 shadow-2xl"
      >
        {/* Glowing Background Radial Effects (Matches Premium Dark Theme) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating Abstract Mesh Circles */}
        <div ref={circleL} className="block absolute top-[-15%] left-[-10%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] border border-emerald-500/10 rounded-full bg-emerald-500/5 pointer-events-none" />
        <div ref={circleR} className="block absolute bottom-[-20%] right-[-10%] w-[400px] md:w-[550px] h-[400px] md:h-[550px] border border-emerald-500/10 rounded-full bg-emerald-500/5 pointer-events-none" />

        {/* Micro Floating UI Spark Bubbles */}
        <div ref={bubble1} className="block absolute top-[25%] right-[18%] w-14 h-14 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm pointer-events-none shadow-[0_0_20px_rgba(16,185,129,0.1)] rotate-12" />
        <div ref={bubble2} className="block absolute bottom-[25%] left-[20%] w-10 h-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none shadow-[0_0_15px_rgba(16,185,129,0.1)]" />

        {/* Content Layer */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[10px]">Get Started</span>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-none">
            Ready to Revolutionize Your <br className="hidden sm:inline"/> 
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-amber-300 bg-clip-text text-transparent">
              Agricultural Yield?
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium pt-2">
            Join thousands of modern producers running automated AI leaf diagnostics and transparently trading fresh harvests without intermediate loops.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-6">
            <Link href='/marketplace' 
              
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-none px-10 py-4 font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5" 
            >Explore Marketplace</Link>
            <Link href='/fertilizer' 
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-none px-10 py-4 font-bold rounded-xl shadow-lg shadow-slate-900/30 transition transform hover:-translate-y-0.5" 
            >Explore Solutions</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;