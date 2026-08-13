"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import FloatingCards from "./FloatingCards";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring transformations for 3D tilt
  const springConfig = { damping: 28, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center cursor-pointer select-none w-full max-w-4xl mx-auto"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex flex-col items-center justify-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glowing background halo */}
        <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-brand/10 to-blue-400/10 blur-3xl opacity-80 pointer-events-none animate-glow" />

        {/* 3D Dashboard Mockup */}
        <div style={{ transform: "translateZ(10px)" }}>
          <DashboardMockup />
        </div>

        {/* Bottom Equalizer Stream Widget */}
        <div 
          style={{ transform: "translateZ(25px)" }}
          className="mt-4 sm:mt-6 w-[280px] sm:w-[400px] md:w-[500px] rounded-xl border border-slate-200/60 bg-white/90 p-3 flex items-center justify-between shadow-xl backdrop-blur-md"
        >
          {/* Left Icon */}
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 border border-brand/20 text-brand">
            <svg className="h-4 w-4 animate-spin" style={{ animationDuration: "8s" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
          
          {/* Center text skeleton bars */}
          <div className="flex-1 ml-3.5 space-y-1.5">
            <div className="h-2 w-28 rounded bg-slate-200" />
            <div className="h-1.5 w-20 rounded bg-slate-100" />
          </div>

          {/* Right Equalizer bars */}
          <div className="flex items-end gap-1 h-5 select-none">
            {[40, 75, 45, 90, 55, 80, 35].map((val, i) => (
              <div
                key={i}
                style={{ 
                  height: `${val}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s"
                }}
                className="w-0.5 rounded-sm bg-brand animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Orbiting metrics cards */}
        <FloatingCards />
      </motion.div>
    </div>
  );
}
