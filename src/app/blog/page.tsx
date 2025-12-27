"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Sparkles, PenTool, ArrowRight, Loader2, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <main className="grow flex flex-col items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
        
        {/* Background Grid (Consistent with other pages) */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500 opacity-5 blur-[120px]" />
        </div>

        {/* The "Island" Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Top Gradient */}
          <div className="absolute top-0 left-0 w-full h-1" />
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
            <PenTool size={12} className="text-emerald-600" />
            <span>Editorial in Progress</span>
          </div>

          {/* Icon Animation */}
          <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100">
             <BookOpen size={32} className="text-slate-400" />
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-2xl border border-dashed border-emerald-300 opacity-50"
             />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Words are loading...
          </h1>
          
          <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
            We are currently documenting our process of building a tech startup in Aba. 
            Detailed engineering logs, culture notes, and lessons learned are coming soon.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center p-6 bg-emerald-50 border border-emerald-100 rounded-2xl"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                  <Sparkles size={20} />
                </div>
                <p className="text-emerald-800 font-semibold">You're on the list!</p>
                <p className="text-emerald-600 text-sm">We'll notify you when the first post drops.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Notify Me When Ready
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
            <p className="text-xs text-slate-400 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>

        </motion.div>

      </main>

      <Footer />
    </div>
  );
}