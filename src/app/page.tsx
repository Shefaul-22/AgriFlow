import Footer from "@/app/components/Footer";
import Navber from "@/app/components/Navber";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";

export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col flex-1 items-center justify-center font-sans dark:bg-gray-600">
      
      <Navber></Navber>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero></Hero>
        <State></State>
        <Features></Features>
        <CTA></CTA>
      </main>

      <Footer></Footer>

    </div>
  );
}