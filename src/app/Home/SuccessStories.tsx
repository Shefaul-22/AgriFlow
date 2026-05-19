'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Swiper Components এবং Modules ইম্পোর্ট
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

export default function SuccessStories() {
  const containerRef = useRef(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // GSAP Entrance Animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Md. Rafiqul Islam",
      role: "Vegetable Cultivator • Jessore",
      quote: "AgriFlow's AI disease detector saved my entire tomato harvest from leaf rust! I instantly got the exact remedy.",
      img: "https://i.postimg.cc/g2Gc19tm/rebecca-ritchie-NWrp3FK68y-E-unsplash.jpg"
    },
    {
      id: 2,
      name: "Abdul Majid",
      role: "Rice Farmer • Naogaon",
      quote: "Sold my paddy straight to Dhaka wholesalers for 25% higher profits using the integrated online marketplace.",
      img: "https://i.postimg.cc/GmpwkbST/jed-owen-1Jg-UGDdc-Wn-M-unsplash.jpg"
    },
    {
      id: 3,
      name: "Sujat Ali",
      role: "Agri-Entrepreneur • Bogra",
      quote: "Ordered bulk organic fertilizers and received them at my doorstep within 48 hours safely without hassle.",
      img: "https://i.postimg.cc/SNgN0TB2/gregory-hayes-QFm-NQXLPb-Zc-unsplash.jpg"
    },
    {
      id: 4,
      name: "Anwara Begum",
      role: "Floriculturist • Savar",
      quote: "The live advisory system helps me monitor groundwater and optimal harvesting periods daily with precision.",
      img: "https://i.postimg.cc/0jLnrd3j/tim-mossholder-x-Dw-Ea2kae-JA-unsplash.jpg"
    }
  ];

  return (
    <section ref={containerRef} className="w-full px-4 sm:px-6 md:px-10 py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content & Custom Navigation */}
        <div className="lg:col-span-4 space-y-6 text-left z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-green-800 font-bold uppercase tracking-wider text-[10px]">Real Impact</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            Real Results Shared by <br />
            <span className="text-green-600">AgriFlow Community</span>
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Listen to our trusted farming partners as they discuss their seasonal growth, operational efficiency, and the massive yield impact of using AgriFlow tools.
          </p>

          {/* Custom Arrow Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button 
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white/50 hover:bg-slate-900 hover:text-white flex items-center justify-center transition shadow-sm group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform group-hover:-translate-x-0.5 transition">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white/50 hover:bg-slate-900 hover:text-white flex items-center justify-center transition shadow-sm group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform group-hover:translate-x-0.5 transition">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Clean Grid Swiper (No Horizontal Scroll Bug) */}
        <div className="lg:col-span-8 w-full overflow-hidden px-1">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="py-2">
                {/* Modern Card Design: Image Top, Content Bottom */}
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-[440px] hover:shadow-md transition duration-300">
                  
                  {/* Top: Farmer Image */}
                  <div className="h-44 w-full overflow-hidden relative">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Bottom: Review & Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    
                    {/* Review Quote text */}
                    <div className="relative">
                      <span className="text-4xl text-green-200 font-serif absolute -top-4 -left-1 select-none">“</span>
                      <p className="text-slate-600 text-sm leading-relaxed italic pt-2 pl-4 relative z-10 line-clamp-5">
                        {t.quote}
                      </p>
                    </div>
                    
                    {/* Profile details */}
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                      <p className="text-xs text-green-600 font-semibold mt-0.5">{t.role}</p>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}