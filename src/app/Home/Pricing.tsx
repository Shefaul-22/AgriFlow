'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

interface PricingTier {
  name: string;
  price: string;
  desc: string;
  features: string[];
  btnText: string;
}

export default function Pricing() {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  // একটিভ স্লাইড ট্র্যাক করার জন্য স্টেট
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const tiers: PricingTier[] = [
    {
      name: "Starter Layer",
      price: "Free",
      desc: "Perfect for local individual sub-plot farmers.",
      features: ["3 AI Disease Scans / day", "Standard Marketplace Listing", "Community Chat Access"],
      btnText: "Get Started Free"
    },
    {
      name: "Grower Pro",
      price: "$19/mo",
      desc: "Optimized for commercial fields and active traders.",
      features: ["Unlimited AI Diagnostics", "Priority Marketplace Placement", "Direct SMS Weather Alerts", "24/7 Live Agronomist Calls"],
      btnText: "Upgrade via Stripe"
    },
    {
      name: "Agri Enterprise",
      price: "$49/mo",
      desc: "Built for massive farming cooperatives & supply chains.",
      features: ["Multi-plot Land Analytics", "Bulk API Logistics Access", "Dedicated Account Botanist", "Custom Smart Contract Escrow"],
      btnText: "Deploy Enterprise"
    },
    {
      name: "Wholesale Nexus",
      price: "$99/mo",
      desc: "Ultimate setup for large scale agro-exporters & corporations.",
      features: ["Global Freight Tracking Integration", "Predictive Yield Analytics Models", "Zero Platform Commission Trading", "Unlimited Cloud Data Vaults"],
      btnText: "Connect Nexus Layer"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 border-t border-slate-700/60 px-8 max-w-full overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[10px]">Fair Monetization</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Flexible Scales For Every Field
        </h2>
        <p className="text-lg mb-6">
          Drag or swipe through our operational plans. The active layer takes central focus, showcasing scaled features for your agricultural structure.
        </p>

        <div className="px-4 md:px-0 w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.5}
            centeredSlides={true}
            initialSlide={1}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
              1280: { slidesPerView: 3.5, centeredSlides: true }
            }}
            className="pricingSwiper !overflow-hidden !pb-14"
          >
            {tiers.map((tier, index) => {
              const isCardActive = index === activeIndex;

              return (
                <SwiperSlide key={index} className="py-6 transition-all duration-500">
                  <div 
                    className={`pricing-card-wrapper h-[480px] w-full transition-all duration-500 ease-out rounded-[2.5rem] p-8 border text-left flex flex-col justify-between relative backdrop-blur-md ${
                      isCardActive 
                        ? "opacity-100 scale-105 border-emerald-500/40 bg-gradient-to-b from-emerald-950/80 to-slate-950 shadow-2xl shadow-emerald-950/50" 
                        : "opacity-40 scale-90 bg-slate-800/20 border-slate-800"
                    }`}
                    style={{ boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.05)' }}
                  >
                    {isCardActive && (
                      <div className="absolute top-4 right-6 bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
                        Active Layer
                      </div>
                    )}

                    <div>
                      <h3 className={`text-xl font-bold transition duration-300 ${isCardActive ? "text-emerald-300" : "text-slate-100"}`}>
                        {tier.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {tier.desc}
                      </p>
                      
                      <div className="my-6">
                        <span className="text-4xl font-black tracking-tight text-white">
                          {tier.price}
                        </span>
                      </div>

                      <ul className="space-y-3 pt-4 border-t border-slate-800/80">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                            <span className="text-emerald-400 text-xs font-bold">✓</span> 
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                      isCardActive
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-900/30 hover:opacity-95"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}>
                      {tier.btnText}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}