import Footer from "@/app/components/Footer";
import Navber from "@/app/components/Navber";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";

export default function Home() {
  return (
    <div className="">
      <Navber></Navber>
      <main className="">
        <Hero></Hero>
        <State></State>
        <Features></Features>
        <CTA></CTA>
      </main>
      <Footer></Footer>
    </div>
  );
}
