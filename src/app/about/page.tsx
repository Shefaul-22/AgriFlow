"use client"
import React from 'react';
 import tomatolive from "../Images/tomato live.jpg"


const AboutPage: React.FC = () => {
  return (
    <main className="bg-white text-gray-800 font-sans 
    overflow-hidden">
   {/* Hero Section */}
<section className="relative p-6 px-10 bg-gradient-to-br from-green-50 via-emerald-50 to-white px-6 overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#10b981_0%,transparent_60%)] opacity-10"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">

      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 mb-8">
        <span className="text-2xl">🌱</span>
        <span className="uppercase tracking-[4px] text-sm font-semibold text-green-700">
          AgriFlow
        </span>
      </div>

      <h1 className="text-3xl md:text-3xl font-bold leading-tight mb-6 text-gray-900">
        Empowering Farmers,<br />
        Connecting the <span className="text-green-600">World</span> 🌍
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
        Real-time marketplace that connects Bangladeshi farmers directly with global buyers 
        for fair prices and fresh produce.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">
      <img
        src={tomatolive.src}
        alt=""
        className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />

      {/* Floating Badge */}
      <div className="absolute -bottom-6 -left-6 bg-white shadow-xl px-4 py-2 rounded-xl text-sm font-medium">
        🌍 Global Buyers
      </div>

      <div className="absolute -top-6 -right-6 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
        🔴 Live Farms
      </div>
    </div>

  </div>
</section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              AgriFlow was founded in Sylhet with a simple yet powerful dream — to give farmers 
              the respect, power, and fair price they deserve.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we are eliminating middlemen and connecting farmers directly to buyers 
              using modern technology and a transparent marketplace.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-12 rounded-3xl text-center">
            <div className="text-7xl mb-6">🌾</div>
            <h3 className="text-3xl font-semibold text-green-800">From Soil to Global Market</h3>
            <p className="text-green-700 mt-3">Born in Bangladesh • Growing Worldwide</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-green-100 hover:shadow-xl transition-all">
            <div className="text-6xl mb-8">🎯</div>
            <h3 className="text-4xl font-bold mb-5 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To revolutionize agriculture in Bangladesh by enabling farmers to sell directly, 
              transparently, and globally using AI-powered tools and real-time marketplace.
            </p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-green-100 hover:shadow-xl transition-all">
            <div className="text-6xl mb-8">🌟</div>
            <h3 className="text-4xl font-bold mb-5 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where every farmer gets the best price for their produce, 
              and every buyer receives fresh, traceable, and high-quality agricultural products.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Growing Impact</h2>
          <p className="text-gray-600 text-lg mb-12">Real numbers, real lives changed</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: "Farmers Connected", sub: "Across Bangladesh" },
              { number: "25+", label: "Countries Reached", sub: "Exporting fresh produce" },
              { number: "50K+", label: "Orders Completed", sub: "Successful transactions" },
            ].map((item, index) => (
              <div 
                key={index}
                className="group p-10 bg-white border border-green-100 hover:border-green-300 rounded-3xl transition-all hover:-translate-y-3"
              >
                <div className="text-7xl font-bold text-green-600 mb-4">{item.number}</div>
                <div className="text-2xl font-semibold text-gray-800 mb-1">{item.label}</div>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "📱", title: "Live Bidding", desc: "Real-time auction system ensuring farmers get the best market price." },
              { emoji: "🤖", title: "AI Price Prediction", desc: "Smart recommendations based on current market trends and demand." },
              { emoji: "🚚", title: "Direct Delivery", desc: "Fast and reliable logistics from farm straight to the buyer." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="text-5xl mb-6">{feature.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-10">
            {[
              {
                q: "How does AgriFlow work?",
                a: "Farmers list their fresh produce with photos and go live. Buyers can view, bid, or purchase directly from the farmer."
              },
              {
                q: "Is AgriFlow available only in Bangladesh?",
                a: "We are currently focused on Bangladesh with plans to expand internationally very soon."
              },
              {
                q: "How do farmers get paid?",
                a: "Payments are transferred directly to bank accounts or mobile wallets (bKash, Nagad, Rocket) within 24-48 hours after successful delivery."
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-10 last:border-none last:pb-0">
                <h4 className="font-semibold text-2xl mb-4 text-gray-900">{faq.q}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Contact */}
<section
  id="contact"
  className="py-24 px-6 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white relative overflow-hidden"
>
  {/* Glow Effect */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <p className="text-green-300 mb-3 uppercase tracking-widest">
        Contact Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Let’s Build Something <br /> Amazing Together 🌱
      </h2>

      <p className="text-green-100 text-lg mb-8 max-w-md">
        Whether you're a farmer, buyer, or partner — we’re here to help you
        connect, grow, and succeed with AgriFlow.
      </p>

      {/* Quick Info */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 group">
          <span className="text-2xl group-hover:scale-110 transition">✉️</span>
          <a
            href="mailto:agriflow@gmail.com"
            className="text-lg hover:underline"
          >
            agriflow@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4 group">
          <span className="text-2xl group-hover:scale-110 transition">📞</span>
          <a
            href="tel:+8801712345678"
            className="text-lg hover:underline"
          >
            +880 1712-345678
          </a>
        </div>
      </div>
    </div>

    {/* Right Card */}
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition duration-300">

      <h3 className="text-2xl font-semibold mb-6 text-center">
        Send a Message
      </h3>

      {/* Form */}
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          rows={4}
          placeholder="Your Message..."
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-4 bg-white text-green-800 font-semibold rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-[1.02]"
        >
          Send Message 🚀
        </button>
      </form>

      <p className="mt-6 text-center text-green-200 text-sm">
        ⚡ We usually reply within 24 hours
      </p>
    </div>

  </div>
</section>

    </main>
  );
};

export default AboutPage;