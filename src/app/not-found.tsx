"use client";
import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal, Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-20 px-4">
        
        {/* Background Grid */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-slate-900 opacity-5 blur-[100px]" />
        </div>

        <div className="max-w-2xl w-full text-center">
          
          {/* Animated 404 Glitch */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative inline-block mb-8"
          >
            <h1 className="text-[120px] md:text-[180px] font-bold text-slate-100 leading-none select-none">
              404
            </h1>
            <motion.div 
              animate={{ 
                x: [-2, 2, -2],
                opacity: [1, 0.8, 1]
              }}
              transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
              className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[180px] font-bold text-slate-900/10 mix-blend-overlay leading-none"
            >
              404
            </motion.div>
            
            {/* Construction Icon Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl rotate-12">
               <Construction size={48} className="text-emerald-500" />
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Blueprint not found.
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
            You've wandered into an empty lot. We haven't built this part of the infrastructure yet.
          </p>

          {/* Fake Terminal Log */}
          <div className="bg-slate-950 rounded-xl p-4 max-w-md mx-auto mb-10 text-left font-mono text-xs md:text-sm shadow-2xl border border-slate-800">
            <div className="flex gap-1.5 mb-3 border-b border-slate-800 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="space-y-1">
              <p className="text-slate-400">
                <span className="text-emerald-500">➜</span> ~ cobuild locate --path="{typeof window !== 'undefined' ? window.location.pathname : '/unknown'}"
              </p>
              <p className="text-red-400">Error: Route definition missing.</p>
              <p className="text-slate-500">Initiating recovery protocol...</p>
              <p className="text-slate-300 animate-pulse">_</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/10">
                <Home size={18} />
                Return Home
              </button>
            </Link>
            
            <button 
              onClick={() => typeof window !== 'undefined' && window.history.back()}
              className="flex items-center gap-2 bg-white text-slate-600 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}