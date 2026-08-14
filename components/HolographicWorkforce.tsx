"use client";

import { motion } from "framer-motion";

export default function HolographicWorkforce() {
  return (
    <div className="relative flex h-[350px] w-[350px] items-center justify-center">
      {/* 1. Futuristic Sci-Fi Pedestal */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[260px] h-[70px] pointer-events-none">
        {/* Outer neon green/blue platform ring */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 bg-cyan-950/10 blur-[4px] shadow-[0_0_35px_rgba(6,182,212,0.35)]" />
        
        {/* Metal console base ring */}
        <div className="absolute top-2 inset-x-2 bottom-2 rounded-full border border-cyan-500/40 bg-gradient-to-b from-[#091833] to-[#050B1A] shadow-[0_8px_30px_rgba(0,0,0,0.8)]" />
        
        {/* Inner glow emitter */}
        <div className="absolute top-4 inset-x-6 bottom-4 rounded-full border-2 border-brand/50 bg-brand-dark/5 shadow-[0_0_20px_rgba(34,197,94,0.6)]" />

        {/* Emitter platform lines */}
        <div className="absolute top-5 inset-x-10 bottom-5 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: "15s" }} />
        
        {/* Vertical light projector beams */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-80 bg-gradient-to-t from-cyan-500/25 via-brand/10 to-transparent blur-2xl rounded-t-full" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 h-80 bg-gradient-to-t from-brand/20 via-cyan-500/5 to-transparent blur-xl rounded-t-full" />
      </div>

      {/* 2. Central Holographic Card: "AI Workforce Hub" */}
      <motion.div
        className="relative z-10 flex h-[230px] w-[230px] -translate-y-8 flex-col rounded-xl border border-cyan-500/35 bg-[#0B1528]/85 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
      >
        {/* Glowing holographic borders */}
        <div className="absolute -inset-px rounded-xl border border-transparent bg-gradient-to-br from-cyan-500/20 to-brand/20 opacity-70 pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Workforce Hub</span>
          <span className="flex h-2 w-2 relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
        </div>

        {/* Card Body */}
        <div className="mt-3.5 flex flex-1 gap-2.5">
          {/* Sidebar Tabs */}
          <div className="flex flex-col gap-1.5 border-r border-white/5 pr-2.5">
            {[
              { label: "Employees", active: true },
              { label: "Attendance", active: false },
              { label: "Leaves", active: false },
              { label: "Payroll", active: false },
              { label: "Projects", active: false },
              { label: "Reports", active: false },
            ].map((tab) => (
              <span
                key={tab.label}
                className={`px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wide transition-all ${
                  tab.active
                    ? "bg-brand/20 text-brand-light border border-brand/35 shadow-[0_0_10px_rgba(34,197,94,0.15)]"
                    : "text-slate-500 hover:text-slate-400 cursor-pointer"
                }`}
              >
                {tab.label}
              </span>
            ))}
          </div>

          {/* Center Circle Content */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Holographic dotted rotating orbits */}
            <div className="absolute h-20 w-20 rounded-full border border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: "12s" }} />
            <div className="absolute h-24 w-24 rounded-full border border-dashed border-brand/10 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
            
            {/* Center green glowing workforce circle */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 border border-brand/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] relative">
              <div className="absolute -inset-1 rounded-full bg-brand/10 blur-[2px] animate-pulse" />
              {/* Group icon */}
              <svg className="h-7 w-7 text-brand-light relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Glass Bubbles / Particles */}
      {[
        { size: 14, top: "15%", left: "15%", delay: 0 },
        { size: 10, top: "25%", left: "82%", delay: 1.2 },
        { size: 16, top: "72%", left: "12%", delay: 2.1 },
        { size: 8, top: "52%", left: "88%", delay: 0.4 },
        { size: 12, top: "68%", left: "78%", delay: 1.8 },
      ].map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20 bg-gradient-to-tr from-white/5 to-white/10 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2)] pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
          }}
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
