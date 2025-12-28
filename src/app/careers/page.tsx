"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Users, 
  Cpu, 
  HeartHandshake, 
  Terminal 
} from "lucide-react";

// --- Data: Open Roles ---
const ROLES = [
  {
    id: 1,
    title: "Founding Frontend Engineer",
    type: "Equity / Part-time",
    location: "Remote / Aba",
    department: "Engineering",
    description: "We need a React specialist who breathes Next.js and Tailwind. You will own the frontend architecture of our flagship commerce MVP.",
    stack: ["React", "TypeScript", "Framer Motion"]
  },
  {
    id: 2,
    title: "Product Designer (UI/UX)",
    type: "Project-based",
    location: "Remote",
    department: "Design",
    description: "Translate complex local logistics problems into clean, accessible interfaces. We value function over flash.",
    stack: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    id: 3,
    title: "Community Advocate",
    type: "Volunteer",
    location: "Aba, Nigeria",
    department: "Community",
    description: "Help us organize local meetups (GDG/LinkedIn Local) and build the tech ecosystem on the ground in Aba.",
    stack: ["Events", "Social Media", "Public Speaking"]
  }
];

// --- Sub-Component: Role Card ---
const RoleCard = ({ role, index }: { role: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
       <ArrowRight className="text-emerald-500 -translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
    </div>

    <div className="mb-4">
      <span className="text-xs font-bold text-emerald-600 uppercase tracking-tighter mb-2 block">
        {role.department}
      </span>
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
        {role.title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3 mb-6 text-sm text-slate-500">
      <div className="flex items-center gap-1.5">
        <Briefcase size={14} />
        {role.type}
      </div>
      <div className="flex items-center gap-1.5">
        <MapPin size={14} />
        {role.location}
      </div>
    </div>

    <p className="text-slate-600 text-sm leading-relaxed mb-6">
      {role.description}
    </p>

    <div className="flex gap-2">
      {role.stack.map((tech: string) => (
        <span key={tech} className="bg-slate-50 text-slate-500 text-xs px-2 py-1 rounded border border-slate-100">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

// --- Sub-Component: Culture Value ---
const CultureValue = ({ icon: Icon, title, desc }: any) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 px-4 md:px-6">
        
        {/* 1. Hero Section */}
        <section className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
              <Users size={12} className="text-emerald-600" />
              <span>Join the Core Team</span>
            </div>
            <h1 className="text-4xl tracking-tighter md:text-5xl font-bold text-slate-900 mb-6">
              Don't just get a job. <br className="hidden md:block" />
              <span className="text-emerald-600">Build a legacy.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We are in the "garage phase." We can't offer big corporate perks yet, but we can offer equity, autonomy, and the chance to build the foundational tech layer for Aba.
            </p>
          </motion.div>
        </section>

        {/* 2. Culture / Why Join? */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">The Builder's Manifesto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <CultureValue 
                icon={Cpu}
                title="Engineering First"
                desc="We are led by engineers, not marketing. We prioritize clean code, documentation, and scalable architecture over hype."
              />
              <CultureValue 
                icon={Users}
                title="Local Impact"
                desc="Your code will directly affect how people in your city trade, learn, and move. We solve problems you can see out your window."
              />
              <CultureValue 
                icon={HeartHandshake}
                title="Ownership"
                desc="We are looking for partners, not just employees. Early members get significant equity stakes in what we build."
              />
              <CultureValue 
                icon={Clock}
                title="Async & Flexible"
                desc="We don't care about 9-to-5. We care about shipping. Work when you feel most creative."
              />
            </div>
          </div>
        </section>

        {/* 3. Open Roles Grid */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {ROLES.length} active roles
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map((role, idx) => (
              <RoleCard key={role.id} role={role} index={idx} />
            ))}
            
            {/* "General Application" Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                   <Terminal size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Role not listed?</h3>
                <p className="text-slate-400 text-sm">
                  If you are a talented builder (Backend, Mobile, Marketing), pitch us. We create roles for the right people.
                </p>
              </div>
              
              <button className="mt-8 w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                Pitch Yourself
              </button>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        {/* <section className="max-w-3xl mx-auto text-center pb-20">
          <p className="text-slate-500 mb-6">
            Not ready to apply? Join our community discord to see how we work.
          </p>
          <a href="#" className="text-emerald-600 font-bold hover:underline">
            Join the Discord Server &rarr;
          </a>
        </section> */}

      </main>

      <Footer />
    </div>
  );
}