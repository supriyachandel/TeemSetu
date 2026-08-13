"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Hero3DBackground from "./Hero3DBackground";
import Hero3DScene from "./Hero3DScene";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 lg:pt-6 lg:pb-16 w-full">
      {/* Immersive Full-Screen 3D Animated Background */}
      <Hero3DBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand shadow-[0_0_15px_rgba(34,197,94,0.06)]"
          >
            Workforce Management Platform
          </motion.span>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3.5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl max-w-3xl"
          >
            Everything You Need to Run Your{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">Workforce</span>, in One Place
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3.5 max-w-2xl text-lg leading-relaxed text-slate-500 font-semibold"
          >
            {siteConfig.description}
          </motion.p>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-1.5 text-sm font-bold text-brand"
          >
            Connecting Teams, Building Futures.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-emerald-600 pl-8 pr-3 py-3 text-sm font-bold text-white shadow-md hover:scale-105 active:scale-98 transition-all duration-300"
            >
              Book a Demo
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
          
          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs font-bold text-slate-500"
          >
            <span className="flex items-center gap-2.5">
              <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2.5">
              <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Free onboarding support
            </span>
            <span className="flex items-center gap-2.5">
              <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              24/7 Assistance
            </span>
          </motion.div>
        </div>

        {/* Centered Large Floating Dashboard Showcase Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 w-full flex justify-center"
        >
          <Hero3DScene />
        </motion.div>
      </div>
    </section>
  );
}
