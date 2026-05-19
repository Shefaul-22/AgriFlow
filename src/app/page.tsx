import Image from "next/image";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import FAQ from "./Home/FAQ";
import DiseaseScannerCTA from "./Home/DiseaseScannerCTA";
import SuccessStories from "./Home/SuccessStories";
import ImpactStats from './Home/ImpactStats';
import AppPromo from './Home/AppPromo';
import Pricing from './Home/Pricing';

export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-screen font-sans flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div>
          <State />
          <Features />
          <AppPromo/>
          <DiseaseScannerCTA></DiseaseScannerCTA>
          <SuccessStories></SuccessStories>
          <Pricing></Pricing>
          <CTA />
          <ImpactStats></ImpactStats>
          <FAQ/>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
