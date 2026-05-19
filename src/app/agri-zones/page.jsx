"use client";
import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ─── District data ─── */
const DISTRICTS_DATA = [
  { id: "1",  division_id: "3", name: "Dhaka",        bn_name: "ঢাকা",        lat: "23.7115253", long: "90.4111451", agriculture: { famous: ["Vegetables","Milk","Fish"],             products_count: 120, category: ["Urban Farming","Dairy"] } },
  { id: "2",  division_id: "3", name: "Faridpur",     bn_name: "ফরিদপুর",    lat: "23.6070822", long: "89.8429406", agriculture: { famous: ["Jute","Rice","Onion"],                  products_count: 85,  category: ["Jute Zone"] } },
  { id: "3",  division_id: "3", name: "Gazipur",      bn_name: "গাজীপুর",    lat: "24.0022858", long: "90.4264283", agriculture: { famous: ["Pineapple","Jackfruit","Vegetables"],   products_count: 95,  category: ["Fruit Zone"] } },
  { id: "4",  division_id: "3", name: "Gopalganj",    bn_name: "গোপালগঞ্জ",  lat: "23.0050857", long: "89.8266059", agriculture: { famous: ["Rice","Coconut","Fish"],                products_count: 80,  category: ["Rice Zone"] } },
  { id: "5",  division_id: "8", name: "Jamalpur",     bn_name: "জামালপুর",   lat: "24.937533",  long: "89.937775",  agriculture: { famous: ["Rice","Maize","Sugarcane"],            products_count: 90,  category: ["Crop Zone"] } },
  { id: "6",  division_id: "3", name: "Kishoreganj",  bn_name: "কিশোরগঞ্জ",  lat: "24.444937",  long: "90.776575",  agriculture: { famous: ["Fish","Rice","Vegetables"],            products_count: 100, category: ["Haor Zone","Fish Zone"] } },
  { id: "7",  division_id: "3", name: "Madaripur",    bn_name: "মাদারীপুর",  lat: "23.164102",  long: "90.1896805", agriculture: { famous: ["Jute","Rice","Vegetables"],            products_count: 75,  category: ["Jute Zone"] } },
  { id: "8",  division_id: "3", name: "Manikganj",    bn_name: "মানিকগঞ্জ",  lat: "23.8644",    long: "90.0047",    agriculture: { famous: ["Rice","Vegetables","Milk"],            products_count: 85,  category: ["Dairy Zone"] } },
  { id: "9",  division_id: "3", name: "Munshiganj",   bn_name: "মুন্সিগঞ্জ", lat: "23.5422",    long: "90.5305",    agriculture: { famous: ["Potato","Rice","Vegetables"],          products_count: 110, category: ["Potato Zone"] } },
  { id: "10", division_id: "8", name: "Mymensingh",   bn_name: "ময়মনসিংহ",  lat: "24.7471",    long: "90.4203",    agriculture: { famous: ["Rice","Fish","Vegetables"],            products_count: 120, category: ["Agro Zone"] } },
  { id: "11", division_id: "3", name: "Narayanganj",  bn_name: "নারায়াণগঞ্জ",lat:"23.63366",   long: "90.496482",  agriculture: { famous: ["Vegetables","Fish","Poultry"],         products_count: 90,  category: ["Agro Market Hub"] } },
  { id: "12", division_id: "3", name: "Narsingdi",    bn_name: "নরসিংদী",    lat: "23.932233",  long: "90.71541",   agriculture: { famous: ["Banana","Pineapple","Vegetables"],    products_count: 105, category: ["Fruit Zone"] } },
  { id: "13", division_id: "8", name: "Netrokona",    bn_name: "নেত্রকোণা",  lat: "24.870955",  long: "90.727887",  agriculture: { famous: ["Fish","Rice","Vegetables"],            products_count: 85,  category: ["Haor Zone","Fish Zone"] } },
  { id: "14", division_id: "3", name: "Rajbari",      bn_name: "রাজবাড়ি",   lat: "23.7574305", long: "89.6444665", agriculture: { famous: ["Rice","Jute","Onion"],                  products_count: 80,  category: ["Jute Zone"] } },
  { id: "15", division_id: "3", name: "Shariatpur",   bn_name: "শরীয়তপুর",  lat: "23.2423",    long: "90.4348",    agriculture: { famous: ["Rice","Fish","Chili"],                 products_count: 75,  category: ["River Zone"] } },
  { id: "16", division_id: "8", name: "Sherpur",      bn_name: "শেরপুর",     lat: "25.0204933", long: "90.0152966", agriculture: { famous: ["Rice","Maize","Vegetables"],           products_count: 85,  category: ["Crop Zone"] } },
  { id: "17", division_id: "3", name: "Tangail",      bn_name: "টাঙ্গাইল",   lat: "24.2513",    long: "89.9167",    agriculture: { famous: ["Tangail Cotton","Rice","Vegetables"],  products_count: 110, category: ["Cotton Zone","Crop Zone"] } },
  { id: "18", division_id: "5", name: "Bogura",       bn_name: "বগুড়া",     lat: "24.8465228", long: "89.377755",  agriculture: { famous: ["Yogurt (Doi)","Potato","Rice"],        products_count: 130, category: ["Dairy Zone","Potato Zone"] } },
  { id: "19", division_id: "5", name: "Joypurhat",    bn_name: "জয়পুরহাট",  lat: "25.0968",    long: "89.0227",    agriculture: { famous: ["Rice","Wheat","Sugarcane"],            products_count: 95,  category: ["Crop Zone"] } },
  { id: "20", division_id: "5", name: "Naogaon",      bn_name: "নওগাঁ",      lat: "24.7936",    long: "88.9318",    agriculture: { famous: ["Rice","Mango","Wheat"],                products_count: 120, category: ["Rice Zone","Fruit Zone"] } },
  { id: "21", division_id: "5", name: "Natore",       bn_name: "নাটোর",      lat: "24.420556",  long: "89.000282",  agriculture: { famous: ["Rice","Sugarcane","Vegetables"],       products_count: 100, category: ["Crop Zone"] } },
  { id: "22", division_id: "5", name: "Nawabganj",    bn_name: "নবাবগঞ্জ",   lat: "24.5965034", long: "88.2775122", agriculture: { famous: ["Mango","Rice","Wheat"],               products_count: 140, category: ["Mango Zone","Fruit Zone"] } },
  { id: "23", division_id: "5", name: "Pabna",        bn_name: "পাবনা",      lat: "23.998524",  long: "89.233645",  agriculture: { famous: ["Milk","Rice","Fish"],                  products_count: 130, category: ["Dairy Zone"] } },
  { id: "24", division_id: "5", name: "Rajshahi",     bn_name: "রাজশাহী",    lat: "24.3745",    long: "88.6042",    agriculture: { famous: ["Mango","Litchi"],                      products_count: 150, category: ["Fruit Zone"] } },
  { id: "25", division_id: "5", name: "Sirajgonj",    bn_name: "সিরাজগঞ্জ",  lat: "24.4533978", long: "89.7006815", agriculture: { famous: ["Jute","Rice","Milk"],                  products_count: 110, category: ["Jute Zone","Dairy Zone"] } },
  { id: "26", division_id: "6", name: "Dinajpur",     bn_name: "দিনাজপুর",   lat: "25.6217061", long: "88.6354504", agriculture: { famous: ["Rice","Wheat","Litchi"],               products_count: 125, category: ["Crop Zone"] } },
  { id: "27", division_id: "6", name: "Gaibandha",    bn_name: "গাইবান্ধা",  lat: "25.328751",  long: "89.528088",  agriculture: { famous: ["Rice","Maize","Vegetables"],           products_count: 95,  category: ["Crop Zone"] } },
  { id: "28", division_id: "6", name: "Kurigram",     bn_name: "কুড়িগ্রাম",  lat: "25.805445",  long: "89.636174",  agriculture: { famous: ["Rice","Jute","Vegetables"],            products_count: 90,  category: ["Floodplain Zone"] } },
  { id: "29", division_id: "6", name: "Lalmonirhat",  bn_name: "লালমনিরহাট", lat: "25.9923",    long: "89.2847",    agriculture: { famous: ["Rice","Maize","Potato"],               products_count: 100, category: ["Crop Zone"] } },
  { id: "30", division_id: "6", name: "Nilphamari",   bn_name: "নীলফামারী",  lat: "25.931794",  long: "88.856006",  agriculture: { famous: ["Rice","Potato","Vegetables"],          products_count: 110, category: ["Potato Zone"] } },
  { id: "31", division_id: "6", name: "Panchagarh",   bn_name: "পঞ্চগড়",    lat: "26.3411",    long: "88.5541606", agriculture: { famous: ["Tea","Rice","Maize"],                  products_count: 95,  category: ["Tea Zone","Crop Zone"] } },
  { id: "32", division_id: "6", name: "Rangpur",      bn_name: "রংপুর",      lat: "25.7558096", long: "89.244462",  agriculture: { famous: ["Tobacco","Rice","Potato"],             products_count: 120, category: ["Crop Zone"] } },
  { id: "33", division_id: "6", name: "Thakurgaon",   bn_name: "ঠাকুরগাঁও",  lat: "26.0336945", long: "88.4616834", agriculture: { famous: ["Wheat","Rice","Potato"],               products_count: 110, category: ["Crop Zone"] } },
  { id: "34", division_id: "1", name: "Barguna",      bn_name: "বরগুনা",     lat: "22.0953",    long: "90.1121",    agriculture: { famous: ["Fish","Rice","Betel Nut"],             products_count: 85,  category: ["Coastal Zone","Fish Zone"] } },
  { id: "35", division_id: "1", name: "Barishal",     bn_name: "বরিশাল",     lat: "22.7010",    long: "90.3535",    agriculture: { famous: ["Guava","Rice","Fish"],                 products_count: 130, category: ["Fruit Zone","River Zone"] } },
  { id: "36", division_id: "1", name: "Bhola",        bn_name: "ভোলা",       lat: "22.685923",  long: "90.648179",  agriculture: { famous: ["Fish","Chili","Rice"],                 products_count: 100, category: ["Coastal Zone"] } },
  { id: "37", division_id: "1", name: "Jhalokati",    bn_name: "ঝালকাঠি",    lat: "22.6406",    long: "90.1987",    agriculture: { famous: ["Rice","Betel Leaf","Fish"],            products_count: 90,  category: ["River Zone"] } },
  { id: "38", division_id: "1", name: "Patuakhali",   bn_name: "পটুয়াখালী", lat: "22.3596316", long: "90.3298712", agriculture: { famous: ["Rice","Fish","Watermelon"],            products_count: 115, category: ["Coastal Zone","Fruit Zone"] } },
  { id: "39", division_id: "1", name: "Pirojpur",     bn_name: "পিরোজপুর",   lat: "22.5841",    long: "89.9720",    agriculture: { famous: ["Guava","Rice","Fish"],                 products_count: 105, category: ["Fruit Zone","River Zone"] } },
  { id: "40", division_id: "2", name: "Bandarban",    bn_name: "বান্দরবান",   lat: "22.1953275", long: "92.2183773", agriculture: { famous: ["Hill Fruits","Ginger","Turmeric"],     products_count: 80,  category: ["Hill Zone","Spice Zone"] } },
  { id: "41", division_id: "2", name: "Brahmanbaria", bn_name: "ব্রাহ্মণবাড়িয়া",lat:"23.9570904",long:"91.1119286",agriculture:{ famous:["Fish","Rice","Vegetables"],products_count:110,category:["Fish Zone"]}},
  { id: "42", division_id: "2", name: "Chandpur",     bn_name: "চাঁদপুর",    lat: "23.2332585", long: "90.6712912", agriculture: { famous: ["Hilsa Fish","Rice"],                  products_count: 120, category: ["Fish Zone","River Zone"] } },
  { id: "43", division_id: "2", name: "Chattogram",   bn_name: "চট্টগ্রাম",  lat: "22.335109",  long: "91.834073",  agriculture: { famous: ["Tea","Fruits"],                       products_count: 140, category: ["Hill Zone","Port Zone"] } },
  { id: "44", division_id: "2", name: "Cumilla",      bn_name: "কুমিল্লা",   lat: "23.4682747", long: "91.1788135", agriculture: { famous: ["Rice","Vegetables"],                  products_count: 110, category: ["Crop Zone"] } },
  { id: "45", division_id: "2", name: "Cox's Bazar",  bn_name: "কক্স বাজার", lat: "21.4272",    long: "92.0058",    agriculture: { famous: ["Fish","Salt"],                        products_count: 95,  category: ["Coastal Zone","Sea Zone"] } },
  { id: "46", division_id: "2", name: "Feni",         bn_name: "ফেনী",       lat: "23.0159",    long: "91.3976",    agriculture: { famous: ["Rice","Sugarcane"],                   products_count: 100, category: ["Agriculture Zone"] } },
  { id: "47", division_id: "2", name: "Khagrachari",  bn_name: "খাগড়াছড়ি",  lat: "23.119285",  long: "91.984663",  agriculture: { famous: ["Fruits","Bamboo"],                    products_count: 85,  category: ["Hill Zone","Forest Zone"] } },
  { id: "48", division_id: "2", name: "Lakshmipur",   bn_name: "লক্ষ্মীপুর", lat: "22.942477",  long: "90.841184",  agriculture: { famous: ["Rice","Fish"],                        products_count: 105, category: ["River Zone"] } },
  { id: "49", division_id: "2", name: "Noakhali",     bn_name: "নোয়াখালী",   lat: "22.869563",  long: "91.099398",  agriculture: { famous: ["Fish","Rice"],                        products_count: 115, category: ["Coastal Zone"] } },
  { id: "50", division_id: "2", name: "Rangamati",    bn_name: "রাঙ্গামাটি",  lat: "22.7324",    long: "92.2985",    agriculture: { famous: ["Fruits","Fish"],                      products_count: 90,  category: ["Hill Zone","Lake Zone"] } },
  { id: "51", division_id: "7", name: "Habiganj",     bn_name: "হবিগঞ্জ",    lat: "24.374945",  long: "91.41553",   agriculture: { famous: ["Rice","Tea"],                         products_count: 100, category: ["Wetland Zone"] } },
  { id: "52", division_id: "7", name: "Maulvibazar",  bn_name: "মৌলভীবাজার", lat: "24.482934",  long: "91.777417",  agriculture: { famous: ["Tea","Pineapple"],                    products_count: 130, category: ["Tea Zone","Hill Zone"] } },
  { id: "53", division_id: "7", name: "Sunamganj",    bn_name: "সুনামগঞ্জ",  lat: "25.0658042", long: "91.3950115", agriculture: { famous: ["Fish","Rice"],                        products_count: 95,  category: ["Haor Zone"] } },
  { id: "54", division_id: "7", name: "Sylhet",       bn_name: "সিলেট",      lat: "24.8897956", long: "91.8697894", agriculture: { famous: ["Tea","Citrus Fruits"],                products_count: 135, category: ["Tea Zone"] } },
  { id: "55", division_id: "4", name: "Bagerhat",     bn_name: "বাগেরহাট",   lat: "22.651568",  long: "89.785938",  agriculture: { famous: ["Shrimp","Rice"],                      products_count: 110, category: ["Coastal Zone"] } },
  { id: "56", division_id: "4", name: "Chuadanga",    bn_name: "চুয়াডাঙ্গা", lat: "23.6401961", long: "88.841841",  agriculture: { famous: ["Tobacco","Rice"],                     products_count: 90,  category: ["Dry Zone"] } },
  { id: "57", division_id: "4", name: "Jashore",      bn_name: "যশোর",       lat: "23.16643",   long: "89.2081126", agriculture: { famous: ["Flowers","Fish"],                     products_count: 125, category: ["Agro Zone"] } },
  { id: "58", division_id: "4", name: "Jhenaidah",    bn_name: "ঝিনাইদহ",    lat: "23.5448176", long: "89.1539213", agriculture: { famous: ["Rice","Jute"],                        products_count: 100, category: ["Crop Zone"] } },
  { id: "59", division_id: "4", name: "Khulna",       bn_name: "খুলনা",      lat: "22.815774",  long: "89.568679",  agriculture: { famous: ["Shrimp","Fish"],                      products_count: 130, category: ["Coastal Zone"] } },
  { id: "60", division_id: "4", name: "Kushtia",      bn_name: "কুষ্টিয়া",   lat: "23.901258",  long: "89.120482",  agriculture: { famous: ["Rice","Sugarcane"],                   products_count: 105, category: ["Agro Zone"] } },
  { id: "61", division_id: "4", name: "Magura",       bn_name: "মাগুরা",     lat: "23.487337",  long: "89.419956",  agriculture: { famous: ["Rice","Vegetables"],                  products_count: 95,  category: ["Crop Zone"] } },
  { id: "62", division_id: "4", name: "Meherpur",     bn_name: "মেহেরপুর",   lat: "23.762213",  long: "88.631821",  agriculture: { famous: ["Mango","Rice"],                       products_count: 85,  category: ["Fruit Zone"] } },
  { id: "63", division_id: "4", name: "Narail",       bn_name: "নড়াইল",     lat: "23.172534",  long: "89.512672",  agriculture: { famous: ["Fish","Rice"],                        products_count: 90,  category: ["River Zone"] } },
  { id: "64", division_id: "4", name: "Satkhira",     bn_name: "সাতক্ষীরা",  lat: "22.7185",    long: "89.0705",    agriculture: { famous: ["Shrimp","Crab"],                      products_count: 115, category: ["Coastal Zone"] } },
];

/* ─── Category colour map ─── */
const CATEGORY_COLORS = {
  "Fruit Zone":      { bg: "#fef3c7", text: "#92400e", dot: "#f59e0b",  border: "#fde68a" },
  "Rice Zone":       { bg: "#dcfce7", text: "#14532d", dot: "#16a34a",  border: "#bbf7d0" },
  "Fish Zone":       { bg: "#dbeafe", text: "#1e3a8a", dot: "#3b82f6",  border: "#bfdbfe" },
  "Haor Zone":       { bg: "#e0f2fe", text: "#075985", dot: "#0ea5e9",  border: "#bae6fd" },
  "Coastal Zone":    { bg: "#cffafe", text: "#164e63", dot: "#06b6d4",  border: "#a5f3fc" },
  "Dairy Zone":      { bg: "#fce7f3", text: "#831843", dot: "#ec4899",  border: "#fbcfe8" },
  "Tea Zone":        { bg: "#d1fae5", text: "#065f46", dot: "#10b981",  border: "#a7f3d0" },
  "Jute Zone":       { bg: "#fef9c3", text: "#713f12", dot: "#ca8a04",  border: "#fef08a" },
  "Hill Zone":       { bg: "#f3e8ff", text: "#581c87", dot: "#9333ea",  border: "#e9d5ff" },
  "Potato Zone":     { bg: "#ffedd5", text: "#7c2d12", dot: "#ea580c",  border: "#fed7aa" },
  "Crop Zone":       { bg: "#f0fdf4", text: "#166534", dot: "#22c55e",  border: "#bbf7d0" },
  "Agro Zone":       { bg: "#ecfdf5", text: "#064e3b", dot: "#059669",  border: "#a7f3d0" },
  "River Zone":      { bg: "#eff6ff", text: "#1e40af", dot: "#2563eb",  border: "#bfdbfe" },
  "Mango Zone":      { bg: "#fff7ed", text: "#9a3412", dot: "#ea580c",  border: "#fed7aa" },
};

const getCatStyle = (cat) =>
  CATEGORY_COLORS[cat] || { bg: "#f1f5f9", text: "#334155", dot: "#64748b", border: "#e2e8f0" };

const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(DISTRICTS_DATA.flatMap((d) => d.agriculture.category))).sort(),
];

/* ─── Fix Leaflet default icon ─── */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [22, 36],
  iconAnchor: [11, 36],
});

/* ════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
export default function AgriMapPage() {
  const [searchTerm, setSearchTerm]         = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount]     = useState(12);
  const [mapReady, setMapReady]             = useState(false);

  /* Defer Leaflet mount to fix SSR / scroll jank */
  useEffect(() => { setMapReady(true); }, []);

  const filtered = DISTRICTS_DATA.filter((d) => {
    const q = searchTerm.toLowerCase();
    return (
      (d.name.toLowerCase().includes(q) || d.bn_name.includes(searchTerm)) &&
      (activeCategory === "All" || d.agriculture.category.includes(activeCategory))
    );
  });

  const visible       = filtered.slice(0, visibleCount);
  const totalProducts = DISTRICTS_DATA.reduce((s, d) => s + d.agriculture.products_count, 0);

  return (
    <div className="min-h-screen bg-[#f3f6f3] font-sans">
      {/* ── Google fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        body, * { font-family: 'DM Sans', sans-serif; }

        /* Map scroll fix — prevent page scroll from propagating into Leaflet */
        .leaflet-container { touch-action: none; }
        .map-block .leaflet-container { cursor: grab; }
        .map-block .leaflet-container:active { cursor: grabbing; }

        /* hide leaflet attribution clutter on small */
        @media (max-width:480px) { .leaflet-control-attribution { font-size:9px; } }

        /* custom scrollbar for chip row */
        .chip-row::-webkit-scrollbar { height: 3px; }
        .chip-row::-webkit-scrollbar-thumb { background: #a8d5ae; border-radius: 99px; }

        /* card hover */
        .district-card { transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
        .district-card:hover { transform: translateY(-4px); }

        /* load-more pulse */
        @keyframes fadein { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
        .card-appear { animation: fadein .3s ease both; }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(140deg,#052e16 0%,#14532d 55%,#1a6b3c 100%)" }}
      >
        {/* texture overlays */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 35%, rgba(34,197,94,.18) 0%, transparent 55%),
              radial-gradient(ellipse at 10% 85%, rgba(251,191,36,.07) 0%, transparent 45%)`,
          }}
        />

        {/* wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#f3f6f3]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />

        {/* ── Hero inner: flex-col on mobile, flex-row on lg ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 pb-24
                        flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          {/* LEFT: text + stats */}
          <div className="flex-1">
            {/* badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30
                            bg-green-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-widest
                            text-green-300 uppercase">
              🌾 Bangladesh Agricultural Atlas
            </div>

            <h1 className="font-display mb-4 leading-[1.1] text-white"
              style={{ fontSize: "clamp(2.1rem,4.5vw,3.6rem)", fontWeight: 800 }}>
              AgriFlow —{" "}
              <span className="text-amber-300">District</span>
              <br />Agriculture Map
            </h1>

            <p className="mb-10 max-w-md text-base font-light leading-relaxed text-green-200/90">
              Explore crop zones, famous products, and agricultural data from all{" "}
              <span className="font-semibold text-white">64 districts</span> across Bangladesh.
            </p>

            {/* stats pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { num: "64",                         label: "Districts" },
                { num: `${totalProducts.toLocaleString()}+`, label: "Total Products" },
                { num: `${ALL_CATEGORIES.length - 1}`, label: "Agro Zones" },
                { num: "8",                          label: "Divisions" },
              ].map(({ num, label }) => (
                <div key={label}
                  className="min-w-[100px] rounded-2xl border border-white/10 bg-white/8
                             px-5 py-4 text-center backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.07)" }}>
                  <span className="font-display block text-3xl font-bold text-amber-300">{num}</span>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-green-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: decorative mini legend card — visible lg+ */}
          <div className="mt-12 lg:mt-0 hidden lg:block flex-shrink-0 w-72">
            <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.07)" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-300">
                🗺️ Zone Legend
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(CATEGORY_COLORS).slice(0, 10).map(([cat, s]) => (
                  <div key={cat} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: s.dot }} />
                    <span className="truncate text-[11px] text-green-100/80">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STICKY CONTROLS ══════════════ */}
      <div className="sticky top-0 z-50 border-b border-green-200/60
                      bg-[#eef5ee]/95 px-5 py-3 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-2.5">

          {/* search */}
          <div className="flex items-center gap-2.5 rounded-xl border border-green-200
                          bg-white px-4 transition-all focus-within:border-green-500
                          focus-within:ring-2 focus-within:ring-green-500/15">
            <span className="text-green-500 text-sm select-none">🔍</span>
            <input
              type="text"
              placeholder="Search district (e.g. Rajshahi, সিলেট)..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(12); }}
              className="flex-1 bg-transparent py-2.5 text-sm text-gray-800 outline-none
                         placeholder:text-green-400/70"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")}
                className="text-gray-400 hover:text-gray-600 text-sm leading-none">✕</button>
            )}
          </div>

          {/* filter chips */}
          <div className="chip-row flex gap-1.5 overflow-x-auto pb-0.5">
            {ALL_CATEGORIES.map((cat) => (
              <button key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(12); }}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1 text-[12px] font-medium
                            transition-all duration-150
                            ${activeCategory === cat
                              ? "border-green-800 bg-green-800 text-white shadow-md shadow-green-900/20"
                              : "border-green-200 bg-white text-green-700 hover:border-green-500 hover:bg-green-50"
                            }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ PAGE BODY ══════════════ */}
      <div className="mx-auto max-w-7xl px-5 py-10 pb-20">

        {/* ── MAP SECTION ── */}
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-display text-2xl font-bold text-green-900">🗺️ Interactive Map</h2>
            <span className="rounded-full border border-green-200 bg-green-100 px-3 py-0.5
                             text-[12px] font-semibold text-green-800">
              {filtered.length} districts
            </span>
          </div>

          {/*
            KEY FIX: map-block wrapper uses `touch-action: pan-x pan-y` on the outer div
            but the inner Leaflet container gets `touch-action: none` via CSS above.
            The `onWheel` stopPropagation prevents page scroll when hovering the map.
          */}
          <div
            className="map-block overflow-hidden rounded-2xl border-2 border-green-200
                       shadow-[0_6px_36px_rgba(20,83,45,.12)]"
            style={{ height: 480 }}
            onWheel={(e) => e.stopPropagation()}
          >
            {mapReady && (
              <MapContainer
                center={[23.685, 90.3563]}
                zoom={7}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filtered.map((d) => (
                  <Marker
                    key={d.id}
                    position={[parseFloat(d.lat), parseFloat(d.long)]}
                  >
                    <Popup>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", minWidth: 190 }}>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem",
                                    fontWeight: 700, color: "#15803d", marginBottom: 2 }}>
                          {d.name}{" "}
                          <span style={{ fontWeight: 400, color: "#94a3b8", fontSize: ".82rem" }}>
                            {d.bn_name}
                          </span>
                        </p>
                        <p style={{ fontSize: ".73rem", color: "#64748b", marginBottom: 7 }}>
                          {d.agriculture.category.join(" · ")}
                        </p>
                        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", marginBottom: 7 }} />
                        <p style={{ fontSize: ".82rem", color: "#334155" }}>
                          <strong>🌾 Famous:</strong> {d.agriculture.famous.join(", ")}
                        </p>
                        <p style={{ fontSize: ".82rem", color: "#334155", marginTop: 4 }}>
                          <strong>📦 Products:</strong>{" "}
                          <span style={{ color: "#15803d", fontWeight: 700 }}>
                            {d.agriculture.products_count}+
                          </span>
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
        </div>

        {/* ── CARDS SECTION ── */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <h2 className="font-display text-2xl font-bold text-green-900">📋 District Cards</h2>
            <span className="rounded-full border border-green-200 bg-green-100 px-3 py-0.5
                             text-[12px] font-semibold text-green-800">
              {filtered.length} results
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-green-200 bg-white
                            py-20 text-center text-green-600">
              <span className="mb-3 block text-4xl">🔍</span>
              No districts match{" "}
              <strong>&ldquo;{searchTerm || activeCategory}&rdquo;</strong>.
              <br />
              <span className="text-sm text-green-400">Try a different search or category.</span>
            </div>
          ) : (
            <>
              {/*
                Grid:
                  mobile  (< sm)  → 1 col
                  sm–md          → 2 cols
                  lg–xl          → 3 cols
                  xl+            → 4 cols
              */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visible.map((d, i) => {
                  const primary = d.agriculture.category[0];
                  const sty     = getCatStyle(primary);
                  return (
                    <div
                      key={d.id}
                      className="district-card card-appear flex flex-col rounded-2xl
                                 border bg-white hover:shadow-[0_14px_36px_rgba(20,83,45,.11)]"
                      style={{
                        borderColor: sty.border,
                        animationDelay: `${(i % 12) * 30}ms`,
                      }}
                    >
                      {/* TOP */}
                      <div className="flex items-start justify-between gap-2
                                      border-b border-gray-100 px-4 py-4">
                        <div>
                          <p className="font-display text-[1.05rem] font-bold leading-tight text-green-900">
                            {d.name}
                          </p>
                          <p className="mt-0.5 text-[13px] text-green-400">{d.bn_name}</p>
                        </div>
                        {/* primary zone badge */}
                        <div
                          className="flex flex-shrink-0 items-center gap-1.5 rounded-full
                                     px-2.5 py-1 text-[11px] font-semibold"
                          style={{ background: sty.bg, color: sty.text }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                            style={{ background: sty.dot }} />
                          {primary}
                        </div>
                      </div>

                      {/* BODY */}
                      <div className="flex-1 space-y-3 px-4 py-3">
                        {/* famous products */}
                        <div>
                          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-green-400">
                            🌾 Famous Products
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {d.agriculture.famous.map((item) => (
                              <span key={item}
                                className="rounded-md border border-green-100 bg-green-50 px-2
                                           py-0.5 text-[12px] font-medium text-green-800">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* extra zones */}
                        {d.agriculture.category.length > 1 && (
                          <div>
                            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-green-400">
                              🏷️ All Zones
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {d.agriculture.category.map((cat) => {
                                const cs = getCatStyle(cat);
                                return (
                                  <span key={cat}
                                    className="rounded-full px-2 py-0.5 text-[11px] font-medium"
                                    style={{ background: cs.bg, color: cs.text }}>
                                    {cat}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* FOOTER */}
                      <div className="flex items-center justify-between rounded-b-2xl
                                      border-t border-gray-100 bg-gray-50/60 px-4 py-2.5">
                        <p className="text-[13px] text-gray-500">
                          📦{" "}
                          <strong className="text-base font-bold text-green-700">
                            {d.agriculture.products_count}+
                          </strong>{" "}
                          products
                        </p>
                        <p className="font-mono text-[10px] text-gray-300">
                          {parseFloat(d.lat).toFixed(2)}, {parseFloat(d.long).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load more */}
              {visibleCount < filtered.length && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount((v) => v + 12)}
                    className="rounded-xl bg-green-800 px-10 py-3.5 text-[15px] font-semibold
                               text-white shadow-lg shadow-green-900/25 transition-all duration-200
                               hover:-translate-y-0.5 hover:bg-green-900 hover:shadow-xl
                               hover:shadow-green-900/30 active:translate-y-0">
                    Load More Districts ({filtered.length - visibleCount} remaining) ↓
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}