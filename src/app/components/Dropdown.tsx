"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Dropdown = ({ title, items }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button className="font-medium hover:text-green-500 transition">
        {title}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-4 w-56 rounded-2xl bg-gray-600/90 shadow-xl border border-gray-200 dark:border-zinc-800 p-2"
          >
            {items.map((item: any, i: number) => (
              <Link
                key={i}
                href={item.link}
                className="block px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-zinc-800 transition"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;