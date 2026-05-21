"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineChip,
  HiOutlinePresentationChartLine,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { PiCommandBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import Map from "@/app/Images/Map.png";

/* ─── tiny helpers ─── */
const TAG = ({
  color = "green",
  children,
}: {
  color?: "green" | "blue" | "amber";
  children: React.ReactNode;
}) => {
  const palettes = {
    green:
      "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-100 dark:border-green-800",
    blue:
      "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    amber:
      "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${palettes[color]}`}
    >
      {children}
    </span>
  );
};

const LearnLink = ({ href = "#", className = "" }) => (
  <Link href={href}
    className={`group inline-flex items-center gap-1.5 text-[13px] font-semibold
                text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400
                transition-colors ${className}`}>
    Learn more
    <HiOutlineArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
  </Link>
);

const Card = ({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
export default function Features() {
  return (
    <section className="w-full px-6 md:px-15 py-15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            {/* eyebrow */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase
                             tracking-widest text-green-600 dark:text-green-400 mb-4">
              <span className="h-px w-8 bg-green-500 inline-block" />
              Platform Features
            </span>

            <h2 className="text-4xl md:text-[2.8rem] font-extrabold leading-tight mb-4">
              Engineered for the{" "}
              <span className="text-transparent bg-clip-text
                               bg-gradient-to-r from-emerald-700 to-lime-500
                               dark:from-emerald-400 dark:to-lime-400">
                Modern Terroir
              </span>
            </h2>

            <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-xl">
              Our ecosystem uses decentralized intelligence to ensure every grain, fruit, and bean
              reaches its maximum economic potential.
            </p>
          </div>

          <Link href="/ecosystem"
            className="group inline-flex items-center gap-2 text-[14px] font-bold
                       text-green-700 dark:text-green-500
                       hover:text-green-900 dark:hover:text-green-300 transition-colors shrink-0">
            Explore Ecosystem
            <HiOutlineArrowNarrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ════ BENTO GRID (FIXED ALIGNMENT) ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ── Card 1: Precision Matching — Full width on Large screens ── */}
          <Card className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl border
                           border-gray-100 
                           p-8 flex flex-col md:flex-row justify-between gap-8 shadow-sm">
            <div className="pointer-events-none absolute -top-20 -right-5 w-64 h-64
                            rounded-full bg-green-100/40 blur-3xl" />

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-500/10
                              flex items-center justify-center mb-6">
                <HiOutlineChip className="text-2xl text-green-700 dark:text-green-400" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Precision Matching
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-xl">
                AI algorithms analyze soil data, climate history, and global market trends to match
                crops with the most profitable buyers — instantly, at scale.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <TAG color="green">Optimized Logistics</TAG>
                <TAG color="blue">Real-time Demand</TAG>
                <TAG color="amber">AI-Powered</TAG>
              </div>
            </div>

            <img src="https://i.postimg.cc/z3Z0PDpr/20260519-2049-image.png" alt="" className="object-cover rounded-2xl md:h-60 w-full"
            />
          </Card>

          {/* ── Card 2: Smart Contracts (1 Column) ── */}
          <Card className="rounded-3xl border border-transparent dark:border-zinc-800
                           bg-zinc-100 dark:bg-zinc-900 p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800
                              flex items-center justify-center mb-6">
                <PiCommandBold className="text-2xl text-zinc-500 dark:text-zinc-400" />
              </div>
              <Link href='/about' className="text-2xl font-bold text-gray-900 dark:text-white mb-3 block">
                Smart Contracts
              </Link>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                Automated, blockchain-verified agreements that trigger payments upon AI validation
                of quality and delivery — zero paperwork.
              </p>
            </div>
            <LearnLink href="/learn-more" className="mt-8" />
          </Card>

          {/* ── Card 3: Real-time Terroir (1 Column) ── */}
          <Card className="rounded-3xl bg-[#E5E9FF] dark:bg-blue-950/40 p-8
                           border border-blue-100 dark:border-blue-900/50 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50
                              flex items-center justify-center mb-6">
                <HiOutlinePresentationChartLine className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Real-time Terroir
              </h3>
              <p className="text-[15px] leading-relaxed text-blue-900/60 dark:text-blue-200/60">
                Live sensory data streaming directly from fields to buyer dashboards —
                unprecedented end-to-end transparency.
              </p>
            </div>
            <LearnLink href="/learn-more" className="mt-8 text-blue-600 dark:text-blue-400" />
          </Card>

          {/* ── Card 4: Lightning Analytics (1 Column - Grid-র ব্যালেন্স বজায় রাখতে) ── */}
          <Card className="rounded-3xl border border-gray-100 dark:border-zinc-800
                           bg-white dark:bg-zinc-900/60 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/40
                              flex items-center justify-center mb-6">
                <HiOutlineLightningBolt className="text-2xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Instant Payouts
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                Experience lightning-fast transactions processed right at harvest time, reducing hold
                periods and maximizing liquidity.
              </p>
            </div>
            <LearnLink href="/learn-more" className="mt-8" />
          </Card>

          {/* ── Card 5: Global Network — Full width on Large screens ── */}
          <Card className="md:col-span-2 lg:col-span-3 rounded-3xl border border-gray-100
                        p-8 shadow-sm
                           flex flex-col lg:flex-row gap-8 lg:items-center">

            {/* text side */}
            <div className="flex-1 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30
                              flex items-center justify-center mb-6">
                <HiOutlineGlobeAlt className="text-2xl text-green-700 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Global Network Visualization
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6 max-w-lg">
                Monitor trade routes, inventory levels, and crop health across every district from
                a single command centre. Filter by zone, division, or product type.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/agri-zones"
                  className="group inline-flex items-center gap-2 rounded-xl
                             bg-green-700 hover:bg-green-800 active:bg-green-900
                             px-5 py-2.5 text-[13px] font-bold text-white
                             transition-all shadow-md shadow-green-900/20">
                  <HiOutlineGlobeAlt className="text-base" />
                  Open AgriFlow Map
                  <HiOutlineArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* map image side */}
            <div className="relative flex-shrink-0 w-full lg:w-[420px] xl:w-[500px]
                             h-52 lg:h-64 rounded-2xl overflow-hidden
                             border border-gray-100 dark:border-zinc-700 block">

              {/* base map */}
              <Image
                src={Map}
                alt="Bangladesh Agricultural Map preview"
                fill
                className="object-cover grayscale
                           group-hover:grayscale-0 group-hover:opacity-80
                           dark:group-hover:opacity-55 transition-all duration-500"
              />

              {/* green overlay */}
              <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent
                              transition-colors duration-500" />

              {/* CTA pill */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href='/agri-zones' className="inline-flex items-center gap-2 rounded-full
                                 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm
                                 px-5 py-2.5 text-[13px] font-bold
                                 text-green-800 dark:text-green-300
                                 border border-green-200 dark:border-green-800
                                 shadow-lg hover:scale-105 hover:shadow-xl
                                 transition-all duration-300">
                  <HiOutlineGlobeAlt className="text-base text-green-600 dark:text-green-400" />
                  Explore Interactive Map
                  <HiOutlineArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* district count badge */}
              <div className="absolute top-3 right-3 rounded-full
                              bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm
                              px-3 py-1 text-[11px] font-bold
                              text-green-700 dark:text-green-400
                              border border-green-100 dark:border-green-900">
                64 Districts
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}