import Footer from "@/app/components/Footer";
import Navber from "@/app/components/Navber";


export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col flex-1 items-center justify-center font-sans dark:bg-gray-600">
           <Navber></Navber>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
           <Footer></Footer>
    </div>
  );
}
