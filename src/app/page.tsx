import Footer from "@/app/components/Footer";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans dark:bg-gray-600">
      <Navbar></Navbar>
      <main className="py-30 px-10">
        <Hero></Hero>
        <State></State>
        <Features></Features>
        <CTA></CTA>
      </main>

      <Footer></Footer>

    </div>
  );
}