"use client";

import ParticleNetwork from "./ParticleNetwork";
import FloatingEnergySphere from "./FloatingEnergySphere";
import AnimatedGrid from "./AnimatedGrid";
import LightTrail from "./LightTrail";

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-white via-white to-[#F8FAFC]">
      {/* Minimal futuristic grid watermark */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Atmospheric light gradients: soft green + indigo glows pushed to the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.06),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.04),transparent_50%)] pointer-events-none" />

      {/* Isometric HRMS Workforce Background Image Visual Layer */}
      <div
        className="absolute inset-0 z-[2] select-none pointer-events-none opacity-[0.22] md:opacity-[0.48] lg:opacity-[0.65] xl:opacity-[0.78] transition-all duration-700"
        style={{
          backgroundImage: "url('/bg-hrms-isometric-workforce.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Smooth gradient overlays to blend the background image seamlessly */}
      {/* 1. Top-to-bottom fade to transition smoothly underneath the navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent z-[3] pointer-events-none" />

      {/* 2. Bottom-to-top fade to transition into the next sections smoothly */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/40 to-transparent z-[3] pointer-events-none" />

      {/* Dedicated white radial glow behind the headline for crisp readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.8)_30%,transparent_65%)] z-[4] pointer-events-none opacity-95" />

      {/* 3D undulating terrain ground grid */}
      <AnimatedGrid />

      {/* Background connecting star network nodes */}
      <ParticleNetwork />

      {/* Floating interactive 3D energy sphere */}
      <FloatingEnergySphere />

      {/* Soft spotlight following the mouse cursor */}
      <LightTrail />
    </div>
  );
}
