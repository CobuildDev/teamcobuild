"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  ArrowRight, 
  Mail 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <motion.a
    href={href}
    whileHover={{ y: -3 }}
    className="p-2 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-emerald-600 hover:border-emerald-200 transition-colors shadow-sm"
  >
    <Icon size={18} />
  </motion.a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a
      href={href}
      className="text-sm text-slate-500 hover:text-slate-900 transition-colors inline-block py-1"
    >
      {label}
    </a>
  </li>
);

// --- Main Footer Component ---

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 md:px-6 mt-12">
      {/* Main "Island" Container */}
      <div className="max-w-7xl mx-auto bg-slate-50/50 border border-slate-200 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
        
        {/* Background decorative blob (Optional subtle gradient) */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
          
          {/* Column 1: Brand & Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
               <Image
                        src="/icons/teamcobuild.svg"
                        alt="teamCobuild Logo"
                        width={160}
                        height={28}
                      />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building the future of local software solutions. Join our community to start building better together.
            </p>
            
            {/* Newsletter Pill */}
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-10 pr-12 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Spacer (Span 1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Section (Span 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Group 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 text-sm">Product</h4>
              <ul className="flex flex-col gap-2">
                <FooterLink href="#" label="Features" />
                <FooterLink href="#" label="Integrations" />
                <FooterLink href="/pricing" label="Pricing" />
                <FooterLink href="#" label="Changelog" />
              </ul>
            </div>

            {/* Group 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 text-sm">Company</h4>
              <ul className="flex flex-col gap-2">
                <FooterLink href="/about" label="About" />
                <FooterLink href="#" label="Careers" />
                <FooterLink href="/blog" label="Blog" />
                <FooterLink href="/contact" label="Contact" />
              </ul>
            </div>

            {/* Group 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 text-sm">Resources</h4>
              <ul className="flex flex-col gap-2">
                <FooterLink href="#" label="Community" />
                <FooterLink href="#" label="Help Center" />
                <FooterLink href="#" label="Terms of Service" />
                <FooterLink href="#" label="Privacy Policy" />
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Team Cobuild. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <SocialLink href="#" icon={Twitter} />
            <SocialLink href="#" icon={Linkedin} />
            <SocialLink href="#" icon={Github} />
            <SocialLink href="#" icon={Instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
}