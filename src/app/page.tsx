import Footer from "@/app/components/Footer";
import Hero from "@/app/Home/Hero";
import State from "@/app/Home/State";
import Features from "@/app/Home/Features";
import CTA from "@/app/Home/CTA";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="bg-gray-50 font-sans dark:bg-gray-600">
      <Navbar></Navbar>
      <main className="py-30 px-10">
        <Hero></Hero>
        <State></State>
        <Features></Features>
        <CTA></CTA>
=======
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      
        <div> shob delete kore disi</div>
>>>>>>> 0b429983b6249eea15426ef7c341b5f2dcaada88
      </main>

      <Footer></Footer>

    </div>
  );
}