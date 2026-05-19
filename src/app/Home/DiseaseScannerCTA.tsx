'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function DiseaseScannerCTA() {
  const badgeRef = useRef(null);

  useEffect(() => {
    gsap.to(badgeRef.current, {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section  className="w-full px-5 py-20 transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-6 md:flex justify-around">
        {/* Abstract Background Design Element */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        {/* Text Content */}
        <div className="md:w-1/2">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3 py-1 rounded-full inline-block">AI Diagnostic Tech</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Worried About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-lime-600">Crop Diseases?</span></h2>
          <p className=" text-lg">
            Instantly identify leaf spots, rots, and pests. Our AI models evaluate plant integrity on-site and return accurate botanical treatments immediately.
          </p>
        </div>

        {/* Visual Showcase Side */}
        <div className="lg:col-span-5 relative mt-4 md:mt-0 flex md:justify-center">
          <div className="relative w-80 h-82 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="https://i.postimg.cc/FHhvB8V5/markus-spiske-s-Fyd-XGrt5OA-unsplash.jpg" 
              alt="Inspecting crop leaf disease" 
              className="w-full h-full object-cover"
            />
            {/* GSAP Animated Badge Layer */}
            <div 
              ref={badgeRef}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3 text-slate-800"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <Link href='crop-dieseases'>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wide">Analysis Status</p>
                <p className="text-sm font-bold text-red-600">Check Crop Diseases</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}