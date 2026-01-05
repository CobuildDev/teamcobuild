"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Configuration ---
const LOGOS = [
  { name: "Partner 1", src: "/partners/devdarl.png" },
  { name: "Partner 2", src: "/partners/blutech.png" },
  { name: "Partner 3", src: "/partners/divinefavourfotoshop.png" },
  { name: "Partner 4", src: "/partners/ighub.webp" },
  { name: "Partner 5", src: "/partners/kingdesigns.png" },
  { name: "Partner 6", src: "/partners/sdachurchmawa.png" },
  { name: "Partner 7", src: "/partners/PCF.png" },
  { name: "Partner 8", src: "/partners/cadixx.png" },
  { name: "Partner 9", src: "/partners/openquanta.png" },
  { name: "Partner 10", src: "/partners/oba.svg" },
];

export default function Partners() {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Building with the best
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden mask-gradient">
        {/* Gradient Masks (Fades edges) 
            Note: If tailwind mask-image isn't working, these absolute divs are a fallback 
        */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* The Moving Track */}
        <motion.div
          className="flex flex-nowrap gap-16 items-center"
          // We animate x from 0 to -50% because we doubled the content.
          // This creates a perfect, seamless loop.
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, // Adjust speed: higher = slower
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* We duplicate the logos array to ensure the loop is seamless */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-16 flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                sizes=""
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
