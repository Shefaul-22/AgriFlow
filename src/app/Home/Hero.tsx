"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/app/components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    badge: "GUESS FARMING AI",
    title: "Turn soil data into",
    titleHighlight: "crop decisions",
    description: "Combine your farm inputs with regional patterns so you can choose crops with higher confidence and clearer expectations.",
    video: "https://www.pexels.com/download/video/10816528/",
    buttonText: "Discover Now",
  },
  {
    badge: "CROP MONITORING",
    title: "See field health",
    titleHighlight: "as it changes",
    description: "Track growth stages, stress signals, and anomalies early so interventions happen while they are still affordable.",
    video: "https://www.pexels.com/download/video/34182419/",
    buttonText: "Learn More",
  },
  {
    badge: "SOIL HEALTH",
    title: "Balance nutrients",
    titleHighlight: "before you fertilize",
    description: "Measure NPK, organic matter, and pH so every input has a purpose and runoff risk stays lower.",
    video: "https://www.pexels.com/download/video/4768007/",
    buttonText: "Read More",
  },
  {
    badge: "DISEASE DETECTION",
    title: "Catch outbreaks",
    titleHighlight: "while they are local",
    description: "Upload leaf or canopy images to flag probable diseases fast—then match them to treatment playbooks.",
    video: "https://www.pexels.com/download/video/32947253/",
    buttonText: "Start Scanning",
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="relative w-[100vw] left-1/2 -translate-x-1/2 h-[85vh] lg:h-[95vh] overflow-hidden bg-black pt-0 m-0 p-0 border-0">
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
              src={slides[currentIndex].video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#031c0b]/90 via-[#031c0b]/50 to-transparent dark:from-black/95 dark:via-black/70 dark:to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#CCFF00] bg-green-950/40 backdrop-blur-sm border border-[#CCFF00]/30 rounded-full uppercase shadow-lg">
                {slides[currentIndex].badge}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] drop-shadow-lg">
                {slides[currentIndex].title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-500">
                  {slides[currentIndex].titleHighlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed drop-shadow-md">
                {slides[currentIndex].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Notice that Button from your global components is used here */}
                <Button
                  text={slides[currentIndex].buttonText}
                  href="/services"
                  variant="primary"
                  className="bg-[#CCFF00] text-black hover:bg-[#bbe600] px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] border-none hover:-translate-y-1"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Custom Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">

        {/* Pagination Dots */}
        <div className="flex items-center gap-3">
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
        <div className="flex items-center gap-4 opacity-0 md:opacity-100">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CCFF00] border border-white/20 hover:border-[#CCFF00] text-white hover:text-black backdrop-blur-md transition-all group pointer-events-auto"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CCFF00] border border-white/20 hover:border-[#CCFF00] text-white hover:text-black backdrop-blur-md transition-all group pointer-events-auto"
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