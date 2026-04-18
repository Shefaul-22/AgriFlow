import Image from "next/image";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto">
          <State />
          <Features />
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
