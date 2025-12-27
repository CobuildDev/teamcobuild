"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, ChefHat, Sparkles, Rocket, Store, BrainCircuit } from "lucide-react";

// --- Sub-Component: Pricing Card ---
const PricingCard = ({ 
  title, 
  icon: Icon, 
  description, 
  features, 
  highlight = false,
  delay 
}: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`relative flex flex-col h-full rounded-3xl p-8 border ${
      highlight 
        ? "bg-slate-900 border-slate-800 text-white shadow-2xl scale-105 z-10" 
        : "bg-white border-slate-200 text-slate-900 shadow-sm hover:border-emerald-200"
    }`}
  >
    {highlight && (
      <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
        Most Popular
      </div>
    )}

    {/* Header */}
    <div className="mb-6">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
        highlight ? "bg-slate-800 text-emerald-400" : "bg-slate-50 text-slate-600"
      }`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-sm ${highlight ? "text-slate-400" : "text-slate-500"}`}>
        {description}
      </p>
    </div>

    {/* The "Cooking" Price Tag */}
    <div className={`mb-8 p-4 rounded-xl border border-dashed flex items-center justify-between ${
      highlight ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
    }`}>
      <div>
        <span className={`text-xs font-bold uppercase tracking-wider block ${
          highlight ? "text-slate-500" : "text-slate-400"
        }`}>
          Est. Cost
        </span>
        <div className="flex items-center gap-2">
          <ChefHat size={20} className="text-emerald-500" />
          <span className={`text-lg font-bold font-mono ${highlight ? "text-white" : "text-slate-900"}`}>
            Cooking...
          </span>
        </div>
      </div>
    </div>

    {/* Deliverables List */}
    <div className="flex-grow space-y-4 mb-8">
      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${
        highlight ? "text-slate-500" : "text-slate-400"
      }`}>
        What's included:
      </p>
      {features.map((feature: string, idx: number) => (
        <div key={idx} className="flex items-start gap-3">
          <div className={`mt-0.5 p-0.5 rounded-full ${
            highlight ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-600"
          }`}>
            <Check size={12} strokeWidth={3} />
          </div>
          <span className={`text-sm ${highlight ? "text-slate-300" : "text-slate-600"}`}>
            {feature}
          </span>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <button className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
      highlight 
        ? "bg-emerald-500 hover:bg-emerald-400 text-slate-900" 
        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
    }`}>
      Start Discussion
      <ArrowRight size={18} />
    </button>
  </motion.div>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 px-4 md:px-6">
        
        {/* 1. Header */}
        <section className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
              <Sparkles size={12} className="text-emerald-600" />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl tracking-tighter font-bold text-slate-900 mb-6">
              Menu & Deliverables
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We are currently structuring our standard packages. For now, every project gets a custom quote based on complexity. Here is a breakdown of what we typically deliver.
            </p>
          </motion.div>
        </section>

        {/* 2. Pricing Grid */}
        <section className="max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* Card 1: Small Biz / Branding */}
            <PricingCard 
              delay={0.1}
              title="Digital Presence"
              icon={Store}
              description="Perfect for local businesses needing a modern website and brand identity."
              features={[
                "Custom Landing Page Design",
                "Next.js High Performance Site",
                "Mobile Responsiveness",
                "Brand Style Guide (Logo/Colors)",
                "Domain & Hosting Setup",
                "Google Business Profile Setup"
              ]}
            />

            {/* Card 2: The Startup MVP (Highlighted) */}
            <PricingCard 
              delay={0.2}
              highlight={true}
              title="MVP Build"
              icon={Rocket}
              description="For founders who need to get a functional product to market fast."
              features={[
                "Product Strategy Workshop",
                "High-Fidelity UI/UX Design",
                "Full-Stack Dev (React/Supabase)",
                "Authentication & Database",
                "Payment Integration (Paystack)",
                "Admin Dashboard",
                "30 Days Post-Launch Support"
              ]}
            />

            {/* Card 3: Enterprise / Custom */}
            <PricingCard 
              delay={0.3}
              title="Custom Engineering"
              icon={BrainCircuit}
              description="Complex systems, automations, and long-term technical partnership."
              features={[
                "System Architecture Design",
                "Custom API Development",
                "Third-party Integrations",
                "Legacy System Migration",
                "Performance Optimization",
                "Dedicated Engineering Team",
                "SLA & Priority Support"
              ]}
            />

          </div>
        </section>

        {/* 3. The "Why no price?" FAQ */}
        <section className="max-w-3xl mx-auto pb-20">
          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex gap-4">
            <div className="hidden md:block bg-white p-3 rounded-full h-max shadow-sm text-emerald-600">
               <ChefHat size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Why does it say "Cooking"?</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We believe in honest pricing. Since every problem is unique—especially in software—giving a fixed price tag often leads to cutting corners or overcharging.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We analyze your specific needs first, then give you a price that covers <strong>high-quality execution</strong> without hidden fees.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}