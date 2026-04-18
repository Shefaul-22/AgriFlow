"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/app/components/Button";

const CTA = () => {
  const container = useRef(null);
  const circleL = useRef(null);
  const circleR = useRef(null);
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);

  useGSAP(() => {
    gsap.to(circleL.current, {
      x: "random(-30, 30)",
      y: "random(-20, 20)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(circleR.current, {
      x: "random(30, -30)",
      y: "random(20, -20)",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(bubble1.current, {
      x: "random(-100, 100)",
      y: "random(-50, 50)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
      ease: "power1.inOut",
    });

    gsap.to(bubble2.current, {
      x: "random(100, -100)",
      y: "random(50, -100)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
      ease: "power1.inOut",
    });

  }, { scope: container });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 m-4 sm:m-10 md:m-20">
      <div 
        ref={container}
        className="relative w-full py-12 sm:py-20 md:py-24 bg-[#00A859] overflow-hidden rounded-2xl sm:rounded-[2.5rem] text-center"
      >
        <div ref={circleL} className="hidden sm:block absolute top-[-10%] left-[-5%] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] border border-white/20 rounded-full bg-white/5 pointer-events-none" />
        <div ref={circleR} className="hidden md:block absolute bottom-[-15%] right-[-5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] border border-white/20 rounded-full bg-white/5 pointer-events-none" />

        <div ref={bubble1} className="hidden md:block absolute top-[20%] right-[15%] w-16 h-16 border border-white/40 rounded-full bg-white/10 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
        <div ref={bubble2} className="hidden md:block absolute bottom-[20%] left-[20%] w-12 h-12 border border-white/40 rounded-full bg-white/10 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to transform your <br className="hidden sm:inline"/> 
            agricultural future?
          </h2>
          
          <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of producers and buyers who are already leveraging AgriFlow AI 
            to build a more resilient global food system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button text="Get Started Now" className="bg-white text-[#00A859] hover:bg-gray-100 border-none px-10 py-4 font-bold" />
            <Button text="Watch Demo" variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 font-bold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;