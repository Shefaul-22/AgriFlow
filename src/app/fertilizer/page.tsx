 "use client";
 import compost from "../Images/compost.png";
 import compostcreate from "../Images/compostcreate.png";
  import flower from "../Images/flower.jpg"
  import { useEffect, useState } from "react";

export default function FertilizerPage() {

    const texts = [
  "নাইট্রোজেন সার কীভাবে ব্যবহার করবেন",
  "কোন ফসলের জন্য কোন সার ভালো",
  "কম্পোস্ট তৈরির সহজ উপায়",
  "ফসলের ফলন বাড়ানোর কৌশল"
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % texts.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);
  return (
    <main className="bg-white text-gray-800 font-sans">

      {/* HERO SECTION with Background Image + Motion */}
      <section 
        className="relative py-28 md:py-40 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${flower.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6">
            <span className="text-3xl">🌱</span>
            <span className="font-medium tracking-wide">কৃষকদের জন্য সম্পূর্ণ গাইড</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
            সারের সম্পূর্ণ গাইড<br /> 
            <span className="text-emerald-300">সবজি ও ফসলের জন্য</span>
          </h1>
        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mt-6 h-10 transition-all duration-500">
  <span className="inline-block animate-fade-in-up">
    {texts[index]}
  </span>
</p>
        </div>
      </section>



      {/* TYPES OF FERTILIZER - Now 6 Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">সারের প্রধান প্রকারভেদ</h2>
          <p className="text-center text-gray-600 mb-12">৬টি গুরুত্বপূর্ণ সার যা বাংলাদেশের কৃষকরা বেশি ব্যবহার করেন</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nitrogen */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">🟢</div>
              <h3 className="text-2xl font-semibold mb-3">নাইট্রোজেন সার (Urea)</h3>
              <p className="text-gray-600">পাতা সবুজ করে, দ্রুত বৃদ্ধি ঘটায়।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: পালং, ধান, গম, লেটুস</p>
            </div>

            {/* Phosphorus */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">🟠</div>
              <h3 className="text-2xl font-semibold mb-3">ফসফরাস সার (TSP / SSP)</h3>
              <p className="text-gray-600">শিকড় মজবুত করে, ফুল-ফল বাড়ায়।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: টমেটো, আলু, বেগুন</p>
            </div>

            {/* Potassium */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">🔵</div>
              <h3 className="text-2xl font-semibold mb-3">পটাশিয়াম সার (MOP)</h3>
              <p className="text-gray-600">রোগ প্রতিরোধ ক্ষমতা বাড়ায়, ফলের মান উন্নত করে।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: কলা, মরিচ, আম, লাউ</p>
            </div>

            {/* DAP */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">⚪</div>
              <h3 className="text-2xl font-semibold mb-3">DAP (Diammonium Phosphate)</h3>
              <p className="text-gray-600">নাইট্রোজেন + ফসফরাস একসাথে। চারা গজানোর জন্য খুব ভালো।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: সব সবজির চারা, ধান, ভুট্টা</p>
            </div>

            {/* TSP */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">🟡</div>
              <h3 className="text-2xl font-semibold mb-3">TSP (Triple Super Phosphate)</h3>
              <p className="text-gray-600">উচ্চ ফসফরাস। শিকড় ও ফলন বাড়াতে সবচেয়ে কার্যকর।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: আলু, টমেটো, বেগুন, ফুলকপি</p>
            </div>

            {/* MOP */}
            <div className="group bg-white border border-emerald-100 hover:border-emerald-400 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-6">🔷</div>
              <h3 className="text-2xl font-semibold mb-3">MOP (Muriate of Potash)</h3>
              <p className="text-gray-600">পটাশিয়ামের প্রধান উৎস। ফল ও সবজির গুণমান বাড়ায়।</p>
              <p className="mt-4 text-emerald-700 font-medium">উপযোগী: লাউ, ঢেঁড়স, মরিচ, কলা</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: সবজির জন্য সেরা সার */}
      <section className="py-20 bg-emerald-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">সবজির জন্য সেরা সারের পরামর্শ</h2>
          <p className="text-center text-gray-600 mb-12">জনপ্রিয় সবজির জন্য কোন সার বেশি উপকারী</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🍅</div>
              <h3 className="font-semibold text-xl mb-2">টমেটো / বেগুন</h3>
              <p className="text-gray-600">TSP + MOP + সামান্য Urea। ফল ধরার সময় ফসফরাস-পটাশ বেশি দিন।</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🥬</div>
              <h3 className="font-semibold text-xl mb-2">পালং শাক / লেটুস</h3>
              <p className="text-gray-600">Urea বা Nitrogen-rich সার। পাতা বড় ও সবুজ করতে নাইট্রোজেন বেশি দরকার।</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🥔</div>
              <h3 className="font-semibold text-xl mb-2">আলু</h3>
              <p className="text-gray-600">TSP + MOP + DAP। শিকড় ও কন্দ বড় করতে ফসফরাস-পটাশ বেশি।</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🍆</div>
              <h3 className="font-semibold text-xl mb-2">লাউ / ঢেঁড়স / শিম</h3>
              <p className="text-gray-600">MOP + TSP। ফলন বেশি হতে পটাশিয়াম খুব জরুরি।</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🥦</div>
              <h3 className="font-semibold text-xl mb-2">বাঁধাকপি / ফুলকপি</h3>
              <p className="text-gray-600">Balanced NPK (DAP + Urea + MOP)। Nitrogen দিয়ে পাতা, Phosphorus দিয়ে মাথা।</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="font-semibold text-xl mb-2">মরিচ / ধনিয়া</h3>
              <p className="text-gray-600">MOP + সামান্য TSP। পটাশিয়াম ফলের ঝাঁঝ ও গুণ বাড়ায়।</p>
            </div>
          </div>
        </div>
      </section>



      {/* ORGANIC COMPOST (আগের মতো রাখা হয়েছে, দুটি ইমেজসহ) */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
        {/* ORGANIC COMPOST */}
<section className="py-20 bg-white px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-6">
      কম্পোস্ট সার তৈরির পদ্ধতি
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      ঘরের সহজ উপকরণ ব্যবহার করে প্রাকৃতিক সার তৈরি করার সম্পূর্ণ প্রক্রিয়া
    </p>

    {/* IMAGE 1 */}
    <div className="mb-12">
      <img
        src={compostcreate.src}
        alt="Compost Materials"
        className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
      />
    </div>

    {/* Materials + Benefits */}
    <div className="grid md:grid-cols-2 gap-10 mb-16">

      <div>
        <h3 className="text-2xl font-semibold mb-4">কি কি লাগবে</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• সবজির খোসা</li>
          <li>• শুকনা পাতা</li>
          <li>• গোবর</li>
          <li>• রান্নাঘরের বর্জ্য</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">উপকারিতা</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✓ মাটির উর্বরতা বৃদ্ধি করে</li>
          <li>✓ পানি ধরে রাখার ক্ষমতা বাড়ায়</li>
          <li>✓ সম্পূর্ণ প্রাকৃতিক ও নিরাপদ</li>
          <li>✓ রাসায়নিক সারের প্রয়োজন কমায়</li>
        </ul>
      </div>

    </div>

    {/* IMAGE 2 */}
    <div className="mb-16">
      <img
        src={compost.src}
        alt="Compost Process"
        className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
      />
    </div>

    {/* Step by Step */}
    <div className="max-w-4xl mx-auto space-y-6">

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold text-lg">ধাপ ১: উপকরণ সংগ্রহ</h3>
        <p className="text-gray-600">
          রান্নাঘরের বর্জ্য, পাতা, খড় এবং গোবর সংগ্রহ করুন।
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold text-lg">ধাপ ২: স্তর তৈরি</h3>
        <p className="text-gray-600">
          শুকনা ও ভেজা উপকরণ স্তরে স্তরে সাজান।
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold text-lg">ধাপ ৩: মাটি ও পানি যোগ</h3>
        <p className="text-gray-600">
          হালকা মাটি দিন এবং আর্দ্র রাখুন।
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold text-lg">ধাপ ৪: উল্টানো</h3>
        <p className="text-gray-600">
          প্রতি ৫-৭ দিনে একবার নেড়ে দিন যাতে বাতাস প্রবেশ করে।
        </p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-semibold text-lg">ধাপ ৫: প্রস্তুত</h3>
        <p className="text-gray-600">
          ৩-৬ সপ্তাহ পরে কালো, গন্ধহীন কম্পোস্ট তৈরি হবে।
        </p>
      </div>

    </div>

  </div>
</section>
        </div>
      </section>

      {/* HOW TO MAKE COMPOST + CROPS GUIDE - আগের মতোই রেখে দাও */}

    </main>
  );
}