"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    badge: "SMART AI FARMING",
    title: "Optimize every acre with",
    titleHighlight: "real-time intelligence",
    description:
      "Predict yields, tune irrigation, and balance nutrients using AI-powered field insights that make every decision smarter.",
    video: "https://assets.mixkit.co/videos/36957/36957-720.mp4",
  },
  {
    badge: "FARMER CONSULTING",
    title: "Connect directly with",
    titleHighlight: "agriculture specialists",
    description:
      "Access expert agronomy advice, crop planning support, and practical guidance when your farm needs it most.",
    video: "https://assets.mixkit.co/videos/36930/36930-720.mp4",
  },
  {
    badge: "HYGIENIC PACKAGING",
    title: "Preserve harvest quality with",
    titleHighlight: "clean fruits handling",
    description:
      "Reduce contamination and spoilage with hygienic workflows designed for freshness, safety, and premium value.",
    video: "https://assets.mixkit.co/videos/21795/21795-720.mp4",
  },
  {
    badge: "HARVEST OPERATIONS",
    title: "Harvest smarter on",
    titleHighlight: "soil-friendly workflows",
    description:
      "Streamline harvest timing, crew coordination, and post-cut handling to protect soil health and maximize crop value.",
    video: "https://assets.mixkit.co/videos/25075/25075-720.mp4",
  },
  {
    badge: "DRONE MONITORING",
    title: "Monitor fields from",
    titleHighlight: "above with precision",
    description:
      "Use aerial scouting and drone imagery to spot stress, pests, and nutrient gaps before they become costly problems.",
    video: "https://assets.mixkit.co/videos/7717/7717-720.mp4",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = slides[currentIndex];

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[85vh] lg:h-[95vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Slide Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              key={slide.video}
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay: Text visibility improvement */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#CCFF00] bg-green-950/40 backdrop-blur-sm border border-[#CCFF00]/30 rounded-full uppercase shadow-lg">
                {slide.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] drop-shadow-lg">
                {slide.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-500">
                  {slide.titleHighlight}
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>

              <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#CCFF00]">
                <span className="h-1 w-10 rounded-full bg-[#CCFF00]" />
                <span>Modern agriculture, smarter every day</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none">

        {/* Pagination Dots */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? "w-10 h-2.5 bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CCFF00] border border-white/20 hover:border-[#CCFF00] text-white hover:text-black backdrop-blur-md transition-all group"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CCFF00] border border-white/20 hover:border-[#CCFF00] text-white hover:text-black backdrop-blur-md transition-all group"
            aria-label="Next slide"
          >
            <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;