"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/Button";
import cropImage from "@/app/Images/Crop-Analysis.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white dark:bg-black rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-wider uppercase rounded-full w-fit border border-green-200 dark:border-green-800">
            Agriculture 4.0
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-main-black dark:text-white leading-[1.1]">
            Global Trade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-lime-600">
              Gateway.
            </span>
          </h1>

          <p className="text-desc-gray text-lg max-w-lg leading-relaxed">
            Harness the power of precision AI to bridge the gap between local
            terroir and global demand. Secure, transparent, and intelligent
            agricultural commerce.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              text="Join as Farmer"
              href="/register"
              variant="primary"
              className="shadow-xl shadow-green-900/20"
            />
            <Button
              text="Join as Buyer"
              href="/marketplace"
              variant="outline"
            />
          </div>
        </motion.div>

        {/* Right Image/Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800 bg-zinc-900 aspect-video lg:aspect-square flex items-center justify-center">
            <Image
        src={cropImage}
        alt="AI Agriculture"
        placeholder="blur" 
        className="object-cover w-full h-full"
      />
            {/* Floating AI Card */}
            <div className="absolute bottom-6 right-6 bg-white dark:bg-zinc-950 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold text-gray-400">
                Predictive Output
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-600">
                  4.2{" "}
                  <span className="text-sm font-normal text-gray-500">
                    tons/ha
                  </span>
                </span>
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">
                  98.4%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
