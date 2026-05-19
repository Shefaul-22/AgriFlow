import React from 'react';
import apple from "../Images/apple.png"
import Navbar from '../components/Navbar';

const HowItWorksPage: React.FC = () => {
  return (

    <>
    <Navbar/>

    <main className="bg-white text-gray-800 font-sans overflow-hidden">

 {/* 🔥 HERO */}
<section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-white px-6 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(at_center,#10b981_0%,transparent_70%)] opacity-10"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">

      <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-green-200 mb-8 shadow-sm">
        <span className="text-3xl">🚜</span>
        <span className="text-green-700 font-semibold tracking-widest">
          HOW IT WORKS
        </span>
      </div>

      <h1 className="text-4xl md:text-4xl p-4 font-bold leading-tight mb-6 text-gray-900">
        From Farm to Table,<br />Simple & Transparent 🌱
      </h1>

      <p className="max-w-xl text-xl text-gray-600 mb-8">
        AgriFlow connects farmers, buyers, and delivery partners in real-time —
        ensuring fair prices and fresh produce delivered directly to your table.
      </p>

    </div>

    {/* RIGHT VISUAL */}
    <div className="relative flex justify-center">

      {/* Main Image */}
      <img
        src={apple.src}
        alt="Farm to Table Flow"
        className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />

      {/* Floating Badges */}
      <div className="absolute -top-4 -left-4 bg-white shadow-lg px-4 py-2 rounded-xl text-sm font-medium">
        🚜 Farm
      </div>

      <div className="absolute top-1/2 -right-6 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
         🍽️ Table
      </div>

      <div className="absolute -bottom-4 left-10 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
      
         📡 Live Market
      </div>

    </div>

  </div>
</section>
 

      {/* 🌟 3 MAIN STEPS (Visual Cards) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How AgriFlow Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Farmer */}
            <div className="group bg-white border border-green-100 hover:border-green-300 p-10 rounded-3xl transition-all hover:-trangray-y-2 duration-300">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110">👨‍🌾</div>
              <div className="text-green-600 font-semibold text-sm tracking-widest mb-2">STEP 01</div>
              <h3 className="text-2xl font-bold mb-4">Farmer Lists Product</h3>
              <p className="text-gray-600 leading-relaxed">
                Farmers upload fresh produce with high-quality photos, price, quantity, 
                and can go live to show real farm condition to buyers.
              </p>
            </div>

            {/* Step 2: Buyer */}
            <div className="group bg-white border border-green-100 hover:border-green-300 p-10 rounded-3xl transition-all hover:-trangray-y-2 duration-300">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110">🛒</div>
              <div className="text-green-600 font-semibold text-sm tracking-widest mb-2">STEP 02</div>
              <h3 className="text-2xl font-bold mb-4">Buyer Explores & Buys</h3>
              <p className="text-gray-600 leading-relaxed">
                Buyers browse the marketplace, watch live streams, place bids in real-time 
                auctions, or buy instantly at fixed price.
              </p>
            </div>

            {/* Step 3: Delivery */}
            <div className="group bg-white border border-green-100 hover:border-green-300 p-10 rounded-3xl transition-all hover:-trangray-y-2 duration-300">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110">🚚</div>
              <div className="text-green-600 font-semibold text-sm tracking-widest mb-2">STEP 03</div>
              <h3 className="text-2xl font-bold mb-4">Safe Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                After successful payment, our verified delivery partners pick up the produce 
                and deliver it fresh with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 DETAILED STEP-BY-STEP PROCESS */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Complete Process in Detail</h2>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Product Listing & Live Streaming",
                desc: "Farmers upload their crops with photos, description, expected harvest date, and location. They can also start live video streaming directly from the farm to build trust with buyers.",
                icon: "📸"
              },
              {
                step: "02",
                title: "Marketplace Browsing & Bidding",
                desc: "Buyers search, filter, and view products. They can buy instantly or participate in live bidding sessions where the price is determined in real-time based on demand.",
                icon: "🔴"
              },
              {
                step: "03",
                title: "Secure Payment & Confirmation",
                desc: "Payments are processed securely via bKash, Nagad, Rocket, or Bank Transfer. Both parties receive instant confirmation and digital invoice.",
                icon: "💳"
              },
              {
                step: "04",
                title: "Pickup & Real-time Tracking",
                desc: "Verified delivery partners collect the produce from the farmer’s location. Buyers can track their order live from pickup to delivery.",
                icon: "📍"
              },
              {
                step: "05",
                title: "Delivery & Quality Check",
                desc: "Fresh produce is delivered to the buyer’s doorstep. Buyers can check quality upon delivery and rate the farmer for future transparency.",
                icon: "✅"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-4xl font-bold transition-all group-hover:bg-green-600 group-hover:text-white">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 WHY AGRIFLOW - Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Farmers & Buyers Love AgriFlow</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We bring transparency, fairness, and technology together
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Real-time Bidding", desc: "Get the best price instantly" },
              { icon: "🤖", title: "AI Price Suggestion", desc: "Smart market insights" },
              { icon: "🔒", title: "Secure & Transparent", desc: "No middlemen, direct deal" },
              { icon: "🌱", title: "Fresh & Traceable", desc: "Farm to door tracking" },
              { icon: "📱", title: "Easy Mobile App", desc: "Available on Android & iOS" },
              { icon: "💰", title: "Fast Payment", desc: "Money reaches farmer quickly" },
              { icon: "🚀", title: "Live Streaming", desc: "See the farm in real-time" },
              { icon: "⭐", title: "Farmer Rating", desc: "Build trust & reputation" },
            ].map((benefit, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-green-200 p-8 rounded-3xl transition-all hover:shadow-md">
                <div className="text-5xl mb-5">{benefit.icon}</div>
                <h4 className="font-semibold text-xl mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 📞 LAST SECTION - Redesigned */}
<section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full"></div>

  <div className="max-w-5xl mx-auto text-center relative">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Get Started? 🚀
    </h2>

    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
      Whether you're a farmer looking for better prices or a buyer searching for
      fresh produce, AgriFlow makes everything simple, fast, and trustworthy.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-16 text-left max-w-4xl mx-auto">

      {/* Farmer */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:scale-105 transition duration-300 shadow-xl">
        <h4 className="font-semibold text-xl mb-4 text-emerald-300">For Farmers</h4>
        <ul className="space-y-3 text-blue-100">
          <li>✓ List products for free</li>
          <li>✓ Get better prices through bidding</li>
          <li>✓ Fast payment after delivery</li>
          <li>✓ Live streaming to attract buyers</li>
        </ul>
      </div>

      {/* Buyer */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:scale-105 transition duration-300 shadow-xl">
        <h4 className="font-semibold text-xl mb-4 text-blue-300">For Buyers</h4>
        <ul className="space-y-3 text-blue-100">
          <li>✓ Fresh produce directly from farm</li>
          <li>✓ Real-time price comparison</li>
          <li>✓ Live tracking of delivery</li>
          <li>✓ Quality guarantee & rating system</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:scale-105 transition duration-300 shadow-xl">
        <h4 className="font-semibold text-xl mb-4 text-purple-300">Contact Support</h4>

        <div className="space-y-4">
          <div>
            <p className="text-blue-200 text-sm">Email</p>
            <a href="mailto:agriflow@gmail.com" className="text-lg hover:underline">
              agriflow@gmail.com
            </a>
          </div>

          <div>
            <p className="text-blue-200 text-sm">Phone / WhatsApp</p>
            <a href="tel:+8801712345678" className="text-lg hover:underline">
              +880 1712-345678
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* CTA Button */}
    <a
      href="mailto:agriflow@gmail.com"
      className="inline-block px-12 py-5 bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold text-xl rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      Join AgriFlow Today 🌱
    </a>

    <p className="mt-8 text-blue-200 text-sm">
      ⚡ We reply within 24 hours • Available in Sylhet & all over Bangladesh
    </p>

  </div>
</section>

    </main>
    </>
  );
};

export default HowItWorksPage;