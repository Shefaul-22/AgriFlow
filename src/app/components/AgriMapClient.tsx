"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "leaflet/dist/leaflet.css";

// from src/data
import {
  DISTRICTS_DATA,
  CATEGORY_COLORS,
} from "@/data/agri-data";

/* Leaflet dynamic import fix */
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

/* Fix icon */

useEffect(() => {
  const fixLeafletIcon = async () => {
    const L = await import("leaflet");

    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  };

  fixLeafletIcon();
}, []);


const getCatStyle = (cat: string) =>
  CATEGORY_COLORS[cat as keyof typeof CATEGORY_COLORS] || {
    bg: "#f1f5f9",
    text: "#334155",
    dot: "#64748b",
    border: "#e2e8f0",
  };

const ALL_CATEGORIES = [
  "All",
  ...Array.from(
    new Set(DISTRICTS_DATA.flatMap((d) => d.agriculture.category))
  ).sort(),
];

export default function AgriMapClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => setMapReady(true), []);

  const filtered = DISTRICTS_DATA.filter((d) => {
    const q = searchTerm.toLowerCase();
    return (
      (d.name.toLowerCase().includes(q) ||
        d.bn_name.includes(searchTerm)) &&
      (activeCategory === "All" ||
        d.agriculture.category.includes(activeCategory))
    );
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="p-4">
      {/* SEARCH */}
      <input
        className="border p-2 w-full mb-3"
        placeholder="Search district..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setVisibleCount(12);
        }}
      />

      {/* CATEGORY */}
      <div className="flex gap-2 flex-wrap mb-4">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(12);
            }}
            className={`px-3 py-1 border rounded ${
              activeCategory === cat ? "bg-green-700 text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAP */}
      <div className="h-[450px] mb-6">
        {mapReady && (
          <MapContainer
            center={[23.685, 90.3563]}
            zoom={7}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filtered.map((d) => (
              <Marker
                key={d.id}
                position={[parseFloat(d.lat), parseFloat(d.long)]}
              >
                <Popup>
                  <b>{d.name}</b>
                  <br />
                  {d.bn_name}
                  <br />
                  {d.agriculture.famous.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {visible.map((d) => {
          const primary = d.agriculture.category[0];
          const style = getCatStyle(primary);

          return (
            <div
              key={d.id}
              className="border p-3 rounded"
              style={{ borderColor: style.border }}
            >
              <h3 className="font-bold">{d.name}</h3>
              <p className="text-sm">{d.bn_name}</p>

              <div className="flex flex-wrap gap-1 mt-2">
                {d.agriculture.famous.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-green-100 px-2 py-0.5 rounded"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-xs mt-2 text-gray-500">
                📦 {d.agriculture.products_count}+
              </p>
            </div>
          );
        })}
      </div>

      {/* LOAD MORE */}
      {visibleCount < filtered.length && (
        <button
          className="mt-5 px-4 py-2 bg-green-700 text-white rounded"
          onClick={() => setVisibleCount((v) => v + 12)}
        >
          Load More
        </button>
      )}
    </div>
  );
}